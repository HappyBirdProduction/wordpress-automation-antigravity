# 🌌 Automating WordPress REST API with Antigravity 2.0

This repository contains a comprehensive tutorial and a verified Node.js script demonstrating how to integrate an AI agent (such as **Antigravity 2.0**) with WordPress using the native REST API and Application Passwords.

---

## 📝 LinkedIn Post (Case Study / Tutorial)

Below is the ready-to-use content prepared for LinkedIn:

```text
🚀 How I forced an AI Coding Agent (Antigravity 2.0) to fully automate WordPress via REST API? (Case Study + Solving a sneaky visual typo bug!)

Have you ever wondered how to automate creating pages, updating menus, or activating plugins in WordPress without ever touching the admin panel? The cleanest and most secure way is to use the native WordPress REST API combined with Application Passwords.

Recently, I was working on integrating my AI agent — Antigravity 2.0 — with a local WordPress instance. And that's when we hit a classic brick wall: the dreaded 401 Unauthorized error.

🔍 The AI Detective Work Under the WordPress Hood:
The generated application password in the UI looked like: abc1 defg h1ij klmn opqr stuv.
It looked 100% correct, yet the REST API stubbornly rejected our authentication headers. Instead of giving up, I wrote a quick diagnostic script in PHP and examined the WordPress core code (files wp-includes/user.php and class-wp-application-passwords.php).

Here is what I uncovered:
1️⃣ WordPress strips spaces: During authentication, the WP engine automatically sanitizes the password by stripping all non-alphanumeric characters using a regular expression: preg_replace('/[^a-z\d]/i', '', $password). This meant that passing spaces in our code wasn't the issue.
2️⃣ The Visual Ambiguity Trap (Typo Bug!): In the third block of the password (h1ij), the character that looked exactly like the digit 1 (one) in the UI text box was actually a lowercase "l" (as in L). After running an automated PHP check testing 81 visual permutations of ambiguous characters, the AI successfully found the valid password: abc1 defg hlij klmn opqr stuv.

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

## 🛠️ Technical Documentation & Customization

### 1. Generating Application Passwords in WordPress
Before running the script, you must generate an Application Password in your WordPress admin panel:
1. Log in to your WordPress dashboard.
2. Navigate to **Users** -> **Profile** (or **All Users** and edit your target user).
3. Scroll down to the **Application Passwords** section.
4. Enter an application name (e.g., `Antigravity`) and click **Add New Application Password**.
5. Copy the generated 24-character password (e.g., `xxxx xxxx xxxx xxxx xxxx xxxx`). **Keep it safe; you will not be able to see it again!**

---

### 2. Configuration Setup
Open `test_wp_api.js` and customize the configuration block at the top of the file:

```javascript
const username = 'YOUR_WORDPRESS_USERNAME'; // e.g., 'admin'
const appPassword = 'YOUR_APPLICATION_PASSWORD'; // e.g., 'xxxx xxxx xxxx xxxx xxxx xxxx'
const endpoint = 'https://your-wordpress-site.local/wp-json/wp/v2/pages';
```

---

### 3. Test Script (`test_wp_api.js`)
The test script automatically creates a new page in WordPress with published status and a personalized responsive HTML block.

To run the script:
1. Initialize a Node.js project (if not already done):
   ```bash
   npm init -y
   ```
2. Run the script:
   ```bash
   node test_wp_api.js
   ```

---

*Generated automatically by **Antigravity 2.0**.*
