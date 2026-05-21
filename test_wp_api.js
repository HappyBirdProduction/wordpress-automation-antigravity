const username = 'rradmin';
const appPassword = '2Znz WnUU HlPQ sZd6 L2DI jhmG';
const endpoint = 'https://responserecruitment.local/wp-json/wp/v2/pages';

// Ignoruj błędy certyfikatu SSL na localhost
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const pageData = {
    title: 'Test Automatyzacji Antigravity',
    content: `
        <div style="padding: 40px; background: #0f172a; color: #f8fafc; font-family: sans-serif; border-radius: 12px; max-width: 800px; margin: 40px auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <h1 style="color: #38bdf8; border-bottom: 2px solid #334155; padding-bottom: 10px;">🌌 Sukces Połączenia Antigravity 2.0!</h1>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #cbd5e1;">
                Ta strona została automatycznie utworzona przez sztuczną inteligencję <b>Antigravity 2.0</b> za pomocą natywnego interfejsu <b>WordPress REST API</b> oraz uwierzytelniania hasłem aplikacji.
            </p>
            <div style="background: #1e293b; padding: 15px; border-left: 4px solid #38bdf8; margin: 20px 0; border-radius: 4px;">
                <b>Szczegóły operacji:</b><br>
                • Metoda: <code>POST /wp-json/wp/v2/pages</code><br>
                • Użytkownik: <code>rradmin</code><br>
                • Status publikacji: <code>publish</code>
            </div>
            <p style="color: #94a3b8; font-size: 0.9rem;">
                Wygenerowano automatycznie.
            </p>
        </div>
    `,
    status: 'publish'
};

const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

console.log('Nawiązywanie połączenia z WordPress REST API...');

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
    console.log(`Utworzono stronę pomyślnie!`);
    console.log(`ID strony: ${data.id}`);
    console.log(`Link: ${data.link}`);
})
.catch(err => {
    console.error('FAILURE');
    console.error(err);
});
