# 📚 Course Outlines & Curriculums (`docs/`)

এখানে সমস্ত কোর্সের আউটলাইন এবং কারিকুলাম সংরক্ষিত রয়েছে।

## 📁 বর্তমান ফোল্ডার গঠন (Current Structure):
```
docs/
├── l1/              # SOC Analyst L1 Course Outline
│   └── index.html
├── l2/              # SOC Analyst L2 Course Outline (Advanced)
│   └── index.html
└── template/        # নতুন কোর্স তৈরির রেডিমেড টেমপ্লেট
    └── index.html
```

---

## 🚀 নতুন কোনো কোর্স আউটলাইন যুক্ত করার সহজ ৩টি ধাপ:

### ধাপ ১: নতুন ফোল্ডার তৈরি করুন
`docs/template/` ফোল্ডারটি কপি করে আপনার কাঙ্ক্ষিত কোর্সের নামে একটি নতুন ফোল্ডার বানান।
যেমন:
```bash
cp -r docs/template docs/threat-hunting
```
অথবা গ্রাফিকাল ফাইল ম্যানেজারে কপি-পেস্ট করে রিনেম করুন (যেমন `docs/l3` বা `docs/incident-response`).

### ধাপ ২: টেক্সট এবং ক্লাসের তালিকা এডিট করুন
নতুন তৈরি হওয়া `docs/[কোর্স-নাম]/index.html` ফাইলটি খুলে:
- কোর্সের নাম (Course Title)
- কয়টি ক্লাস হবে (Total Classes)
- ক্লাসের আউটলাইন এবং প্র্যাকটিস অ্যাসাইনমেন্ট পরিবর্তন করে সেভ করুন।

### ধাপ ৩: পোর্টালের কোর্সের লিস্টে যুক্ত করুন
`assets/js/courses.js` ফাইলটি খুলুন এবং `COURSES` লিস্টে একটি নতুন অবজেক্ট যোগ করুন:

```javascript
{
  id: "threat-hunting",
  title: "Threat Hunting & Sigma Rules",
  level: "Advanced",
  category: "hunting",
  status: "Upcoming",
  badgeColor: "purple",
  duration: "১০টি ক্লাস · ১০ ঘণ্টা",
  schedule: "শুক্রবার ও শনিবার · রাত ৯টা",
  description: "Proactive threat hunting methodologies, MITRE ATT&CK mapping এবং Sigma detection rules।",
  tags: ["Hunting", "Sigma", "MITRE", "Splunk"],
  outlineUrl: "/docs/threat-hunting/index.html",
  active: true
}
```

ব্যাস! আপনার পোর্টালের হোমপেজে স্বয়ংক্রিয়ভাবে নতুন কোর্সটির কার্ড চলে আসবে এবং সার্চ ও ফিল্টারিং কার্যকর হবে।
GitHub-এ পুশ করলে Vercel-এ লাইভ হয়ে যাবে!
