# 🌌 Automating WordPress REST API with Antigravity 2.0

This repository contains a comprehensive tutorial and a verified Node.js script demonstrating how to integrate the **Antigravity 2.0** AI agent with WordPress using the native REST API and Application Passwords.

---

## 📝 LinkedIn Post (Case Study / Tutorial)

Below is the ready-to-use content prepared for LinkedIn:

```text
🚀 How I forced an AI Coding Agent (Antigravity 2.0) to fully automate WordPress via REST API? (Case Study + Solving a sneaky visual typo bug!)

Have you ever wondered how to automate creating pages, updating menus, or activating plugins in WordPress without ever touching the admin panel? The cleanest and most secure way is to use the native WordPress REST API combined with Application Passwords.

Recently, I was working on integrating my AI agent — Antigravity 2.0 — with a local WordPress instance. And that's when we hit a classic brick wall: the dreaded 401 Unauthorized error.

🔍 The AI Detective Work Under the WordPress Hood:
The generated application password in the UI looked like: 2Znz WnUU H1PQ sZd6 L2DI jhmG.
It looked 100% correct, yet the REST API stubbornly rejected our authentication headers. Instead of giving up, I wrote a quick diagnostic script in PHP and examined the WordPress core code (files wp-includes/user.php and class-wp-application-passwords.php).

Here is what I uncovered:
1️⃣ WordPress strips spaces: During authentication, the WP engine automatically sanitizes the password by stripping all non-alphanumeric characters using a regular expression: preg_replace('/[^a-z\d]/i', '', $password). This meant that passing spaces in our code wasn't the issue.
2️⃣ The Visual Ambiguity Trap (Typo Bug!): In the third block of the password (H1PQ), the character that looked exactly like the digit 1 (one) in the UI text box was actually a lowercase "l" (as in L). After running an automated PHP check testing 81 visual permutations of ambiguous characters, the AI successfully found the valid password: 2Znz WnUU HlPQ sZd6 L2DI jhmG.

🎉 Success! With the corrected credentials, our Node.js script connected instantly and programmatically generated a beautifully styled custom HTML page in a fraction of a second.

💡 Key Takeaways for Developers:
* Always check for visually ambiguous characters in auto-generated passwords (1 vs l vs I, 0 vs O).
* For local REST API tests using Node.js, remember to bypass SSL verification by adding process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' for local self-signed certificates.
* The WordPress REST API + Application Passwords combination is an incredibly powerful tool that unlocks full autonomy for AI coding agents in the WordPress ecosystem.

I've published the full Node.js script and connection instructions on my GitHub:
👉 https://github.com/HappyBirdProduction/wordpress-automation-antigravity

What are your thoughts on this level of automation? Do you use the REST API to manage your WordPress sites? Let's discuss in the comments! 👇

#wordpress #webdevelopment #automation #nodejs #ai #coding #antigravity #restapi
```

---

## 🛠️ Technical Documentation

### Connection Setup
* **User:** `rradmin`
* **Application Password:** `2Znz WnUU HlPQ sZd6 L2DI jhmG` (visually corrected)
* **REST API Endpoint:** `https://responserecruitment.local/wp-json/wp/v2/pages`

### Test Script (`test_wp_api.js`)
The test script automatically creates a new page in WordPress with published status and a personalized responsive HTML block.

To run the script:
```bash
node test_wp_api.js
```

The source code can be found in the [test_wp_api.js](./test_wp_api.js) file.

---

*Generated automatically by **Antigravity 2.0**.*
