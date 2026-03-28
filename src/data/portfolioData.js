import { BookOpen, Microscope, Trophy, Users, Zap, Heart } from "lucide-react";

import academic1 from "../assets/logo-cnn.jpg";
import academic2 from "../assets/logo-SAT.jpg";
import academic3 from "../assets/logo-ielts.jpg";
import research1 from "../assets/bai-bao-green-credit.png";
import research2 from "../assets/bai-bao-carbon.jpg";
import award1 from "../assets/giai-3-vhd.jpg";
import award2 from "../assets/trien-vong-vhd.jpg";
import leadership1 from "../assets/division-leader-cec.jpg";
import leadership2 from "../assets/tro-giang-toan.jpg";
import extracurricular1 from "../assets/logo-cec.jpg";
import extracurricular2 from "../assets/logo-cec.jpg";
import extracurricular3 from "../assets/tv-clb-ta.jpg";
import extracurricular4 from "../assets/kh-leadership-UK.jpg";
import extracurricular5 from "../assets/kh-public-speaking-Sing.jpg";
import socialimpact1 from "../assets/tu-thien-tet-cec.jpg";
import socialimpact2 from "../assets/tu-thien-nu-cuoi.jpg";
import socialimpact3 from "../assets/Dich-sach.jpg";
import academic4 from "../assets/academic4.jpg";
import academic5 from "../assets/academic5.jpg";
import academic6 from "../assets/academic6.jpg";
import academic7 from "../assets/academic7.jpg";
import academic8 from "../assets/academic8.jpg";

// ─── Tab Navigation Config ────────────────────────────────────────────────────

export const tabsConfig = [
  {
    label: "Academic Profiles",
    icon: BookOpen,
    color: "from-green-350 to-green-300",
    borderColor: "#0EA5E9",
  },
  {
    label: "Research Experiences",
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
    label: "Leadership Projects",
    icon: Users,
    color: "from-green-350 to-green-300",
    borderColor: "#10B981",
  },
  {
    label: "Extracurricular Experiences",
    icon: Zap,
    color: "from-green-350 to-green-300",
    borderColor: "#EAB308",
  },
  {
    label: "Social Impacts",
    icon: Heart,
    color: "from-green-350 to-green-300",
    borderColor: "#EC4899",
  },
];

// ─── Academic Profiles ────────────────────────────────────────────────────────

export const academicItems = [
  {
    title: "Foreign Language Specialized School",
    img: academic1,
    date: "Sep 2023-Present",
    color: "white",
    desc: "• Grade 10 GPA: 9.7/10\n• Grade 11 GPA: 9.7/10\n• Grade 12 GPA: 9.7/10 (1st Term)",
    link: "https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=sharing",
  },
  {
    title: "SAT Score Certification",
    img: academic2,
    date: "Dec 2025",
    color: "white",
    desc: "• SAT Score: 1570/1600 \n• Math: 800/800 \n• Reading and Writing: 770/800",
    link: "https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing",
  },
  {
    title: "IELTS Certification",
    img: academic3,
    date: "Mar 2025",
    color: "white",
    desc: "• Overall: 8.0/9.0\n",
    link: "https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing",
  },
];

// ─── University Admissions ────────────────────────────────────────────────────

