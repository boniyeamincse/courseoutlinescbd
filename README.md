# 🛡️ SOC Community of Bangladesh — Student Course Portal & Outlines

Welcome to the **Course Outline & Curriculum Portal** for the **SOC Community of Bangladesh**!
This is a lightweight, responsive, and blazing-fast HTML, CSS, and Vanilla JavaScript project built for instructors to share course outlines directly with students.

It is 100% ready to deploy to **Vercel** and host on **GitHub**.

---

## 📂 Project Architecture

```text
courseofsoccbd/
├── index.html                  # 🌐 Main Student Portal (Course Catalog, Search & Filter)
├── vercel.json                 # ⚡ Vercel Deployment Configuration (Clean URLs & Rewrites)
├── .gitignore                  # 🔒 Git ignore rules
├── README.md                   # 📖 Full documentation & deployment guide
│
├── assets/                     # 🎨 Shared static assets
│   ├── css/
│   │   └── main.css            # Cyber defensive UI styling & responsiveness
│   ├── js/
│   │   ├── courses.js          # 📋 Centralized Course Registry (Easy to add new courses!)
│   │   └── main.js             # 🔍 Instant search, category filters & 1-click share logic
│   └── images/
│       ├── soc_operations_center.jpg   # High-resolution SOC Command Center image
│       └── logo.svg            # SOC Community of Bangladesh logo
│
└── docs/                       # 📚 Course Outlines & Curriculums Directory
    ├── README.md               # 📝 Guide on adding new course folders
    ├── l1/                     # 🟢 SOC Analyst L1 Live Course Outline
    │   └── index.html
    ├── l2/                     # 🟡 Advanced SOC Analyst L2 Course Outline
    │   └── index.html
    └── template/               # ⚪ Ready-to-duplicate course outline template
        └── index.html
```

---

## 🚀 How to Add New Course Outlines (ভবিষ্যতে নতুন কোর্স যুক্ত করার নিয়ম)

ভবিষ্যতে যখনই নতুন কোনো কোর্স যুক্ত করতে চাইবেন:

1. **`docs/template/` ফোল্ডার কপি করুন**:
   ```bash
   cp -r docs/template docs/threat-hunting
   ```
2. **`docs/threat-hunting/index.html` এডিট করুন**:
   - কোর্সের নাম, ক্লাসের সংখ্যা ও প্রতিটি ক্লাসের টপিক লিখে সেভ করুন।
3. **`assets/js/courses.js` ফাইলে এন্ট্রি যোগ করুন**:
   ```javascript
   {
     id: "threat-hunting",
     title: "Threat Hunting & Sigma Rules",
     category: "advanced",
     level: "Tier 2 / Advanced",
     status: "Upcoming",
     statusText: "পরবর্তী ব্যাচ",
     duration: "১০টি ক্লাস · ১০ ঘণ্টা",
     schedule: "শুক্রবার ও শনিবার · রাত ৯টা",
     description: "Proactive threat hunting methodologies, MITRE ATT&CK mapping এবং Sigma detection rules।",
     tags: ["Threat Hunting", "Sigma", "ATT&CK"],
     outlineUrl: "/docs/threat-hunting/index.html",
     badgeType: "upcoming"
   }
   ```
4. ব্যাস! আপনার পোর্টালের হোমপেজে কার্ডটি নিজে থেকেই চলে আসবে।

---

## 🌐 Deploy to Vercel (ভার্সেলে হোস্ট করার নিয়ম)

### পদ্ধতি ১: GitHub কানেক্ট করে (সবচেয়ে সহজ ও অটোমেটিক)
1. GitHub-এ একটি নতুন রিপোজিটরি তৈরি করুন (যেমন `courseofsoccbd`)।
2. নিচের Git কমান্ডগুলো চালিয়ে কোড GitHub-এ পুশ করুন।
3. [Vercel](https://vercel.com)-এ যান → **Add New Project** → আপনার GitHub রিপোজিটরিটি সিলেক্ট করুন।
4. **Deploy** বাটনে ক্লিক করুন। কোনো বিল্ড কনফিগারেশনের প্রয়োজন নেই (Static project)।
5. প্রতিবার নতুন কোর্স যোগ করে `git push` করলেই Vercel স্বয়ংক্রিয়ভাবে আপডেট করে দেবে!

### পদ্ধতি ২: Vercel CLI দিয়ে সরাসরি
```bash
npx vercel
```
প্রম্পট অনুযায়ী `Yes` প্রেস করলে ১ মিনিটেই লাইভ URL পেয়ে যাবেন।

---

## 🐙 Push to GitHub (গিটহাবে আপলোড করার কমান্ডসমূহ)

আপনার টার্মিনালে এই ফোল্ডারে থেকে নিচের কমান্ডগুলো এক এক করে রান করুন:

```bash
# ১. গিট ইনিশিয়ালাইজ করুন (অলরেডি করা আছে)
git add .
git commit -m "Initial commit: SOC course outline portal with L1, L2 and docs structure"

# ২. আপনার GitHub রিমোট যুক্ত করুন (your-username এবং repo-name পরিবর্তন করুন)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git

# ৩. মেইন ব্রাঞ্চ পুশ করুন
git branch -M main
git push -u origin main
```

---

## ✨ Features

- **⚡ Zero Build Steps**: কোনো Node বা জটিল বিল্ড স্টেপ ছাড়া পিওর HTML/CSS/JS। যেকোনো হোস্টিংয়ে নিমিষেই চলে।
- **🔍 Instant Live Search**: বাংলা ও ইংরেজি উভয় ভাষায় কোর্স, প্রযুক্তি বা কীওয়ার্ড দিয়ে রিয়েল-টাইম সার্চ।
- **🔗 1-Click Share Button**: শিক্ষার্থীদের সাথে সরাসরি হোয়াটসঅ্যাপ, মেসেঞ্জার বা টেলিগ্রামে শেয়ার করার জন্য ওয়ান-ক্লিক লিংক কপি বাটন।
- **🖨️ Clean Print / PDF**: প্রতিটি কোর্স আউটলাইনে প্রিন্ট বা সুন্দর PDF হিসেবে সেভ করার বিল্ট-ইন অপশন।
- **📱 Fully Responsive**: মোবাইল, ট্যাবলেট ও ডেস্কটপে সুন্দরভাবে অপ্টিমাইজড ডার্ক সাইবারনেটিক থিম।
