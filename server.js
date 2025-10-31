const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Use PORT from environment variable or default to 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  // Handle API routes first
  if (req.url === '/api/auth' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { password } = JSON.parse(body);

        if (!password) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Password is required' }));
          return;
        }

        // Simple password check for local development
        if (password === 'fafo') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Invalid password' }));
        }
      } catch (error) {
        console.error('Authentication error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Server error' }));
      }
    });
    return;
  }

  if (req.url === '/api/submit-waitlist' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);

        // Send to Google Apps Script
        const postData = JSON.stringify(data);
        const options = {
          hostname: 'script.google.com',
          port: 443,
          path: '/macros/s/AKfycbzlMj-h3tKXAH3BkO8L7hOmw_bm6TDEcNLOS98m7winni4vL7HwFKlUx0cQgZAiotG_/dev',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        };

        const request = https.request(options, (response) => {
          // Google Apps Script returns 302 redirect on success, which is normal
          if (response.statusCode === 200 || response.statusCode === 302) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          } else {
            console.error('Google Apps Script returned status:', response.statusCode);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Google Apps Script request failed' }));
          }
        });

        request.on('error', (error) => {
          console.error('Request error:', error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Request failed' }));
        });

        request.write(postData);
        request.end();
      } catch (error) {
        console.error('Error submitting waitlist:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to submit waitlist' }));
      }
    });
    return;
  }

  // Get the URL path
  let url = req.url;
  let baseDir = __dirname;

  // Handle /docs requests - serve from docs directory
  if (url.startsWith('/docs')) {
    baseDir = path.join(__dirname, 'docs');
    url = url.substring(5); // Remove '/docs' prefix
    // If accessing /docs or /docs/, redirect to /docs/
    if (url === '' || url === '/') {
      url = '/index.html';
    }
  }
  // Handle root path
  else if (url === '/') {
    url = '/index.html';
  }
  // Handle clean URLs (without .html extension)
  else if (!url.includes('.') && !url.endsWith('/')) {
    url = `${url}.html`;
  }

  // Get the file path
  const filePath = path.join(baseDir, url);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If file doesn't exist, serve index.html instead of 404
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('404 Not Found');
          return;
        }

        // Set security headers for redirect page
        const securityHeaders = {
          'Content-Type': 'text/html',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self' https://unpkg.com https://*.supabase.co wss://*.supabase.co https://hrmubnilyvbefonmsfpy.supabase.co https://script.google.com; font-src 'self' https://fonts.gstatic.com data:",
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        };

        res.writeHead(200, securityHeaders);
        res.end(data);
      });
      return;
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
        return;
      }

      // Set the content type based on file extension
      const ext = path.extname(filePath);
      let contentType = 'text/html';

      switch (ext) {
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
        case '.jpeg':
          contentType = 'image/jpeg';
          break;
        case '.svg':
          contentType = 'image/svg+xml';
          break;
        case '.gif':
          contentType = 'image/gif';
          break;
      }

      // Set security headers - include Supabase for status page
      const securityHeaders = {
        'Content-Type': contentType,
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self' https://unpkg.com https://*.supabase.co wss://*.supabase.co https://hrmubnilyvbefonmsfpy.supabase.co https://script.google.com; font-src 'self' https://fonts.gstatic.com data:",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      };

      res.writeHead(200, securityHeaders);
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Clean URLs enabled - .html extensions are stripped`);
});
