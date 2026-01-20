import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Microscope, Trophy, Users, Zap, Heart, Github, Moon, Sun } from 'lucide-react';
import ImageModal from '../components/imageModal';
import profileImg from '../assets/Profile.jpeg';
import academic1 from '../assets/logo-cnn.jpg';
import academic2 from '../assets/logo-SAT.jpg';
import academic3 from '../assets/logo-ielts.jpg';
import research1 from '../assets/bai-bao-green-credit.png';
import research2 from '../assets/bai-bao-carbon.jpg';
import award1 from '../assets/giai-3-vhd.jpg';
import award2 from '../assets/trien-vong-vhd.jpg';
import leadership1 from '../assets/division-leader-cec.jpg';
import leadership2 from '../assets/tro-giang-toan.jpg';
import extracurricular1 from '../assets/logo-cec.jpg';
import extracurricular2 from '../assets/logo-cec.jpg';
import extracurricular3 from '../assets/tv-clb-ta.jpg';
import extracurricular4 from '../assets/kh-leadership-UK.jpg';
import extracurricular5 from '../assets/kh-public-speaking-Sing.jpg';
import socialimpact1 from '../assets/tu-thien-tet-cec.jpg';
import socialimpact2 from '../assets/tu-thien-nu-cuoi.jpg';
import socialimpact3 from '../assets/Dich-sach.jpg';


