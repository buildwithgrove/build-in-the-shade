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
        const { email, entity_type, other_type } = req.body;

        // Validate required fields
        if (!email || !entity_type) {
            return res.status(400).json({ error: 'Email and entity type are required' });
        }

        // Send data to Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbzlMj-h3tKXAH3BkO8L7hOmw_bm6TDEcNLOS98m7winni4vL7HwFKlUx0cQgZAiotG_/dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                entity_type,
                other_type: other_type || null
            })
        });

        if (response.ok) {
            res.status(200).json({ success: true });
        } else {
            throw new Error('Google Apps Script request failed');
        }

    } catch (error) {
        console.error('Error submitting waitlist:', error);
        res.status(500).json({ error: 'Failed to submit waitlist' });
    }
}
