import crypto from 'crypto';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ success: false, error: 'Password is required' });
        }

        // Password verification
        const SALT = 'grove-api-salt-2025';
        const STORED_HASH = crypto.pbkdf2Sync('fafo', SALT, 100000, 64, 'sha512').toString('hex');
        const hash = crypto.pbkdf2Sync(password, SALT, 100000, 64, 'sha512').toString('hex');

        if (hash === STORED_HASH) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ success: false, error: 'Invalid password' });
        }

    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}