// Helper function to render bold bullet points from description text
const renderBoldBullets = (text, isDarkMode = false) => {
    const lines = text.split('\n').filter(line => line.trim());
    return (
        <div className="space-y-1 ">
            {lines.map((line, idx) => {
                const isBoldLine = line.trim().startsWith('•') || /^[A-Z].*:/.test(line.trim());
                return (
                    <p key={idx} className={`leading-tight text-sm md:text-lg text-left ${isDarkMode ? 'text-gray-300' : 'text-white-700'} ${isBoldLine ? 'font-bold' : 'font-normal'}`}>
                        {line}
                    </p>
                );
            })}
        </div>
    );
};
export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isImageOpened, setIsImageOpened] = useState(false);
    const [activeTab, setActiveTab] = useState('Academic Profiles');
    const [currentImage, setCurrentImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [allImages, setAllImages] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [navValue, setNavValue] = useState('about');

    // Detect scroll position and update active nav
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'contact'];
            let currentSection = 'about';

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        currentSection = section;
                    }
                }
            }

            setNavValue(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleDownloadCV() {
        window.open('https://drive.google.com/file/d/1S9QtJ3AMM9iGjLa8rMzr_2_8Y0Ca_InP/view?usp=drive_link');
        const link = document.createElement("a");
        link.href =
            "https://drive.google.com/uc?export=download&id=1S9QtJ3AMM9iGjLa8rMzr_2_8Y0Ca_InP";
        link.download = "Vu-Phan-Anh-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Update body class for dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const tabsConfig = [
        { label: 'Academic Profiles', icon: BookOpen, color: 'from-green-350 to-green-300', borderColor: '#0EA5E9' },
        { label: 'Research Experiences', icon: Microscope, color: 'from-green-350 to-green-300', borderColor: '#A855F7' },
        { label: 'Awards & Honors', icon: Trophy, color: 'from-green-350 to-green-300', borderColor: '#F97316' },
        { label: 'Leadership Projects', icon: Users, color: 'from-green-350 to-green-300', borderColor: '#10B981' },
        { label: 'Extracurricular Experiences', icon: Zap, color: 'from-green-350 to-green-300', borderColor: '#EAB308' },
        { label: 'Social Impacts', icon: Heart, color: 'from-green-350 to-green-300', borderColor: '#EC4899' }
    ];
    const handleImageOpen = (images, index = 0) => {
        setAllImages(images);
        setCurrentImageIndex(index);
        setCurrentImage(images[index]);
        setIsImageOpened(true);
    }

    const handleImageClose = () => {
        setIsImageOpened(false);
        setCurrentImage(null);
    }

    const handlePrevImage = () => {
        const newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        setCurrentImageIndex(newIndex);
        setCurrentImage(allImages[newIndex]);
    }

    const handleNextImage = () => {
        const newIndex = (currentImageIndex + 1) % allImages.length;
        setCurrentImageIndex(newIndex);
        setCurrentImage(allImages[newIndex]);
    }

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Unobserve sau khi animation chạy để ngăn chạy lại
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll('[data-observe]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className=''>
            <style>{`
                @keyframes smoothUnderline {
                    from {
                        left: 0;
                        width: 0;
                    }
                    to {
                        left: 0;
                        width: 100%;
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .section-animate {
                    animation: fadeInUp 1.2s ease-out forwards;
                }

                .fade-enter {
                    opacity: 0;
                    transform: translateY(40px);
                }

                .fade-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 1.2s ease-out, transform 1.2s ease-out;
                }

                .tab-content-enter {
                    animation: fadeInUp 0.8s ease-out forwards !important;
                }

                .animate-fadeInDown {
                    animation: fadeInDown 1s ease-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-in-out;
                }

                .card-animate {
                    animation: slideUp 0.8s ease-out both;
                }

                .card-animate:nth-child(1) { animation-delay: 0.3s; }
                .card-animate:nth-child(2) { animation-delay: 0.6s; }
                .card-animate:nth-child(3) { animation-delay: 0.9s; }
                .card-animate:nth-child(4) { animation-delay: 1.2s; }
                .card-animate:nth-child(5) { animation-delay: 1.5s; }
                .card-animate:nth-child(6) { animation-delay: 1.8s; }

                .header-animate {
                    animation: fadeInDown 1.2s ease-out forwards;
                }

                .profile-animate {
                    animation: slideInLeft 1.2s ease-out forwards;
                }

                .content-animate {
                    animation: slideInRight 1.2s ease-out forwards;
                }

                .animate-fadeIn {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .tab-button-animate {
                    animation: scaleIn 0.3s ease-out;
                }
                
                .nav-link {
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #16a34a;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-link.active::after {
                    width: 100%;
                    background-color: #16a34a;
                }
            `}</style>


            <div className={`min-h-screen ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
                {/* Header */}
                <header className={`fixed w-full left-0 top-0 z-50 backdrop-blur-lg ${isDarkMode ? 'bg-slate-900/60' : 'bg-white/60'} ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between lg:justify-evenly">
                            <div className='flex ml-4'>
                                <div className='className="w-12 h-6 sm:w-14 sm:h-6 lg:w-20 lg:h-8 rounded-full object-cover'>
                                    <img src='selfLogo1.png' alt="Profile" className="w-full h-full object-contain"></img>
                                </div>
                                <h1 className={`text-xl md:text-2xl xl:text-3xl font-bold  ${isDarkMode ? 'text-white' : 'text-green-800'}`}>Vu Phan Anh</h1>
                            </div>
                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8 text-xl ">
                                <a href="#about" className={`nav-link ${navValue === 'about' ? 'active' : ''} ${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'} transition font-medium`}>ABOUT</a>
                                <a href="#projects" className={`nav-link ${navValue === 'projects' ? 'active' : ''} ${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'} transition font-medium`}>PROJECTS</a>
                                <a href="#contact" className={`nav-link ${navValue === 'contact' ? 'active' : ''} ${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'} transition font-medium`}>CONTACT</a>
                            </nav>

                            {/* Dark Mode Toggle Button */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={` md:ml-20 lg:ml-44 flex rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                                >
                                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                                    {/* Mobile Menu Button */}

                                </button>
                                <button
                                    className={`md:hidden ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>

                        </div>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 text-sm">
                                <a href="#about" className={isDarkMode ? 'text-gray-300 font-medium' : 'text-gray-600 font-medium'}>ABOUT</a>
                                <a href="#projects" className={isDarkMode ? 'text-gray-300 font-medium' : 'text-gray-600 font-medium'}>PROJECTS</a>
                                <a href="#contact" className={isDarkMode ? 'text-gray-300 font-medium' : 'text-gray-600 font-medium'}>CONTACT</a>
                            </nav>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <section className={`section-animate pt-6 sm:pt-16 md:pt-14 px-4 sm:px-2 relative overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
                    {/* Animated particles background */}
                    <div className="max-w-9xl relative z-10 mb-2">
                        <div id="about" className="max-w-5xl justify-center mx-auto text-center">
                            <h2 className={`animate-fadeInDown ${isDarkMode ? 'text-white' : 'text-green-800 '} md:text-2xl lg:text-3xl text-xl font-bold mb-2 md:mb-6 justify-center items-center scroll-mb-65`}>Greetings! I am Vu Phan Anh</h2>
                            <h1 className={`animate-fadeInUp ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} md:text-xl text-md font-bold mb-6 leading-tight inline-block`}>
                                a High School Student Building a Foundation in Accounting and Finance
                            </h1>
                            <p className={`animate-fadeInUp ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} md:text-xl text-md font-bold mb-6 sm:mb-8 leading-tight inline-block`}>
                                Focused on Accuracy, Transparent Decision-Making, Accountability, and Sustainability
                            </p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section data-observe className={`section-animate py-6 sm:py-16 md:py-10 mx-4 rounded-4xl md:pr-4 ${isDarkMode ? 'bg-slate-700' : 'bg-green-50'} scroll-smooth scroll-mt-15 shadow-xl`}>
                    <div className="max-w-7xl mx-2">
                        <div className="grid md:grid-cols-[1fr_2fr]  items-start  ">
                            {/* Profile Image */}
                            <div className="profile-animate relative ml-2 px-2 pt-4 sm:pt-10 order-2 md:order-1">
                                <div className="flex flex-col justify-center mb-6 items-center">
                                    <img
                                        src={profileImg}
                                        alt="Profile"
                                        className="
                                            w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px]
                                            h-auto
                                            max-h-[300px] sm:max-h-[400px] md:max-h-[500px]
                                            object-cover
                                            rounded-2xl
                                            shadow-lg
                                            "
                                    />
                                </div>

                                {/* <button
                                    onClick={handleDownloadCV}
                                    className={`relative h-[50px] w-[150px] overflow-hidden rounded-[10px] border-0 cursor-pointer
                                transition-all duration-500}
                                before:content-['Download_CV']
                                before:absolute before:inset-0
                                before:bg-green-100
                                ${isDarkMode ? 'before:bg-green-100 before:text-green-800' : 'before:bg-green-700 before:text-white'}
                                ${isDarkMode ? 'after:bg-green-800 after:text-white' : 'after:bg-green-100 after:text-green-800 border-green-700 border-2'}
                                before:flex before:items-center before:justify-center
                                before:text-xl before:font-semibold
                                before:transition-all before:duration-500
                                after:content-['PDF']
                                after:absolute after:inset-0
                                
                                after:flex after:items-center after:justify-center
                                after:text-xl after:font-semibold
                                after:translate-y-full
                                after:transition-all after:duration-300
                                hover:after:translate-y-0 hover:after:scale-110
                                hover:before:-translate-y-full hover:before:scale-0 hover:before:rotate-[120deg]`}

                                >
                                </button> */}
                                <button
                                    onClick={handleDownloadCV}
                                    className={`relative overflow-hidden rounded-[10px] border-0 cursor-pointer
                                transition-all duration-500

                                /* size responsive */
                                h-[42px] w-[120px] text-base
                                sm:h-[50px] sm:w-[150px] sm:text-xl

                                before:content-['View_CV']
                                before:absolute before:inset-0
                                ${isDarkMode ? 'before:bg-green-100 before:text-green-800' : 'before:bg-green-700 before:text-white'}
                                before:flex before:items-center before:justify-center
                                before:font-semibold
                                before:transition-all before:duration-500

                                after:content-['📋']
                                after:text-3xl
                                after:absolute after:inset-0
                                ${isDarkMode ? 'after:bg-green-800 after:text-white' : 'after:bg-green-100 after:text-green-800 border-green-700 border-2'}
                                after:flex after:items-center after:justify-center
                                after:font-semibold
                                after:translate-y-full
                                after:transition-all after:duration-300

                                /* hover chỉ mạnh từ sm trở lên */
                                sm:hover:after:translate-y-0 sm:hover:after:scale-110
                                sm:hover:before:-translate-y-full sm:hover:before:scale-0 sm:hover:before:rotate-[120deg]
                                `}
                                >
                                </button>

                            </div>

                            {/* About Content */}
                            <div className="content-animate order-1 md:order-2  lg:pl-[42px] ">
                                <h2 className={`md:text-2xl lg:text-3xl text-xl font-bold md:mb-6 mb-2  ${isDarkMode ? 'text-white' : 'text-green-800'}`}>
                                    About me
                                </h2>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 mx-2 sm:mb-8 lg:pt-3 align-baseline leading-relaxed text-md md:text-xl lg:text-[27px] text-left tracking-tighter`}>
                                    I am drawn to Accounting through my interest in how clear rules and internal controls affect real decisions. In academic projects and group work, I often focus on checking numbers, clarifying roles, and keeping shared tasks organized, which has gradually shaped my goal of working toward a Finance Controller role.

                                    Outside of school, I follow finance and business news and compare how the same information is reported across different sources. This habit helps me see how financial data can be framed differently and why accuracy and structure matter in practice.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership & Activities Section with Tabs */}
                <section data-observe id="projects" className={`section-animate py-6 sm:py-8 md:py-10 px-4 sm:px-6 pb-6  scroll-smooth scroll-mt-15 ${isDarkMode ? 'bg-slate-800' : 'bg-pearl-500'}`}>
                    <div className="max-w-9xl mx-2 justify-center items-center">
                        {/* Tab Navigation - New Design */}
                        <div className="mb-10 sm:mb-16">
                            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 sm:gap-6">
                                {/* Tab buttons */}
                                {tabsConfig.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.label;

                                    return (
                                        <button
                                            key={tab.label}
                                            onClick={() => setActiveTab(tab.label)}
                                            style={isActive ? { borderColor: '#377a81', borderWidth: '3px' } : {}}
                                            className={`relative flex flex-col items-center justify-center gap-2 sm:gap-4 py-4 sm:py-8 px-2 sm:px-4 rounded-xl transition-all duration-300 backdrop-blur-lg border shadow-lg ${isActive ? `${isDarkMode ? 'bg-[#f7f7f7] scale-105' : 'bg-linear-to-r from-[#e4f3ee] to-green-50 scale-105'} text-green-700 shadow-lg` : `${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:text-gray-100 hover:bg-gray-600 hover:scale-130' : 'bg-white border-green-200 text-gray-700 hover:text-gray-900 hover:bg-green-100/50 hover:scale-130'}`
                                                }`}
                                        >
                                            <Icon
                                                className={`transition-all duration-300 size-[26px] md:size-[36px] ${isActive ? 'scale-120 md:scale-145' : 'scale-100'
                                                    }`}
                                            />
                                            <span className="md:text-xl text-md whitespace-normal text-center leading-snug">{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tab Content Container */}
                        <div className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-green-200'} backdrop-blur-lg rounded-2xl md:p-6 p-2 shadow-xl border overflow-hidden`}>
                            <div className="">
                                {activeTab === 'Academic Profiles' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                        {[
                                            {
                                                title: 'Foreign Language Specialized School ',
                                                img: academic1,
                                                date: 'Sep 2023-Present',
                                                color: 'white',
                                                desc: '• Grade 10 GPA: 9.7/10\n• Grade 11 GPA: 9.7/10\n• Grade 12 GPA: 9.7/10 (1st Term)',
                                                link: 'https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=sharing'
                                            },
                                            {
                                                title: 'SAT Score Certification',
                                                img: academic2,
                                                date: 'Dec 2025',
                                                color: 'from-gray-500/20',
                                                desc: '• SAT Score: 1570/1600 \n• Math: 800/800 \n• Reading and Writing: 770/800',
                                                link: 'https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing'
                                            },
                                            {
                                                title: 'IELTS Certification',
                                                img: academic3,
                                                date: 'Mar 2025',
                                                color: 'from-gray-500/20',
                                                desc: '• Overall: 8.0/9.0\n',
                                                link: 'https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=sharing'
                                            }

                                        ].map((item, idx) => (
                                            <a key={idx} target="_blank" rel="noopener noreferrer" className="card-animate group h-full">
                                                <div className={`relative overflow-hidden rounded-xl h-full flex flex-col ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white/80 border-gray-100/50'} border shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                                                    <div className="relative overflow-hidden md:h-48 h-32">
                                                        <div className={`absolute inset-0 bg-linear-to-br py-2 md:py-4 ${item.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}></div>

                                                        <img src={item.img} alt={item.title} className="w-full h-full object-contain my-2 md:my-4 group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div className="flex flex-col flex-1 p-4 sm:p-5 mb-12 md:mb-16">
                                                        <div className={`flex items-center gap-3 text-md md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                                                            <time dateTime={item.date} className="flex items-center gap-1">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                {item.date}
                                                            </time>
                                                            <span>•</span>
                                                            <span className="flex items-center gap-1">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                {item.author}
                                                            </span>
                                                        </div>
                                                        <h3 className={`text-[14px] md:text-[16px] text-left font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-2  transition`}>{item.title}</h3>
                                                        <h2 className='leading-relaxed whitespace-pre-line text-[14px] md:text-[16px] text-left'>{item.desc}</h2>
                                                        <div className="mt-4 justify-center w-full h-8 absolute bottom-5 border-t border-gray-200">
                                                            {/* <button className="text-green-800 justify-end h-16 hover:text-green-600 font-medium text-sm sm:text-base transition flex items-center gap-2">See Details →</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* Research Tab */}
                                {activeTab === 'Research Experiences' && (
                                    <div className="space-y-6 sm:space-y-8">
                                        {[
                                            {
                                                title: 'Developing Green Credit System in Japan \n Asia-Pacific Economic Review (ISSN 0868-3808) \nPages 37-39',
                                                image: research1,
                                                category: 'Sustainable Finance',
                                                date: '• Published on Asia-Pacific Economic Review  | Dec 2025 ',
                                                author: 'MSc. Vu Thien Bach, Vu Phan Anh',
                                                role: 'Second-Author',
                                                desc: ' • Research Objective\n  To examine Green Credit System to understand transparency and reporting challenges, and draw lessons relevant to emerging markets.\n • Focus\n  - The development of green credit and sustainable finance in Japan, including green bonds and green loans.\n  - The role of major commercial banks and the Bank of Japan in supporting climate-related lending.\n  - Transparency and reporting practices in climate-related loan programmes.\n  - Structural challenges in Japan’s green finance system, including classification standards and disclosure requirements.\n • Outcome\n Identified practical lessons on improving transparency and reporting standards for green credit systems, with relevance for emerging markets.',
                                                focus: ['Green credit development in Japan', 'Transparency in climate-related loan programmes', 'Policy approaches and institutional practices', 'Lessons for emerging markets'],
                                                link: 'https://drive.google.com/file/d/1H7pegAOzNbKwIhVgHZRNEurMKLFAUj0P/view?usp=drive_link'
                                            },
                                            {
                                                title: 'The Nexus of Policy, Technology, and Integrity: Charting the New Frontiers of International Carbon Markets\n(Full Paper in Progress) ',
                                                image: research2,
                                                category: 'Climate Policy',
                                                date: '• Abstract accepted for the International Conference  | Oct 2025 \n • Held by Foreign Trade University, Hanoi, Vietnam | Mar 2026  ',
                                                author: 'MSc. Lu Thi Thu Trang, Vu Phan Anh',
                                                role: 'Research Assistant',
                                                desc: '• Research Objective\n To examine the current development of international carbon markets and assess how policy frameworks, technology, and integrity challenges shape their effectiveness and credibility.\n• Focus\n - The structure and interaction of compliance and voluntary carbon markets.\n - Key policy developments, including Article 6 of the Paris Agreement and the EU’s Carbon Border Adjustment Mechanism (CBAM).\n - Integrity challenges in carbon markets, particularly issues of additionality, governance, and oversight.\n - The role of emerging technologies, including AI-based monitoring systems and blockchain, in improving transparency and trust.\n• Outcome\n Identified key policy, governance, and technological factors necessary to strengthen transparency, integrity, and effectiveness in international carbon markets, with implications for future climate policy and market design.',
                                                focus: ['CBAM market mechanisms', 'MRV system analysis', 'Blockchain verification technologies', 'Data transparency and integrity'],
                                                link: 'https://drive.google.com/file/d/1EvCdpTXtSnfUeUYNMCwJx584WC24YWNf/view?usp=drive_link'
                                            }
                                        ].map((item, idx) => (
                                            <article key={idx} className={`card-animate group ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-green-200'} rounded-xl overflow-hidden hover:shadow-xl shadow-md transition-shadow duration-300`}>
                                                <div className="flex flex-col md:flex-row">
                                                    {/* Image - 1/3 width */}
                                                    <div className="md:w-1/3 flex flex-col justify-center items-center w-full overflow-hidden">

                                                        {/* Category badge - top left */}
                                                        <div className=" pt-4 md:pt-8 ">
                                                            <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        <img src={item.image} alt={item.title} className="w-full h-40 my-4 md:my-8 md:pl-8 md:pr-8 md:h-full object-contain" />

                                                        {/* Link button - bottom center */}
                                                        <div className="md:pb-6 sm:pb-8 flex text-green-700 justify-center ">
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`inline-flex items-center gap-2${isDarkMode ? 'text-white hover:text-gray-300' : 'text-blue-800 hover:text-green-800'} font-semibold text-sm md:text-base transition-all hover:gap-3`}
                                                            >
                                                                View Full Research
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    {/* Content - 2/3 width */}
                                                    <div className="md:w-2/3 w-full md:p-6 p-4 pt-2">
                                                        {/* Category Badge */}

                                                        {/* Title */}
                                                        <h3 className={`text-md md:text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-3 whitespace-pre-line transition leading-tight`}>
                                                            {item.title}
                                                        </h3>

                                                        {/* Author & Meta */}
                                                        <p className={`text:md md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 font-medium`}>
                                                            By {item.author}
                                                        </p>
                                                        <span className="flex items-center text-md md:text-lg font-bold gap-1">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            {item.role}
                                                        </span>
                                                        <div className="mb-4 flex items-center gap-2 ">
                                                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{renderBoldBullets(item.date)}</span>
                                                        </div>

                                                        {/* Description/Abstract */}
                                                        {renderBoldBullets(item.desc)}
                                                        {/* View Link */}

                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                {/* Awards Tab */}
                                {activeTab === 'Awards & Honors' && (
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8">
                                        {[
                                            {
                                                title: 'Third Prize | 2025 Reading Culture Ambassador Competition, Vietnam National University ',
                                                img: award1,
                                                color: 'from-gray-500/20',
                                                desc: '•  Competition Objective \nLiterary Analysis for National Aspiration & Designing Literacy Solutions\n• Contributions \n- Analyzed the foundational Vietnamese legend “Thánh Gióng” to examine how literature cultivates national aspiration and pioneering spirit. \n- Designed an asset-light literacy initiative by repurposing existing village loudspeaker systems to promote reading culture based on field constraints in ethnic minority and border communities. ',
                                                time: 'summers 2024 & 2025',
                                                date: 'Nov 2025',
                                                category: 'Reading Competition'
                                            },
                                            {
                                                title: 'Prospective Award | 2025 Reading Culture Ambassador Competition, University of Languages and International Studies, Vietnam National University ',
                                                img: award2,
                                                desc: '•  Competition Objective \nLiterary Analysis for National Aspiration & Designing Literacy Solutions\n• Contributions \n- Analyzed the foundational Vietnamese legend “Thánh Gióng” to examine how literature cultivates national aspiration and pioneering spirit. \n- Designed an asset-light literacy initiative by repurposing existing village loudspeaker systems to promote reading culture based on field constraints in ethnic minority and border communities. ',
                                                color: 'from-gray-500/20',
                                                date: 'Nov 2025',
                                                category: 'Reading Competition'
                                            }
                                        ].map((item, idx) => (
                                            <article key={idx} className="card-animate group h-full cursor-pointer">
                                                <button
                                                    onClick={() => handleImageOpen([award1, award2], idx)}
                                                    className="block h-full w-full text-left"
                                                >
                                                    <div className={`relative overflow-hidden rounded-xl h-full flex flex-col ${isDarkMode ? 'bg-gray-700/50 border-gray-600/50' : 'bg-white/80 border-gray-100/50'} border shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                                                        {/* Featured Image */}
                                                        <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
                                                            <div className={`absolute inset-0 bg-linear-to-br py-4 ${item.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                                            <img
                                                                src={item.img}
                                                                alt={item.title}
                                                                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            {/* Category Badge */}
                                                            <div className="absolute md:top-1 md:left-1 top-0.5 left-0.5">
                                                                <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                                                                    {item.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex flex-col flex-1 p-5 sm:p-6">
                                                            {/* Meta Info */}
                                                            <div className={`flex items-center gap-3 text-md md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                                                                <time dateTime={item.date} className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    {item.date}
                                                                </time>
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className={`textmd md:text-lg  font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-3  transition leading-tight`}>
                                                                {item.title}
                                                            </h3>
                                                            {/* Description */}
                                                            {renderBoldBullets(item.desc, isDarkMode)}
                                                            {/* Read More Link */}
                                                            <div className={`mt-auto pt-4 border-t ${isDarkMode ? 'border-gray-600/30' : 'border-gray-100'}`}>
                                                                <span className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-green-800 hover:text-green-600'} font-medium text-sm sm:text-base transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}>
                                                                    View Image
                                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                {/* Leadership Tab */}
                                {activeTab === 'Leadership Projects' && (
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                                        {[
                                            {
                                                title: ' HQmaths Club ',
                                                img: leadership2,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Head Teaching Assistant',
                                                desc: ' • Time commitment\n16 hours/month\n • Context\nTeam leader coordinating 5 peer teaching assistants to provide mathematics support for 150 secondary school students of varying proficiency levels.\n • Contributions\n- Coordinated tutoring schedules and assigned peer tutors to topics based on student needs.\n- Assisted in setting up small study groups where learners are grouped by similar skill levels.\n- Compiled summary tables and progress reports to provide clear updates to teachers on tutoring activities and learning outcomes.\n • Outcome\nIn the 2024 high school entrance examinations, many participating students achieved scores of nine or higher out of ten in mathematics.',
                                                date: 'Apr 2024-Present',
                                                category: 'Teaching Assistance'
                                            },
                                            {
                                                title: 'Summer Program | Canadian English Council ',
                                                img: leadership1,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Division Leader',
                                                desc: ' • Time commitment\n 160 hours/month \n • Context\nManaging 20 staff members to deliver English Workshops for 150 students aged 10–15 over the course of a month.\n • Contributions \n-  Monitored implementation through checklists and weekly reports to resolve gaps and scheduling issues \n-  Coordinated across divisions and conducted weekly onboarding training to standardise procedures and ensure smooth team integration.\n  • Outcome \nIn post-program debriefs, supervisors highlighted that daily sessions were executed according to plan, staffing adjustments were handled without disrupting classes, and no unresolved scheduling issues remained at program close. ',
                                                date: 'Jun 2024, 2025',
                                                category: 'Operations Management'
                                            },
                                        ].map((item, idx) => (
                                            <article key={idx} className="card-animate group h-full cursor-pointer">
                                                <button
                                                    onClick={() => handleImageOpen([leadership1, leadership2], idx)} x
                                                    className="block h-full w-full text-left"
                                                >
                                                    <div className={`relative overflow-hidden rounded-xl h-full flex flex-col ${isDarkMode ? 'bg-gray-700/50 border-gray-600/50' : 'bg-white/80 border-gray-100/50'} border shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                                                        {/* Featured Image */}
                                                        <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
                                                            <div className={`absolute inset-0 bg-linear-to-br py-4 ${item.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                                            <img
                                                                src={item.img}
                                                                alt={item.title}
                                                                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            {/* Category Badge */}
                                                            <div className="absolute md:top-1 md:left-1 top-0.5 left-0.5">
                                                                <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                                                                    {item.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex flex-col flex-1 p-5 sm:p-6">
                                                            {/* Meta Info */}
                                                            <div className="flex items-center gap-2 text-md md:text-lg text-gray-500 mb-3">
                                                                <time dateTime={item.date} className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    {item.date}
                                                                </time>
                                                                <span>•</span>
                                                                <span className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    {item.author}
                                                                </span>
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className={`text-md md:text-lg  font-bold whitespace-pre-line  ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-3  transition leading-tight`}>
                                                                {item.title}
                                                            </h3>

                                                            {/* Description */}
                                                            {renderBoldBullets(item.desc, isDarkMode)}

                                                            {/* Read More Link */}
                                                            <div className={`mt-auto pt-4 border-t ${isDarkMode ? 'border-gray-600/30' : 'border-gray-100'}`}>
                                                                <span className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-green-800 hover:text-green-600'} font-medium text-sm sm:text-base transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}>
                                                                    View Image
                                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                {/* Extracurricular Tab */}
                                {activeTab === 'Extracurricular Experiences' && (
                                    <div className="grid sm:grid-cols-2 sm:[&>*:nth-child(1)]:col-span-2 grid-cols-1 gap-6 sm:gap-8">
                                        {[
                                            {
                                                title: ' CEC Accounting and Finance Department ',
                                                img: extracurricular1,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Intern',
                                                desc: ' • Time commitment\n20 hours/month\n • Context\nIntern within a finance team of 4 staff members, supporting accurate financial record-keeping and orderly documentation for organisational operations.\n • Contributions\n- Assisted with daily transaction recording and systematic organisation of receipts and invoices.\n- Verified entries against internal approval procedures prior to filing.\n- Organised financial records into a consistent filing structure to improve traceability.\n- Supported routine reconciliation by identifying and flagging missing or unclear documentation.\n • Outcome\nDuring periodic internal checks, monthly financial records were confirmed to include full supporting documentation, with transaction histories traceable without missing entries.',
                                                date: 'Mar 2024-Present',
                                                category: 'Accounting Internship'
                                            },
                                            {
                                                title: ' CEC IELTS Instruction',
                                                img: extracurricular2,
                                                color: 'from-gray-500/20',
                                                author: 'Writing Teaching Assistant',
                                                desc: ' • Time commitment\n20 hours/month\n • Context\nTeaching assistant supporting IELTS writing instruction and assessment for 30 students of varying proficiency levels.\n • Contributions\n- Reviewed student essays alongside lead instructors during practice cycles.\n- Applied official IELTS writing band descriptors to identify issues in Task Response/ Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy\n\n- Assisted students during rewrite cycles to address recurring errors.\n - Compiled summary tables and progress reports to provide clear updates to teachers on tutoring activities and learning outcomes.\n • Outcome\nIn post-practice reviews, teachers noted that subsequent student drafts addressed previously flagged structural and language issues, with fewer repeated errors across revision cycles, especially in terms of task response and task achievement.',
                                                link: '#',
                                                date: 'Oct 2024-Present',
                                                category: 'Teaching Assistance'
                                            },
                                            {
                                                title: ' English Club | Foreign Language Specialized School ',
                                                img: extracurricular3,
                                                color: 'from-gray-500/20',
                                                author: 'Scriptwriter',
                                                desc: ' • Time commitment\n 10 hours/month \n • Context\nScriptwriter within a school English Club, developing short performance scripts through collaborative writing.\n • Contributions\n- Contributed to storyline planning and dialogue drafting for short scripts.\n- Participated in group revisions to refine plot flow and language clarity.\n- Coordinated with peers to ensure scripts were appropriate for rehearsal and performance.\n • Outcome\nFollowing internal club evaluation, the short film developed from the completed script ranked among the highest-voted entries in the club’s “Best Film” selection.',
                                                link: '#',
                                                date: 'Sep 2023-Jun 2024',
                                                category: 'Scriptwriting'
                                            }, {
                                                title: ' Academic & Leadership Programs (UK) Embassy Summer  ',
                                                color: 'from-gray-500/20',
                                                img: extracurricular4,
                                                author: 'Co-ordinator',
                                                desc: ' • Time commitment\nFull-time, three-week residential course\n • Context\nProgram participant in academic and leadership training across multiple UK universities, studying alongside approximately 50 students per class from diverse cultural backgrounds.\n • Contributions\n- Attended lectures and workshops on communication, teamwork, and leadership fundamentals.\n- Participated in structured group discussions and short case-based activities.\n- Collaborated with international peers on assigned group projects and presentations, including film-making projects, public speaking exercises, and basic psychology case analyses.\n • Outcome\nIn post-program evaluations, facilitators confirmed completion of all assigned group projects and presentations, with participants contributing verbally during discussions and fulfilling assigned roles in multicultural team activities.',
                                                link: '#',
                                                date: 'Jun-Jul 2023',
                                                category: 'Leadership Programs'
                                            },
                                            {
                                                title: ' Public Speaking Course at Hwa Chong Institution (Singapore) | Bluesky Education   ',
                                                img: extracurricular5,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Member',
                                                desc: ' • Time commitment\nFull-time, two-week residential course\n • Context\nCourse participant undergoing structured public speaking training in a competitive academic environment, participating in classes of approximately 50 students.\n • Contributions\n- Participated in daily workshops on speech structure and delivery techniques.\n- Practised, prepared, and delivered impromptu speeches under instructor guidance.\n- Applied feedback during evaluated presentations.\n • Outcome\nBy the end of the course, I was selected as one of the main presenters for the final presentation, where I presented on key learning outcomes and their application to future academic and career pathways.',
                                                date: 'Jul 2022',
                                                category: 'Public Speaking'
                                            }
                                        ].map((item, idx) => (
                                            <article key={idx} className="card-animate group h-full cursor-pointer">
                                                <button
                                                    onClick={() => handleImageOpen([extracurricular1, extracurricular2, extracurricular3, extracurricular4, extracurricular5], idx)}
                                                    className="block h-full w-full text-left "
                                                >
                                                    <div className={`relative  overflow-hidden rounded-xl h-full flex flex-col ${isDarkMode ? 'bg-gray-700/50 border-gray-600/50' : 'bg-white/80 border-gray-100/50'} border shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                                                        {/* Featured Image */}
                                                        <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
                                                            <div className={`absolute inset-0 bg-linear-to-br py-4 ${item.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                                            <img
                                                                src={item.img}
                                                                alt={item.title}
                                                                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            {/* Category Badge */}
                                                            <div className="absolute md:top-1 md:left-1 top-0.5 left-0.5">
                                                                <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                                                                    {item.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex flex-col flex-1 p-5 sm:p-6">
                                                            {/* Meta Info */}
                                                            <div className={`flex items-center gap-3 text-md md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                                                                <time dateTime={item.date} className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    {item.date}
                                                                </time>
                                                                <span>•</span>
                                                                <span className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    {item.author}
                                                                </span>
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className={`text-lg font-bold whitespace-pre-line ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-3  transition leading-tight`}>
                                                                {item.title}
                                                            </h3>

                                                            {/* Description */}
                                                            {renderBoldBullets(item.desc, isDarkMode)}

                                                            {/* Read More Link */}
                                                            <div className={`mt-auto pt-4 border-t ${isDarkMode ? 'border-gray-600/30' : 'border-gray-100'}`}>
                                                                <span className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-green-800 hover:text-green-600'} font-medium text-sm sm:text-base transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}>
                                                                    View Image
                                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                {/* Social Impact Tab */}
                                {activeTab === 'Social Impacts' && (
                                    <div className="grid sm:grid-cols-2 sm:[&>*:nth-child(1)]:col-span-2 grid-cols-1 gap-4 sm:gap-6">
                                        {[
                                            {
                                                title: ' The Smile Charity Community (Nụ Cười Yêu Thương) ',
                                                img: socialimpact2,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Member',
                                                desc: ' • Time commitment\n15 hours/month\n • Context\nVolunteer providing direct humanitarian aid and medical camp support for vulnerable populations, including homeless children and the elderly.\n • Contributions\n- Regularly prepared and distributed daily nutritional meals at a dedicated medical support camp.\n- Assisted in the organization of onsite care activities to ensure essential services reached community members in need.\n- Collaborated with team members to manage food supplies and maintain hygiene standards during distribution.\n • Outcome\nDelivered regular nutritional support and essential care to orphanage residents and elderly individuals at the Social Support Center.',
                                                date: 'Feb 2024-Present',
                                                category: 'Food Assistance'
                                            },
                                            {
                                                title: ' “Tết vì người bệnh” Fundraising Campaign Canadian English Council',
                                                img: socialimpact1,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Co-ordinator',
                                                desc: ' • Time commitment\n 10 hours/month \n • Context\n Volunteer for a hospital charity campaign mobilizing youth participation to provide holiday support for patients at major medical centers like Bach Mai and Hanoi University of Medicine.\n • Contributions\n- Contributed to a creative fundraising initiative that converted student art and writing submissions into monetary donations (20,000 VND per entry).\n-  Assisted in the logistical planning and preparation of 1,000 Tet gift packages.\n - Engaged in outreach to encourage student involvement and content creation for the campaign.\n • Outcome\nSuccessfully met the fundraising target to fund 1,000 gift packages.',
                                                date: 'Jan 2024, 2025',
                                                category: ' Fundraising'
                                            },
                                            {
                                                title: ' Book Translation Project: End Plastic Soup \n Rotary Club ',
                                                img: socialimpact3,
                                                color: 'from-gray-500/20',
                                                link: '#',
                                                author: 'Translator',
                                                desc: ' • Time commitment\n40 hours/month\n • Context\nVolunteer Translator for an international environmental book project with Rotary Clubs of Amsterdam and the End Plastic Soup Foundation (Netherlands), focused on literary translation and environmental education outreach.\n • Contributions\n- Translated an environmental education book from German into Vietnamese, addressing topics such as plastic pollution and ocean conservation.\n- Adapted technical terminology into clear, accessible language for youth and community readers.\n • Outcome\nProduced a Vietnamese translation that made key information on global plastic pollution and conservation strategies accessible to local readers.',
                                                date: 'Nov 2023',
                                                category: 'Translation'
                                            }
                                        ].map((item, idx) => (
                                            <article key={idx} className="card-animate group h-full cursor-pointer">
                                                <button
                                                    onClick={() => handleImageOpen([socialimpact1, socialimpact2, socialimpact3], idx)}
                                                    className="block h-full w-full text-left"
                                                >
                                                    <div className={`relative overflow-hidden rounded-xl h-full flex flex-col ${isDarkMode ? 'bg-gray-700/50 border-gray-600/50' : 'bg-white/80 border-gray-100/50'} border shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                                                        {/* Featured Image */}
                                                        <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
                                                            <div className={`absolute inset-0 bg-linear-to-br py-4 ${item.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                                            <img
                                                                src={item.img}
                                                                alt={item.title}
                                                                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            {/* Category Badge */}
                                                            <div className="absolute md:top-1 md:left-1 top-0.5 left-0.5">
                                                                <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                                                                    {item.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex flex-col flex-1 p-5 sm:p-6">
                                                            {/* Meta Info */}
                                                            <div className={`flex items-center gap-3 text:md md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                                                                <time dateTime={item.date} className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    {item.date}
                                                                </time>
                                                                <span>•</span>
                                                                <span className="flex items-center gap-1">
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    {item.author}
                                                                </span>
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className={`text:md md:text-lg whitespace-pre-line font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} mb-3  transition leading-tight`}>
                                                                {item.title}
                                                            </h3>
                                                            {renderBoldBullets(item.desc, isDarkMode)}


                                                            {/* Read More Link */}
                                                            <div className={`mt-auto pt-4 border-t ${isDarkMode ? 'border-gray-600/30' : 'border-gray-100'}`}>
                                                                <span className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-green-800 hover:text-green-600'} font-medium text-sm sm:text-base transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}>
                                                                    View Image
                                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section data-observe id="contact" className={`section-animate justify-center py-6 sm:py-16 md:py-20 px-4 sm:px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-green-50'} relative overflow-hidden scroll-mt-80`}>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid gap-8 sm:gap-12">

                            {/* Contact Info */}
                            <div>
                                <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold md:mb-6 mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'}`}>
                                    <span className={isDarkMode ? 'text-white' : 'text-green-800'}>Contact me</span>
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-6 gap-4">

                                    <div className="flex items-center justify-center lg:items-end gap-3 sm:gap-4 pr-10 sm:pr-0">
                                        <div className="size-8 md:size-10 sm:w-12 sm:h-12 bg-green-800 rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className={`hidden md:block ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} font-medium mb-1 text-xl`}>Email</h3>
                                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-md md:text-xl break-all`}>vuphananh.flss@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-center space-x-4 items-center'>
                                        <a href="https://www.facebook.com/vu.phan.anh.176855" className="text-blue-500 hover:text-blue-600 transition">
                                            <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a href="https://github.com/Phan-Anh-Vu-08" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-black hover:text-gray-600'} transition`}>
                                            <Github className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">

                                            </Github>
                                        </a>
                                        <a href="https://www.linkedin.com/in/phan-anh-vu/" className="text-blue-600 hover:text-blue-700 transition">
                                            <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Footer Social Links */}
                                    <div className="flex justify-center items-center gap-6 sm:gap-8">
                                        <div className="flex items-center justify-center lg:items-end gap-3 sm:gap-4 pr-10 sm:pr-0">
                                            <div className={`size-8 md:size-10 sm:w-12 sm:h-12 bg-green-800 rounded-full flex items-center justify-center shrink-0`}>
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className={`hidden md:block ${isDarkMode ? 'text-gray-100' : 'text-gray-900 hover:text-green-800'} font-medium mb-1 text-xl`}>Phone</h3>
                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-md md:text-xl`}>+84 855 083 489</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* Footer */}
                < footer className={`py-6 sm:py-8 px-4 sm:px-6 ${isDarkMode ? ' border-gray-700 border-t' : 'bg-white border-gray-200 border-t'} `} >
                    <div className="max-w-7xl mx-auto">
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-400'} text:md md:text-xl text-center`}>
                            © 2026 By Vu Phan Anh
                        </p>
                    </div>
                </footer >

                <style>{`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateX(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
                .animate-fadeIn {
                  animation: fadeIn 0.5s ease-in-out forwards;
                }
                .animate-slideIn {
                  animation: slideIn 0.5s ease-in-out forwards;
                }
              `}</style>

                {/* Image Modal */}
                <ImageModal
                    isOpen={isImageOpened}
                    image={currentImage}
                    title={currentImage?.title || ''}
                    onClose={handleImageClose}
                    onPrev={handlePrevImage}
                    onNext={handleNextImage}
                    hasNavigation={allImages.length > 1}
                    isDarkMode={isDarkMode}
                />
            </div >
        </div>
    );
}
