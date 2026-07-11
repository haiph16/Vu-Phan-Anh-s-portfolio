import { BookOpen, Microscope, Trophy, Users, Zap, Heart } from "lucide-react";

import academic1 from "../assets/logo-cnn.jpg";
import academic2 from "../assets/logo-SAT.jpg";
import academic3 from "../assets/logo-ielts.jpg";
import academic11 from "../assets/SMU.jpg";
import research1 from "../assets/bai-bao-green-credit.png";
import research2 from "../assets/unnamed.jpg";
import award1 from "../assets/giai-3-vhd.jpg";
import award2 from "../assets/trien-vong-vhd.jpg";
import leadership1 from "../assets/division-leader-cec.jpg";
import leadership2 from "../assets/tro-giang-toan.jpg";
import extracurricular1 from "../assets/logo-cec.jpg";
import extracurricular2 from "../assets/logo-cec.jpg";
import extracurricular3 from "../assets/tv-clb-ta.jpg";
import extracurricular4 from "../assets/kh-leadership-UK.jpg";
import extracurricular5 from "../assets/kh-public-speaking-Sing.jpg";
import extracurricular6 from "../assets/onepage.jpg";
import socialimpact1 from "../assets/Tu-thien-tet-cec.jpg";
import socialimpact2 from "../assets/tu-thien-nu-cuoi.jpg";
import socialimpact3 from "../assets/Dich-sach.jpg";
import academic4 from "../assets/academic4.jpg";
import academic5 from "../assets/bocconi.png";
import academic6 from "../assets/polyu.jpg";
import academic7 from "../assets/academic7.jpg";
import academic8 from "../assets/academic8.jpg";
import academic9 from "../assets/UCD.jpg";
import academic10 from "../assets/CHKU.jpg";
import upcoming from "../assets/upcoming.jpg";

// ─── Tab Navigation Config ────────────────────────────────────────────────────

export const tabsConfig = [
  {
    label: "Academic Profile",
    icon: BookOpen,
    color: "from-green-350 to-green-300",
    borderColor: "#0EA5E9",
  },
  {
    label: "Research Experience",
    icon: Microscope,
    color: "from-green-350 to-green-300",
    borderColor: "#A855F7",
  },
  {
    label: "Awards & Honors",
    icon: Trophy,
    color: "from-green-350 to-green-300",
    borderColor: "#F97316",
  },
  {
    label: "Professional & Leadership",
    icon: Users,
    color: "from-green-350 to-green-300",
    borderColor: "#10B981",
  },
  {
    label: "Extracurricular Activities",
    icon: Zap,
    color: "from-green-350 to-green-300",
    borderColor: "#EAB308",
  },
  {
    label: "Social Impact",
    icon: Heart,
    color: "from-green-350 to-green-300",
    borderColor: "#EC4899",
  },
];

// ─── Academic Profiles ────────────────────────────────────────────────────────

export const academicItems = [
  {
    title: "Singapore Management University (SMU)",
    img: academic11,
    date: "  Aug 2026 - Expected 2030",
    author:
      "Bachelor of Accountancy | Intended Second Major: Accounting Data and Analytics",
    color: "white",
    link: "#",
    desc: "• Recipient of the ASEAN Undergraduate Scholarship",
  },
  {
    title: "Foreign Language Specialized School (FLSS)",
    img: academic1,
    date: "Sep 2023 - Jun 2026",
    author: "English Specialized Programme",
    color: "white",
    // author: "English specialized programme",
    desc: "• Cumulative GPA: 9.73/10\n• Top 1% of 705 students at Foreign Language Specialized School\n• SAT: 1570/1600\n• IELTS: 8.0/9.0 ",
    link: "https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=sharing",
  },
  // {
  //   title: "SAT Score Certification",
  //   img: academic2,
  //   date: "Dec 2025",
  //   color: "white",
  //   desc: "• SAT Score: 1570/1600\n• Math: 800/800",
  //   link: "https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing",
  // },
  // {
  //   title: "IELTS Certification",
  //   img: academic3,
  //   date: "Mar 2025",
  //   color: "white",
  //   desc: "• Overall: 8.0/9.0",
  //   link: "https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing",
  // },
];

// ─── University Admissions ────────────────────────────────────────────────────

