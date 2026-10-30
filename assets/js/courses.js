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
    outlineUrl: "docs/l1/index.html",
    directFolderUrl: "l1/index.html",
    badgeType: "live",
    seats: "সবার জন্য উন্মুক্ত",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
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
    outlineUrl: "docs/l2/index.html",
    directFolderUrl: "l2/index.html",
    badgeType: "upcoming",
    seats: "রেজিস্ট্রেশন শীঘ্রই শুরু",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`
  },
  {
    id: "course-template",
    title: "নতুন কোর্স আউটলাইন টেমপ্লেট",
    category: "template",
    level: "Instructor / Template",
    status: "Template",
    statusText: "রেডিমেড টেমপ্লেট",
    duration: "কাস্টমাইজেবল",
    schedule: "যেকোনো সময়",
    description: "শিক্ষক/ইনস্ট্রাক্টরদের জন্য তৈরি রেডিমেড কারিকুলাম টেমপ্লেট। খুব সহজে কপি করে যেকোনো নতুন কোর্সের আউটলাইন তৈরি করা যায়।",
    tags: ["Template", "Curriculum", "Docs"],
    outlineUrl: "docs/template/index.html",
    directFolderUrl: "docs/template/index.html",
    badgeType: "upcoming",
    seats: "ফ্রি ব্যবহারের জন্য",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSES };
}
