/**
 * SOC Community of Bangladesh — Course Registry
 * 
 * To add a new course outline:
 * 1. Duplicate `docs/template/` into `docs/your-course-name/`
 * 2. Update the outline content in `docs/your-course-name/index.html`
 * 3. Add an entry to the COURSES array below!
 */

const COURSES = [
  {
    id: "soc-analyst-l1",
    title: "SOC Analyst L1 Live Course",
    category: "foundation",
    level: "Foundation to Practical",
    status: "Live",
    statusText: "১০০% ফ্রি · লাইভ ক্লাস",
    duration: "১২টি ক্লাস · ১২ ঘণ্টা",
    schedule: "শনি, সোম, বুধ · রাত ৯টা-১০টা",
    description: "Fundamentals থেকে বাস্তব Alert Monitoring, Validation, Verdict, Analyst Comment এবং Escalation—১২টি লাইভ ক্লাসে একটি সম্পূর্ণ alert handling journey।",
    tags: ["Wazuh", "SIEM", "Alert Triage", "Evidence", "Escalation"],
    outlineUrl: "/docs/l1/index.html",
    directFolderUrl: "/l1/",
    badgeType: "live",
    seats: "সবার জন্য উন্মুক্ত"
  },
  {
    id: "soc-analyst-l2",
    title: "Advanced SOC Analyst L2",
    category: "advanced",
    level: "Tier 2 & Threat Hunting",
    status: "Upcoming",
    statusText: "পরবর্তী ব্যাচ আসছে",
    duration: "১২টি ক্লাস · ১২ ঘণ্টা ল্যাব",
    schedule: "সময়সূচী শীঘ্রই ঘোষিত হবে",
    description: "Escalated alerts deep investigation, Sigma detection rules, Sysmon/Auditd analysis, Threat Hunting, Root Cause Analysis (RCA) ও Incident Containment।",
    tags: ["Sysmon", "Threat Hunting", "Sigma Rules", "ATT&CK", "Forensics"],
    outlineUrl: "/docs/l2/index.html",
    directFolderUrl: "/l2/",
    badgeType: "upcoming",
    seats: "রেজিস্ট্রেশন শীঘ্রই শুরু"
  },
  {
    id: "course-template",
    title: "Course Outline Template",
    category: "template",
    level: "Instructor / Template",
    status: "Template",
    statusText: "রেডিমেড টেমপ্লেট",
    duration: "Customizable",
    schedule: "Anytime",
    description: "শিক্ষক/ইনস্ট্রাক্টরদের জন্য তৈরি রেডিমেড কারিকুলাম টেমপ্লেট। খুব সহজে কপি করে নতুন কোর্সের আউটলাইন তৈরি করা যায়।",
    tags: ["Template", "Curriculum", "Docs"],
    outlineUrl: "/docs/template/index.html",
    directFolderUrl: "/docs/template/",
    badgeType: "upcoming",
    seats: "ফ্রি ব্যবহারের জন্য"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSES };
}
