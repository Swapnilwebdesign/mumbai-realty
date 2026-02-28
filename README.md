# 🏠 Mumbai Realty — Real Estate Website

A fully responsive Mumbai-based Real Estate Website built with **Bootstrap 5**, **Firebase**, and **EmailJS**, ready for **GitHub Pages** hosting.

---

## 📁 Project Structure

```
mumbai-realestate/
├── index.html                  ← Home Page
├── css/
│   └── style.css               ← Main Stylesheet
├── js/
│   ├── firebase-config.js      ← ⚙️ YOUR FIREBASE CONFIG HERE
│   └── main.js                 ← Shared Utilities
└── pages/
    ├── properties.html         ← Property Listing Page
    ├── property-detail.html    ← Property Detail + Inquiry Form
    ├── login.html              ← Agent Login Page
    └── dashboard.html          ← Agent Dashboard (Protected)
```

---

## 🚀 Setup Guide

### Step 1 — Create Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → Enter project name (e.g., `mumbai-realty`)
3. Disable Google Analytics (optional) → Create project

### Step 2 — Enable Firebase Services

**Authentication:**
- Sidebar → Build → Authentication → Get Started
- Sign-in method → Email/Password → **Enable**
- Users tab → Add user:
  - Email: `swapnilgorule93@gmail.com`
  - Password: (choose a strong password)

**Firestore Database:**
- Sidebar → Build → Firestore Database → Create database
- Start in **Production mode** → Choose a region (e.g., `asia-south1`) → Enable

**Firestore Rules** (Firestore → Rules tab):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can READ properties
    match /properties/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // Anyone can CREATE inquiries; only agent can read
    match /inquiries/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

**Storage (for image upload - optional):**
- Sidebar → Build → Storage → Get Started
- Rules: Allow agent write, public read

### Step 3 — Get Firebase Config

1. Firebase Console → Project Settings (⚙️ gear icon)
2. Scroll to "Your apps" → Click **Web** (`</>`) → Register app
3. Copy the `firebaseConfig` object

### Step 4 — Update `js/firebase-config.js`

Open `js/firebase-config.js` and replace all placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",           // ← Replace
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};

const AGENT_EMAIL = "swapnilgorule93@gmail.com"; // Keep this
const WHATSAPP_NUMBER = "919876543210";           // ← Replace with real number
```

### Step 5 — Setup EmailJS (Inquiry Form)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) → Sign Up (Free)
2. **Email Services** → Add Service → Gmail → Connect your Gmail
3. **Email Templates** → Create Template:
   - Subject: `New Property Inquiry from Website`
   - Body (use these exact variable names):
   ```
   Property: {{property_name}}
   Price: {{property_price}}
   Location: {{property_location}}
   
   From: {{from_name}}
   Phone: {{from_phone}}
   Email: {{from_email}}
   
   Message: {{message}}
   ```
4. Copy: **Service ID**, **Template ID**, **Public Key**
5. Update `js/firebase-config.js`:
```javascript
const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY  = "xxxxxxxxxxxxxx";
```

### Step 6 — Update WhatsApp Number

In `js/firebase-config.js`:
```javascript
const WHATSAPP_NUMBER = "919876543210"; // Country code + number (no spaces/dashes)
// Example: India +91 98765 43210 → "919876543210"
```

---

## 🌐 Deploy on GitHub Pages

### Option A — GitHub Desktop (Easiest)

1. Create a new GitHub repository (e.g., `mumbai-realty`)
2. Upload all files maintaining the folder structure
3. Settings → Pages → Source: `main` branch → Root `/`
4. Your site will be live at: `https://yourusername.github.io/mumbai-realty/`

### Option B — Git CLI

```bash
cd mumbai-realestate
git init
git add .
git commit -m "Initial commit: Mumbai Realty website"
git remote add origin https://github.com/yourusername/mumbai-realty.git
git push -u origin main
```
Then in GitHub → Settings → Pages → Deploy from main branch.

### ⚠️ Important — Update Firebase Authorized Domains

Firebase Console → Authentication → Settings → **Authorized domains**
→ Add your GitHub Pages domain: `yourusername.github.io`

---

## 📦 Firebase Data Structure

### Collection: `properties`
```
{
  title:       "2BHK Flat in Andheri West",
  price:       7500000,
  location:    "Andheri",
  type:        "Flat",           // Flat | Shop | Office | Plot
  status:      "For Sale",       // For Sale | Sold
  area:        "850",
  bedrooms:    "2",
  bathrooms:   "2",
  description: "Spacious 2BHK...",
  image:       "https://...",
  createdAt:   Timestamp
}
```

### Collection: `inquiries`
```
{
  propertyId:    "abc123",
  propertyTitle: "2BHK Flat in Andheri West",
  name:          "Rahul Sharma",
  phone:         "9876543210",
  email:         "rahul@email.com",
  message:       "Interested in viewing...",
  createdAt:     Timestamp
}
```

---

## 🎯 Features

| Feature | Status |
|---------|--------|
| Home Page with Hero & Search | ✅ |
| Property Listing with Filters | ✅ |
| Property Detail Page | ✅ |
| Firebase Firestore Integration | ✅ |
| Agent Login (Email/Password Auth) | ✅ |
| Dashboard — Add/Edit/Delete Property | ✅ |
| Inquiry Form with EmailJS | ✅ |
| Inquiry Storage in Firestore | ✅ |
| WhatsApp Floating Button | ✅ |
| Price Formatting (₹ Lakh / Crore) | ✅ |
| For Sale / Sold Status Badge | ✅ |
| SEO Meta Tags | ✅ |
| Loading Animation | ✅ |
| Admin Stats Counter | ✅ |
| Fully Responsive (Mobile/Tablet/Desktop) | ✅ |
| Bootstrap 5 + Font Awesome | ✅ |
| Mumbai Area Filter | ✅ |
| Image Preview in Dashboard | ✅ |
| Toast Notifications | ✅ |
| Google Maps Embed | ✅ |

---

## 📞 Agent Details

- **Agent:** Swapnil Gorule
- **Email:** swapnilgorule93@gmail.com
- **Location:** Mumbai, Maharashtra, India
- **Areas:** Andheri, Borivali, Virar, Bandra, Mira Road, Kandivali

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Framework:** Bootstrap 5.3
- **Icons:** Font Awesome 6.5
- **Database:** Firebase Firestore
- **Auth:** Firebase Authentication
- **Email:** EmailJS
- **Hosting:** GitHub Pages
- **Fonts:** Playfair Display + DM Sans