export const universityItems = [
  {
    title: "The University of Hong Kong (HKU), Hong Kong",
    img: academic4,
    date: "UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "Bocconi University, Italy",
    img: academic5,
    date: "UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "University College Dublin (UCD), Ireland",
    img: academic6,
    date: "UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "Aalto University, Finland",
    img: academic7,
    date: "UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
  {
    title: "The University of Alabama (UA), USA",
    img: academic8,
    date: "UNIVERSITY ADMISSIONS | Updated March 2026 |",
    color: "white",
    link: "#",
  },
];

// ─── Research Experiences ─────────────────────────────────────────────────────

export const researchItems = [
  {
    title:
      "Developing Green Credit System in Japan \n Asia-Pacific Economic Review (ISSN 0868-3808) \nPages 37-39",
    image: research1,
    category: "Sustainable Finance",
    date: "• Published on Asia-Pacific Economic Review  | Dec 2025 ",
    author: "MSc. Vu Thien Bach, Vu Phan Anh",
    role: "Second-Author",
    desc: " • Research Objective\n  To examine Green Credit System to understand transparency and reporting challenges, and draw lessons relevant to emerging markets.\n • Focus\n  - The development of green credit and sustainable finance in Japan, including green bonds and green loans.\n  - The role of major commercial banks and the Bank of Japan in supporting climate-related lending.\n  - Transparency and reporting practices in climate-related loan programmes.\n  - Structural challenges in Japan's green finance system, including classification standards and disclosure requirements.\n • Outcome\n Identified practical lessons on improving transparency and reporting standards for green credit systems, with relevance for emerging markets.",
    link: "https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=drive_link",
  },
  {
    title:
      "The Nexus of Policy, Technology, and Integrity: Charting the New Frontiers of International Carbon Markets",
    paperLink:
      "https://drive.google.com/drive/folders/1kSgJ5xk7jGlm7efbFzm6F9IPV8kTkf9O",
    image: research2,
    category: "Climate Policy",
    date: "• Abstract accepted for the International Conference  | Oct 2025 \n • Held by Foreign Trade University, Hanoi, Vietnam | Mar 2026  ",
    author: "MSc. Lu Thi Thu Trang, Vu Phan Anh",
    role: "Research Assistant",
    desc: "• Research Objective\n To examine the current development of international carbon markets and assess how policy frameworks, technology, and integrity challenges shape their effectiveness and credibility.\n• Focus\n - The structure and interaction of compliance and voluntary carbon markets.\n - Key policy developments, including Article 6 of the Paris Agreement and the EU's Carbon Border Adjustment Mechanism (CBAM).\n - Integrity challenges in carbon markets, particularly issues of additionality, governance, and oversight.\n - The role of emerging technologies, including AI-based monitoring systems and blockchain, in improving transparency and trust.\n• Outcome\n Identified key policy, governance, and technological factors necessary to strengthen transparency, integrity, and effectiveness in international carbon markets, with implications for future climate policy and market design.",
    link: "https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=drive_link",
  },
];

// ─── Awards & Honors ──────────────────────────────────────────────────────────

export const awardItems = [
  {
    title:
      "Third Prize | 2025 Reading Culture Ambassador Competition, Vietnam National University",
    img: award1,
    color: "white",
    desc: '•  Competition Objective \nLiterary Analysis for National Aspiration & Designing Literacy Solutions\n• Contributions \n- Analyzed the foundational Vietnamese legend "Thánh Gióng" to examine how literature cultivates national aspiration and pioneering spirit. \n- Designed an asset-light literacy initiative by repurposing existing village loudspeaker systems to promote reading culture based on field constraints in ethnic minority and border communities. ',
    date: "Nov 2025",
    category: "Reading Competition",
  },
  {
    title:
      "Prospective Award | 2025 Reading Culture Ambassador Competition, University of Languages and International Studies, Vietnam National University",
    img: award2,
    color: "white",
    desc: '•  Competition Objective \nLiterary Analysis for National Aspiration & Designing Literacy Solutions\n• Contributions \n- Analyzed the foundational Vietnamese legend "Thánh Gióng" to examine how literature cultivates national aspiration and pioneering spirit. \n- Designed an asset-light literacy initiative by repurposing existing village loudspeaker systems to promote reading culture based on field constraints in ethnic minority and border communities. ',
    date: "Nov 2025",
    category: "Reading Competition",
  },
];

export const awardImages = [award1, award2];

// ─── Leadership Projects ──────────────────────────────────────────────────────

export const leadershipItems = [
  {
    title: "HQmaths Club",
    img: leadership2,
    color: "white",
    link: "#",
    author: "Head Teaching Assistant",
    desc: " • Time commitment\n16 hours/month\n • Context\nTeam leader coordinating 5 peer teaching assistants to provide mathematics support for 150 secondary school students of varying proficiency levels.\n • Contributions\n- Coordinated tutoring schedules and assigned peer tutors to topics based on student needs.\n- Assisted in setting up small study groups where learners are grouped by similar skill levels.\n- Compiled summary tables and progress reports to provide clear updates to teachers on tutoring activities and learning outcomes.\n • Outcome\nIn the 2024 high school entrance examinations, many participating students achieved scores of nine or higher out of ten in mathematics.",
    date: "Apr 2024-Present",
    category: "Teaching Assistance",
  },
  {
    title: "Summer Program | Canadian English Council",
    img: leadership1,
    color: "white",
    link: "#",
    author: "Division Leader",
    desc: " • Time commitment\n 160 hours/month \n • Context\nManaging 20 staff members to deliver English Workshops for 150 students aged 10–15 over the course of a month.\n • Contributions \n-  Monitored implementation through checklists and weekly reports to resolve gaps and scheduling issues \n-  Coordinated across divisions and conducted weekly onboarding training to standardise procedures and ensure smooth team integration.\n  • Outcome \nIn post-program debriefs, supervisors highlighted that daily sessions were executed according to plan, staffing adjustments were handled without disrupting classes, and no unresolved scheduling issues remained at program close. ",
    date: "Jun 2024, 2025",
    category: "Operations Management",
  },
];

export const leadershipImages = [leadership1, leadership2];

// ─── Extracurricular Experiences ─────────────────────────────────────────────

export const extracurricularItems = [
  {
    title: "CEC Accounting and Finance Department",
    img: extracurricular1,
    color: "white",
    link: "#",
    author: "Intern",
    desc: " • Time commitment\n20 hours/month\n • Context\nIntern within a finance team of 4 staff members, supporting accurate financial record-keeping and orderly documentation for organisational operations.\n • Contributions\n- Assisted with daily transaction recording and systematic organisation of receipts and invoices.\n- Verified entries against internal approval procedures prior to filing.\n- Organised financial records into a consistent filing structure to improve traceability.\n- Supported routine reconciliation by identifying and flagging missing or unclear documentation.\n • Outcome\nDuring periodic internal checks, monthly financial records were confirmed to include full supporting documentation, with transaction histories traceable without missing entries.",
    date: "Mar 2024-Present",
    category: "Accounting Internship",
  },
  {
    title: "CEC IELTS Instruction",
    img: extracurricular2,
    color: "white",
    author: "Writing Teaching Assistant",
    desc: " • Time commitment\n20 hours/month\n • Context\nTeaching assistant supporting IELTS writing instruction and assessment for 30 students of varying proficiency levels.\n • Contributions\n- Reviewed student essays alongside lead instructors during practice cycles.\n- Applied official IELTS writing band descriptors to identify issues in Task Response/ Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy\n\n- Assisted students during rewrite cycles to address recurring errors.\n - Compiled summary tables and progress reports to provide clear updates to teachers on tutoring activities and learning outcomes.\n • Outcome\nIn post-practice reviews, teachers noted that subsequent student drafts addressed previously flagged structural and language issues, with fewer repeated errors across revision cycles, especially in terms of task response and task achievement.",
    link: "#",
    date: "Oct 2024-Present",
    category: "Teaching Assistance",
  },
  {
    title: "English Club | Foreign Language Specialized School",
    img: extracurricular3,
    color: "white",
    author: "Scriptwriter",
    desc: ' • Time commitment\n 10 hours/month \n • Context\nScriptwriter within a school English Club, developing short performance scripts through collaborative writing.\n • Contributions\n- Contributed to storyline planning and dialogue drafting for short scripts.\n- Participated in group revisions to refine plot flow and language clarity.\n- Coordinated with peers to ensure scripts were appropriate for rehearsal and performance.\n • Outcome\nFollowing internal club evaluation, the short film developed from the completed script ranked among the highest-voted entries in the club\'s "Best Film" selection.',
    link: "#",
    date: "Sep 2023-Jun 2024",
    category: "Scriptwriting",
  },
  {
    title: "Academic & Leadership Programs (UK) Embassy Summer",
    color: "white",
    img: extracurricular4,
    author: "Co-ordinator",
    desc: " • Time commitment\nFull-time, three-week residential course\n • Context\nProgram participant in academic and leadership training across multiple UK universities, studying alongside approximately 50 students per class from diverse cultural backgrounds.\n • Contributions\n- Attended lectures and workshops on communication, teamwork, and leadership fundamentals.\n- Participated in structured group discussions and short case-based activities.\n- Collaborated with international peers on assigned group projects and presentations, including film-making projects, public speaking exercises, and basic psychology case analyses.\n • Outcome\nIn post-program evaluations, facilitators confirmed completion of all assigned group projects and presentations, with participants contributing verbally during discussions and fulfilling assigned roles in multicultural team activities.",
    link: "#",
    date: "Jun-Jul 2023",
    category: "Leadership Programs",
  },
  {
    title:
      "Public Speaking Course at Hwa Chong Institution (Singapore) | Bluesky Education",
    img: extracurricular5,
    color: "white",
    link: "#",
    author: "Member",
    desc: " • Time commitment\nFull-time, two-week residential course\n • Context\nCourse participant undergoing structured public speaking training in a competitive academic environment, participating in classes of approximately 50 students.\n • Contributions\n- Participated in daily workshops on speech structure and delivery techniques.\n- Practised, prepared, and delivered impromptu speeches under instructor guidance.\n- Applied feedback during evaluated presentations.\n • Outcome\nBy the end of the course, I was selected as one of the main presenters for the final presentation, where I presented on key learning outcomes and their application to future academic and career pathways.",
    date: "Jul 2022",
    category: "Public Speaking",
  },
];

export const extracurricularImages = [
  extracurricular1,
  extracurricular2,
  extracurricular3,
  extracurricular4,
  extracurricular5,
];

// ─── Social Impacts ───────────────────────────────────────────────────────────

export const socialImpactItems = [
  {
    title: "The Smile Charity Community (Nụ Cười Yêu Thương)",
    img: socialimpact2,
    color: "white",
    link: "#",
    author: "Member",
    desc: " • Time commitment\n15 hours/month\n • Context\nVolunteer providing direct humanitarian aid and medical camp support for vulnerable populations, including homeless children and the elderly.\n • Contributions\n- Regularly prepared and distributed daily nutritional meals at a dedicated medical support camp.\n- Assisted in the organization of onsite care activities to ensure essential services reached community members in need.\n- Collaborated with team members to manage food supplies and maintain hygiene standards during distribution.\n • Outcome\nDelivered regular nutritional support and essential care to orphanage residents and elderly individuals at the Social Support Center.",
    date: "Feb 2024-Present",
    category: "Food Assistance",
  },
  {
    title: '"Tết vì người bệnh" Fundraising Campaign Canadian English Council',
    img: socialimpact1,
    color: "white",
    link: "#",
    author: "Co-ordinator",
    desc: " • Time commitment\n 10 hours/month \n • Context\n Volunteer for a hospital charity campaign mobilizing youth participation to provide holiday support for patients at major medical centers like Bach Mai and Hanoi University of Medicine.\n • Contributions\n- Contributed to a creative fundraising initiative that converted student art and writing submissions into monetary donations (20,000 VND per entry).\n-  Assisted in the logistical planning and preparation of 1,000 Tet gift packages.\n - Engaged in outreach to encourage student involvement and content creation for the campaign.\n • Outcome\nSuccessfully met the fundraising target to fund 1,000 gift packages.",
    date: "Jan 2024, 2025",
    category: "Fundraising",
  },
  {
    title: "Book Translation Project: End Plastic Soup \n Rotary Club",
    img: socialimpact3,
    color: "white",
    link: "#",
    author: "Translator",
    desc: " • Time commitment\n40 hours/month\n • Context\nVolunteer Translator for an international environmental book project with Rotary Clubs of Amsterdam and the End Plastic Soup Foundation (Netherlands), focused on literary translation and environmental education outreach.\n • Contributions\n- Translated an environmental education book from German into Vietnamese, addressing topics such as plastic pollution and ocean conservation.\n- Adapted technical terminology into clear, accessible language for youth and community readers.\n • Outcome\nProduced a Vietnamese translation that made key information on global plastic pollution and conservation strategies accessible to local readers.",
    date: "Nov 2023",
    category: "Translation",
  },
];

export const socialImpactImages = [socialimpact1, socialimpact2, socialimpact3];
