# 🌌 WordPress Automation & AI Agent Integration

This repository was created in the context of my LinkedIn post regarding WordPress REST API automation and AI agent integration:

👉 **[Read the full Case Study on LinkedIn](https://www.linkedin.com/posts/kamil-krzysztof-nagorski_wordpress-webdevelopment-automation-share-7463258772656947202-fhHn?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrrEq8BAq04KAaHA1qea2QPg_3N0f_Y1f0)**

Here, you'll find the technical implementation and the verified Node.js script to authenticate with the native WordPress REST API using Application Passwords.

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