// Asian University Admissions
export const asianUniversityItems = [
  {
    title: "Singapore Management University (SMU)",
    img: academic11,
    date: "ABachelor of Accountancy | Intended Second Major: Accounting Data and Analytics  |  Aug 2026 - Expected 2030",
    color: "white",
    link: "#",
  },
  {
    title: "The University of Hong Kong \n (HKU) | \n Hong Kong",
    img: academic4,
    date: "ASIAN UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "The Hong Kong Polytechnic University (PolyU) | \n Hong Kong",
    img: academic6,
    date: "ASIAN UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
];

// European University Admissions
export const europeanUniversityItems = [
  {
    title: "Bocconi University | Italy",
    img: academic5,
    date: "EUROPEAN UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "University College Dublin (UCD) | \n Ireland",
    img: academic9,
    date: "EUROPEAN UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "Aalto University | Finland",
    img: academic7,
    date: "EUROPEAN UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
];

// Combined for backward compatibility
export const universityItems = [
  ...asianUniversityItems,
  ...europeanUniversityItems.slice(0, -1),
];

// ─── Research Experiences ─────────────────────────────────────────────────────

export const researchItems = [
  {
    title:
      "UNCITRAL Regional Centre for Asia and the Pacific, in collaboration with the Foreign Trade University",
    image: research2,
    category: "International Carbon Markets",
    date: "International Conference on Creativity and Sustainable Development | Mar 2026",
    author:
      "Paper “The Nexus of Policy, Technology, and Integrity” | Research Assistant | Sep 2025 - Mar 2026",
    role: "Research Assistant",
    desc: "• Research Objective\nTo examine international carbon markets and assess how policy, technology, and integrity frameworks shape their effectiveness\n• Focus\n- Structure and interaction of compliance and voluntary carbon markets\n- Key policy developments, including Article 6 (99 bilateral arrangements across 61 Parties as of 2025) and EU CBAM\n- Integrity and verification challenges, including additionality, baseline construction, and disclosure gaps\n- The role of digital MRV and blockchain in strengthening transparency and accountability\n• Outcome\nDespite 99 Article 6 bilateral arrangements, only a small subset of Parties have authorization and tracking fully in place. Verification gaps persist across major credit categories, with demand concentrated in lower-quality segments. Market credibility depends on aligning policy rules, digital infrastructure, and integrity standards simultaneously.",
    link: "https://drive.google.com/file/d/1NtgRrDyYT80QSt0PUml9dcQh90rcWXh5/view?usp=sharing",
  },
  {
    title: "Vietnam Asia Pacific Economic Centre",
    image: research1,
    category: "Sustainable Finance",
    date: "Asia-Pacific Economic Review (ISSN 0868-3808) | Dec 2025",
    author:
      "Paper “Developing Green Credit in Japan” | Second Author | Aug 2025 - Nov 2025",
    role: "Second Author",
    desc: "• Research Objective\nTo examine the development of Japan's green credit market and the institutional/policy mechanisms supporting its growth toward national sustainable finance targets.\n• Focus\n- Growth trajectory of green credit balance in Japan from 2018 to 2021, and the role of major banks (MUFG, SMBC) in expanding green bond and green loan issuance\n- BoJ's \"Climate Response Financing Operations\" (launched Dec 2021), including its zero/near-zero interest rate structure (0% or 0.1%) for funding eligible financial institutions\n- Japan's policy targets, including emission reduction goals (46% by 2030 vs. 2013) and carbon neutrality by 2050, and how green credit programmes are designed to support these targets\n• Outcome\nJapan's cumulative green loan balance grew nearly fourfold between 2018 and 2021, reaching around 1,779.47 billion yen, while BoJ's climate financing support remained limited (approximately 2.7% of total lending, 0.5% response ratio), highlighting persistent gaps in classification standards and disclosure transparency despite rapid volume growth.",
    link: "https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=drive_link",
  },
];

export const researchImages = [research1, research2];
// ─── Awards & Honors ──────────────────────────────────────────────────────────

export const awardItems = [
  {
    organization: "Vietnam National University",
    program: "2025 Reading Culture Ambassador Competition",
    role: "Third Prize",
    date: "Nov 2025",
    img: award1,
    color: "white",
    category: "Reading Culture Ambassador",
    desc: '• Competition Objective\nLiterary analysis for national aspiration and designing community literacy solutions\n• Contributions\n- Analysed the foundational Vietnamese legend "Thánh Gióng" to draw connections between classical literature and the cultivation of national identity and pioneering spirit\n- Designed an asset-light literacy initiative leveraging existing village loudspeaker infrastructure to expand reading culture in ethnic minority and border communities',
  },
  // {
  //   organization:
  //     "University of Languages and International Studies, Vietnam National University",
  //   program: "2025 Reading Culture Ambassador Competition",
  //   role: "Prospective Award",
  //   date: "Nov 2025",
  //   img: award2,
  //   color: "white",
  //   category: "University Reading Award",
  //   desc: '• Competition Objective\nLiterary analysis for national aspiration and designing community literacy solutions\n• Contributions\n- Analysed the foundational Vietnamese legend "Thánh Gióng" to draw connections between classical literature and the cultivation of national identity and pioneering spirit\n- Designed an asset-light literacy initiative leveraging existing village loudspeaker infrastructure to expand reading culture in ethnic minority and border communities',
  // },
];

export const awardImages = [award1, award2];

// ─── Professional & Leadership Experience ─────────────────────────────────────
// NOTE: "Professional" sub-items (OnepageCommerce, CEC Accounting) were moved
// here from extracurricularItems to match the source text, since this array
// feeds the "Professional & Leadership Experience" tab.

export const leadershipItems = [
  {
    group: "Professional",
    organization: "OnepageCommerce (Singapore)",
    program: "Business Operations Department",
    role: "Intern",
    date: "Apr 2026 - Jul 2026",
    img: extracurricular6,
    color: "white",
    link: "#",
    category: "Business Operations Intern",
    desc: "• Time commitment\n10 hours/week\n• Context\nSupported financial tracking and internal reporting within a cross-border e-commerce platform.\n• Responsibilities\n- Tracked recurring operational expenses and verified vendor invoices against payment records to ensure accuracy\n- Aggregated weekly, monthly revenue data and performed period-on-period trend comparisons",
  },
  {
    group: "Professional",
    organization: "Canadian English Council (CEC)",
    program: "Accounting Department",
    role: "Intern",
    date: "Mar 2024 - Aug 2025",
    img: extracurricular1,
    color: "white",
    link: "#",
    category: "Accounting Internship",
    desc: "• Time commitment\n20 hours/month\n• Context\nSupported a 4-person finance team with financial record-keeping and documentation for organisational operations.\n• Contributions\n- Recorded daily transactions, organised receipts and invoices, and verified entries against internal approval procedures prior to filing\n- Prepared tuition pricing reports comparing fee levels across course cycles to track period-on-period changes, supporting internal review by senior staff\n• Outcome\nPeriodic internal checks confirmed monthly records contained full supporting documentation with no missing entries in transaction histories.",
  },
  {
    group: "Leadership",
    organization: "HQmaths Centre",
    program: "Maths Department",
    role: "Head Teaching Assistant",
    date: "Apr 2024 - Aug 2025",
    img: leadership2,
    color: "white",
    link: "#",
    category: "Teaching Assistance",
    desc: "• Time commitment\n16 hours/month\n• Context\nLed a team of 5 peer teaching assistants delivering mathematics support to 150 secondary students across varying proficiency levels.\n• Contributions\n- Coordinated tutoring schedules and matched peer tutors to topics based on individual student needs and proficiency levels\n- Compiled progress reports and summary tables to keep teachers informed on tutoring activities and learning outcomes\n• Outcome\nIn the 2024 high school entrance examinations, 100% of participating students gained admission to their first-choice school, with the majority scoring 8+/10.",
  },
  {
    group: "Leadership",
    organization: "Canadian English Council (CEC)",
    program: "Summer Program",
    role: "Division Leader",
    date: "Jun 2024 & Jun 2025",
    img: leadership1,
    color: "white",
    link: "#",
    category: "Operations Management",
    desc: "• Time commitment\n160 hours/month\n• Context\nManaged 20 staff members to deliver English workshops for 150 students aged 10 - 15 over one month.\n• Contributions\n- Monitored implementation through checklists and weekly reports, resolving scheduling gaps before they escalated\n- Coordinated across divisions and ran weekly onboarding sessions to standardise procedures and ensure smooth team integration\n• Outcome\nPost-program debriefs noted that daily sessions ran to plan, staffing adjustments were handled without disrupting classes, and no scheduling issues remained unresolved at close.",
  },
];

export const leadershipImages = [
  extracurricular6,
  extracurricular1,
  leadership2,
  leadership1,
];

// ─── Extracurricular Experiences ─────────────────────────────────────────────

export const extracurricularItems = [
  {
    organization: "Canadian English Council (CEC)",
    program: "IELTS Department",
    role: "Teaching Assistant",
    date: "Oct 2024 - Aug 2025",
    img: extracurricular2,
    color: "white",
    link: "#",
    category: "Teaching Assistance",
    desc: "• Time commitment\n20 hours/month\n• Context\nSupported IELTS writing instruction and assessment for 30 students across varying proficiency levels.\n• Contributions\n- Reviewed student essays alongside lead instructors and applied official IELTS band descriptors across all four criteria\n- Maintained student-level progress records to flag recurring errors and inform instructor feedback across rewrite cycles\n• Outcome\nPost-practice reviews confirmed subsequent drafts addressed previously flagged issues, with fewer repeated errors across revision cycles, particularly in task response and task achievement.",
  },
  {
    organization: "Foreign Language Specialized School",
    program: "English Club",
    role: "Scriptwriter",
    date: "Sep 2023 - Jun 2024",
    img: extracurricular3,
    color: "white",
    link: "#",
    category: "Scriptwriting",
    desc: '• Time commitment\n10 hours/month\n• Context\nScriptwriter within a school English Club, developing short performance scripts through collaborative writing.\n• Contributions\nContributed to storyline planning and dialogue drafting for scripts.\n• Outcome\nFollowing an internal club evaluation, the short film developed from the completed script ranked among the highest-voted entries in the club\'s "Best Film" selection.',
  },
  {
    organization: "Embassy Summer",
    program: "Academic & Leadership Programs (UK)",
    role: "Team Leader",
    date: "Jun 2023 - Jul 2023",
    img: extracurricular4,
    color: "white",
    link: "#",
    category: "Leadership Programme",
    desc: "• Time commitment\nFull-time, three-week residential course\n• Context\nProgram participant in academic and leadership training across multiple UK universities, studying alongside approximately 50 students per class from diverse cultural backgrounds.\n• Contributions\n- Attended lectures and workshops on communication, teamwork, and leadership fundamentals\n- Collaborated with international peers on assigned group projects and presentations, including film-making projects, public speaking exercises, and basic psychology case analyses\n• Outcome\nIn post-program evaluations, facilitators confirmed completion of all assigned group projects and presentations, with participants contributing verbally during discussions and fulfilling assigned roles in multicultural team activities.",
  },
  {
    organization: "Bluesky Education",
    program: "Public Speaking Course at Hwa Chong Institution (Singapore)",
    role: "Member",
    date: "Jul 2022",
    img: extracurricular5,
    color: "white",
    link: "#",
    category: "Public Speaking",
    desc: "• Time commitment\nFull-time, two-week residential course\n• Context\nCourse participant undergoing structured public speaking training in a competitive academic environment, participating in classes of approximately 50 students.\n• Contributions\n- Participated in daily workshops on speech structure and delivery techniques\n- Engaged in structured debate exercises on contemporary issues\n• Outcome\nBy the end of the course, I was selected as one of the main presenters for the final presentation, where I presented on key learning outcomes and their application to future academic and career pathways.",
  },
];

export const extracurricularImages = [
  extracurricular2,
  extracurricular3,
  extracurricular4,
  extracurricular5,
];

// ─── Social Impacts ───────────────────────────────────────────────────────────

export const socialImpactItems = [
  {
    organization: "The Smile Charity Community",
    program: "Food pantry",
    role: "Member",
    date: "Feb 2024 - Jun 2026",
    img: socialimpact2,
    color: "white",
    link: "#",
    category: "Humanitarian Aid",
    desc: "• Time commitment\n15 hours/month\n• Context\nVolunteer providing direct humanitarian aid and medical camp support for vulnerable populations, including homeless children and the elderly.\n• Contributions\nRegularly prepared and distributed daily nutritional meals at a dedicated medical support camp.\n• Outcome\nDelivered regular nutritional support and essential care to orphanage residents and elderly individuals at the Social Support Centre.",
  },
  {
    organization: "Rotary Club Amsterdam International",
    program: "Book Translation Project: End Plastic Soup Rotary Club",
    role: "Translator",
    date: "Nov 2023",
    img: socialimpact3,
    color: "white",
    link: "#",
    category: "Environmental Advocacy",
    desc: "• Time commitment\n40 hours/month\n• Context\nVolunteer Translator for an international environmental book project with Rotary Clubs of Amsterdam and the End Plastic Soup Foundation (Netherlands), focused on literary translation and environmental education outreach.\n• Contributions\n- Translated an environmental education book from German into Vietnamese, addressing topics such as plastic pollution and ocean conservation\n- Adapted technical terminology into clear, accessible language for youth and community readers\n• Outcome\nProduced a Vietnamese translation that made key information on global plastic pollution and conservation strategies accessible to local readers.",
  },
  {
    organization:
      "The Youth Union of Hospitals and Medical Universities in Hanoi, in collaboration with the Canadian English Council (CEC)",
    program: "Lunar New Year for The Sick Fundraising Campaign",
    role: "Coordinator",
    date: "Jan 2023",
    img: socialimpact1,
    color: "white",
    link: "#",
    category: "Charity Campaign",
    desc: "• Time commitment\n10 hours/month\n• Context\nVolunteer for a hospital charity campaign mobilising youth participation to provide holiday support for patients at major medical centres like Bach Mai and Hanoi University of Medicine.\n• Contributions\n- Contributed to a creative fundraising initiative that converted student art and writing submissions into monetary donations (approximately 1 SGD per entry)\n- Assisted in the logistical planning and preparation of 1,000 Lunar New Year gift packages\n• Outcome\nContributed to a collective fundraising effort that met the campaign's target of 1,000 Lunar New Year gift packages for long-stay patients.",
  },
];

export const socialImpactImages = [socialimpact2, socialimpact3, socialimpact1];
