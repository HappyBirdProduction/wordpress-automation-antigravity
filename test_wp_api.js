// =========================================================================
// WORDPRESS REST API TEST SCRIPT
// =========================================================================
// INSTRUCTIONS:
// 1. Replace 'YOUR_WORDPRESS_USERNAME' with your WordPress admin username.
// 2. Replace 'YOUR_APPLICATION_PASSWORD' with your generated Application Password.
//    (Usually formatted as: 'xxxx xxxx xxxx xxxx xxxx xxxx')
// 3. Replace 'https://your-wordpress-site.local' with your WordPress site domain.
// =========================================================================

const username = 'YOUR_WORDPRESS_USERNAME';
const appPassword = 'YOUR_APPLICATION_PASSWORD';
const endpoint = 'https://your-wordpress-site.local/wp-json/wp/v2/pages';

// Ignore self-signed SSL certificate errors on local development environment (Self-Signed Certificates)
// Keep this line only for local testing; remove or comment out in production environments!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Responsive HTML block to insert as the new page content
const pageData = {
    title: 'Antigravity REST API Connection Test',
    content: `
        <div style="padding: 40px; background: #0f172a; color: #f8fafc; font-family: sans-serif; border-radius: 12px; max-width: 800px; margin: 40px auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <h1 style="color: #38bdf8; border-bottom: 2px solid #334155; padding-bottom: 10px;">🌌 Antigravity Connection Success!</h1>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #cbd5e1;">
                This page was automatically generated using the native <b>WordPress REST API</b> and Application Passwords.
            </p>
            <div style="background: #1e293b; padding: 15px; border-left: 4px solid #38bdf8; margin: 20px 0; border-radius: 4px;">
                <b>Operation Details:</b><br>
                • Method: <code>POST /wp-json/wp/v2/pages</code><br>
                • Status: <code>publish</code>
            </div>
            <p style="color: #94a3b8; font-size: 0.9rem;">
                Generated automatically.
            </p>
        </div>
    `,
    status: 'publish'
};

// Generate Base64 auth token
const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

console.log('Connecting to WordPress REST API...');

fetch(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
        'X-HTTP-Authorization': `Basic ${auth}`
    },
    body: JSON.stringify(pageData)
})
.then(res => {
    if (!res.ok) {
        return res.json().then(err => { throw err; });
    }
    return res.json();
})
.then(data => {
    console.log('SUCCESS');
    console.log(`Page created successfully!`);
    console.log(`Page ID: ${data.id}`);
    console.log(`Link: ${data.link}`);
})
.catch(err => {
    console.error('FAILURE');
    console.error(err);
});
