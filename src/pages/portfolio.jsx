import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Github, Moon, Sun } from "lucide-react";

import ImageModal from "../components/imageModal";
import profileImg from "../assets/Profile.jpeg";

import { tabsConfig } from "../data/portfolioData";
import { handleDownloadCV } from "../utils/portfolioHelpers";
import {
  AcademicTab,
  ResearchTab,
  AwardsTab,
  LeadershipTab,
  ExtracurricularTab,
  SocialImpactsTab,
} from "../components/TabContents";

const TabContent = ({ activeTab, isDarkMode, onImageOpen }) => {
  switch (activeTab) {
    case "Academic Profiles":
      return <AcademicTab isDarkMode={isDarkMode} />;
    case "Research Experiences":
      return <ResearchTab isDarkMode={isDarkMode} />;
    case "Awards & Honors":
      return <AwardsTab isDarkMode={isDarkMode} onImageOpen={onImageOpen} />;
    case "Leadership Projects":
      return (
        <LeadershipTab isDarkMode={isDarkMode} onImageOpen={onImageOpen} />
      );
    case "Extracurricular Experiences":
      return (
        <ExtracurricularTab isDarkMode={isDarkMode} onImageOpen={onImageOpen} />
      );
    case "Social Impacts":
      return (
        <SocialImpactsTab isDarkMode={isDarkMode} onImageOpen={onImageOpen} />
      );
    default:
      return null;
  }
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [activeTab, setActiveTab] = useState("Academic Profiles");
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navValue, setNavValue] = useState("about");
  const [isTabDropdownOpen, setIsTabDropdownOpen] = useState(false);
  const [isNavProjectsDropdownOpen, setIsNavProjectsDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      let currentSection = "about";
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150)
          currentSection = section;
      }
      setNavValue(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isTabDropdownOpen) {
        if (
          !event.target.closest("[data-dropdown-menu]") &&
          !event.target.closest("[data-dropdown-button]")
        )
          setIsTabDropdownOpen(false);
      }
      if (isNavProjectsDropdownOpen) {
        if (
          !event.target.closest("[data-nav-dropdown-menu]") &&
          !event.target.closest("[data-nav-dropdown-button]")
        )
          setIsNavProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isTabDropdownOpen, isNavProjectsDropdownOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    document
      .querySelectorAll("[data-observe]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleImageOpen = (images, index = 0) => {
    setAllImages(images);
    setCurrentImageIndex(index);
    setCurrentImage(images[index]);
    setIsImageOpened(true);
  };
  const handleImageClose = () => {
    setIsImageOpened(false);
    setCurrentImage(null);
  };
  const handlePrevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(newIndex);
    setCurrentImage(allImages[newIndex]);
  };
  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(newIndex);
    setCurrentImage(allImages[newIndex]);
  };

  const navLinkClass = (section) =>
    `nav-link ${navValue === section ? "active" : ""} ${isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-600 hover:text-gray-900"} transition font-medium`;

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="">
      <style>{`
        @keyframes fadeInUp   { from { opacity:0; transform:translateY(40px);  } to { opacity:1; transform:translateY(0);  } }
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-40px); } to { opacity:1; transform:translateY(0);  } }
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(60px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        .section-animate    { animation: fadeInUp 1.2s ease-out forwards; }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
        .animate-fadeInUp   { animation: fadeInUp 1s ease-in-out; }
        .profile-animate    { animation: slideInLeft 1.2s ease-out forwards; }
        .content-animate    { animation: slideInRight 1.2s ease-out forwards; }
        .card-animate { animation: slideUp 0.8s ease-out both; }
        .card-animate:nth-child(1) { animation-delay: 0.3s; }
        .card-animate:nth-child(2) { animation-delay: 0.6s; }
        .card-animate:nth-child(3) { animation-delay: 0.9s; }
        .card-animate:nth-child(4) { animation-delay: 1.2s; }
        .card-animate:nth-child(5) { animation-delay: 1.5s; }
        .card-animate:nth-child(6) { animation-delay: 1.8s; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background-color: #16a34a; transition: width 0.3s ease;
        }
        .nav-link.active::after { width: 100%; background-color: #16a34a; }
      `}</style>

      <div
        className={`min-h-screen ${isDarkMode ? "bg-slate-800 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}
      >
        {/* Header */}
        <header
          className={`fixed w-full left-0 top-0 z-50 backdrop-blur-lg ${isDarkMode ? "bg-slate-900/60 border-gray-700" : "bg-white/60 border-gray-200"}`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between lg:justify-evenly">
              {/* Logo */}
              <div className="flex ml-4">
                <div className="w-12 h-6 sm:w-14 sm:h-6 lg:w-20 lg:h-8 rounded-full object-cover">
                  <img
                    src="selfLogo1.png"
                    alt="Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1
                  className={`text-xl md:text-2xl xl:text-3xl font-bold ${isDarkMode ? "text-white" : "text-green-800"}`}
                >
                  Vu Phan Anh
                </h1>
              </div>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-8 text-xl">
                <a href="#about" className={navLinkClass("about")}>
                  ABOUT
                </a>

                <div className="relative" data-nav-dropdown-menu>
                  <button
                    data-nav-dropdown-button
                    onClick={() => setIsNavProjectsDropdownOpen((v) => !v)}
                    className={`nav-link flex items-center gap-2 ${navLinkClass("projects")}`}
                  >
                    DETAILS
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isNavProjectsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isNavProjectsDropdownOpen && (
                    <div
                      data-nav-dropdown-menu
                      className={`absolute top-full left-0 mt-2 rounded-lg border-2 z-50 shadow-xl overflow-hidden w-56 ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-green-300"}`}
                    >
                      {tabsConfig.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.label;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              setActiveTab(tab.label);
                              setIsNavProjectsDropdownOpen(false);
                              scrollToProjects();
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${isActive ? (isDarkMode ? "bg-green-700 text-white" : "bg-green-100 text-green-900 font-semibold") : isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                          >
                            <Icon size={18} />
                            <span className="text-sm text-left">
                              {tab.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <a href="#contact" className={navLinkClass("contact")}>
                  CONTACT
                </a>
              </nav>

              {/* Dark mode + hamburger */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsDarkMode((v) => !v)}
                  className={`md:ml-20 lg:ml-44 flex rounded-lg transition-colors ${isDarkMode ? "bg-gray-700 text-yellow-400 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  title={
                    isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                  }
                >
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button
                  className={`md:hidden ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  onClick={() => setMobileMenuOpen((v) => !v)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 text-sm">
                <a
                  href="#about"
                  className={
                    isDarkMode
                      ? "text-gray-300 font-medium"
                      : "text-gray-600 font-medium"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </a>

                {/* FIX: thêm data-nav-dropdown-menu và data-nav-dropdown-button
                    để outside-click handler không đóng dropdown ngay khi click vào nó */}
                <div className="flex flex-col gap-2" data-nav-dropdown-menu>
                  <button
                    data-nav-dropdown-button
                    onClick={() => setIsNavProjectsDropdownOpen((v) => !v)}
                    className={`nav-link relative flex items-center justify-center ${navLinkClass("projects")}`}
                  >
                    <span className="mx-auto">PROJECTS</span>

                    <ChevronDown
                      size={18}
                      className={`absolute right-2 transition-transform duration-300 ${
                        isNavProjectsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isNavProjectsDropdownOpen && (
                    <div
                      data-nav-dropdown-menu
                      className={`pl-4 flex flex-col gap-2`}
                    >
                      {tabsConfig.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.label;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              setActiveTab(tab.label);
                              setIsNavProjectsDropdownOpen(false);
                              setMobileMenuOpen(false);
                              scrollToProjects();
                            }}
                            className={`flex items-center gap-2 text-xs transition-all  ${isActive ? (isDarkMode ? "text-green-400 font-bold" : "text-green-700 font-bold") : isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            <Icon size={14} />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className={
                    isDarkMode
                      ? "text-gray-300 font-medium"
                      : "text-gray-600 font-medium"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </nav>
            )}
          </div>
        </header>

        {/* Hero */}
        <section
          className={`section-animate pt-6 sm:pt-16 md:pt-14 px-4 sm:px-2 relative overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-gray-50"}`}
        >
          <div className="max-w-9xl relative z-10 mb-2">
            <div
              id="about"
              className="max-w-5xl justify-center mx-auto text-center"
            >
              <h2
                className={`animate-fadeInDown ${isDarkMode ? "text-white" : "text-green-800"} md:text-2xl lg:text-3xl text-xl font-bold mb-2 md:mb-6`}
              >
                Greetings! I am Vu Phan Anh
              </h2>
              <h1
                className={`animate-fadeInUp ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"} md:text-xl text-md font-bold mb-6 leading-tight inline-block`}
              >
                a High School Student Building a Foundation in Accounting and
                Finance
              </h1>
              <p
                className={`animate-fadeInUp ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"} md:text-xl text-md font-bold mb-6 sm:mb-8 leading-tight inline-block`}
              >
                Focused on Accuracy, Transparent Decision-Making,
                Accountability, and Sustainability
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          data-observe
          className={`section-animate py-6 sm:py-16 md:py-10 mx-4 rounded-4xl md:pr-4 ${isDarkMode ? "bg-slate-700" : "bg-green-50"} scroll-smooth scroll-mt-15 shadow-xl`}
        >
          <div className="max-w-7xl mx-2">
            <div className="grid md:grid-cols-[1fr_2fr] items-start">
              <div className="profile-animate relative ml-2 px-2 pt-4 sm:pt-10 order-2 md:order-1">
                <div className="flex flex-col justify-center mb-6 items-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <button
                  onClick={handleDownloadCV}
                  className={`relative overflow-hidden rounded-[10px] border-0 cursor-pointer transition-all duration-500 h-[42px] w-[120px] text-base sm:h-[50px] sm:w-[150px] sm:text-xl before:content-['View_CV'] before:absolute before:inset-0 ${isDarkMode ? "before:bg-green-100 before:text-green-800" : "before:bg-green-700 before:text-white"} before:flex before:items-center before:justify-center before:font-semibold before:transition-all before:duration-500 after:content-['📋'] after:text-3xl after:absolute after:inset-0 ${isDarkMode ? "after:bg-green-800 after:text-white" : "after:bg-green-100 after:text-green-800 border-green-700 border-2"} after:flex after:items-center after:justify-center after:font-semibold after:translate-y-full after:transition-all after:duration-300 sm:hover:after:translate-y-0 sm:hover:after:scale-110 sm:hover:before:-translate-y-full sm:hover:before:scale-0 sm:hover:before:rotate-[120deg]`}
                />
              </div>
              <div className="content-animate order-1 md:order-2 lg:pl-[42px]">
                <h2
                  className={`md:text-2xl lg:text-3xl text-xl font-bold md:mb-6 mb-2 ${isDarkMode ? "text-white" : "text-green-800"}`}
                >
                  About me
                </h2>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-3 mx-2 sm:mb-8 lg:pt-3 leading-relaxed text-md md:text-xl lg:text-[27px] text-left tracking-tighter`}
                >
                  I am drawn to Accounting through my interest in how clear
                  rules and internal controls affect real decisions. In academic
                  projects and group work, I often focus on checking numbers,
                  clarifying roles, and keeping shared tasks organized, which
                  has gradually shaped my goal of working toward a Finance
                  Controller role. Outside of school, I follow finance and
                  business news and compare how the same information is reported
                  across different sources. This habit helps me see how
                  financial data can be framed differently and why accuracy and
                  structure matter in practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          data-observe
          id="projects"
          className={`section-animate py-6 sm:py-8 md:py-10 px-4 sm:px-6 pb-6 scroll-smooth scroll-mt-15 ${isDarkMode ? "bg-slate-800" : "bg-pearl-500"}`}
        >
          <div className="max-w-9xl mx-2 justify-center items-center">
            <div className="mb-10 sm:mb-16">
              {/* Tab grid - responsive for all devices */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
                {tabsConfig.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.label;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(tab.label)}
                      style={
                        isActive
                          ? { borderColor: "#377a81", borderWidth: "3px" }
                          : {}
                      }
                      className={`relative flex flex-col items-center justify-center gap-2 sm:gap-4 py-4 sm:py-8 px-2 sm:px-4 rounded-xl transition-all duration-300 backdrop-blur-lg border shadow-lg ${isActive ? `${isDarkMode ? "bg-[#f7f7f7] scale-105" : "bg-linear-to-r from-[#e4f3ee] to-green-50 scale-105"} text-green-700 shadow-lg` : `${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-300 hover:text-gray-100 hover:bg-gray-600 hover:scale-130" : "bg-white border-green-200 text-gray-700 hover:text-gray-900 hover:bg-green-100/50 hover:scale-130"}`}`}
                    >
                      <Icon
                        className={`transition-all duration-300 size-[26px] md:size-[36px] ${isActive ? "scale-120 md:scale-145" : "scale-100"}`}
                      />
                      <span className="md:text-xl text-md whitespace-normal text-center leading-snug">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-green-200"} backdrop-blur-lg rounded-2xl md:p-6 p-2 shadow-xl border overflow-hidden`}
            >
              <TabContent
                activeTab={activeTab}
                isDarkMode={isDarkMode}
                onImageOpen={handleImageOpen}
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          data-observe
          id="contact"
          className={`section-animate justify-center py-6 sm:py-16 md:py-20 px-4 sm:px-6 ${isDarkMode ? "bg-slate-900" : "bg-green-50"} relative overflow-hidden scroll-mt-80`}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid gap-8 sm:gap-12">
              <div>
                <h2
                  className={`text-xl md:text-2xl lg:text-3xl font-bold md:mb-6 mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}`}
                >
                  <span
                    className={isDarkMode ? "text-white" : "text-green-800"}
                  >
                    Contact me
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-6 gap-4">
                  <div className="flex items-center justify-center lg:items-end gap-3 sm:gap-4 pr-10 sm:pr-0">
                    <div className="size-8 md:size-10 bg-green-800 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={`hidden md:block font-medium mb-1 text-xl ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
                      >
                        Email
                      </h3>
                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-md md:text-xl break-all`}
                      >
                        vuphananh.flss@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center space-x-4 items-center">
                    <a
                      href="https://www.facebook.com/vu.phan.anh.176855"
                      className="text-blue-500 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 sm:w-7 sm:h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Phan-Anh-Vu-08"
                      className={`${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-black hover:text-gray-600"} transition`}
                    >
                      <Github
                        className="w-5 h-5 sm:w-7 sm:h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/phan-anh-vu/"
                      className="text-blue-600 hover:text-blue-700 transition"
                    >
                      <svg
                        className="w-5 h-5 sm:w-7 sm:h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center items-center gap-6 sm:gap-8">
                    <div className="flex items-center justify-center lg:items-end gap-3 sm:gap-4 pr-10 sm:pr-0">
                      <div className="size-8 md:size-10 bg-green-800 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3
                          className={`hidden md:block font-medium mb-1 text-xl ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
                        >
                          Phone
                        </h3>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-md md:text-xl`}
                        >
                          +84 855 083 489
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-6 sm:py-8 px-4 sm:px-6 ${isDarkMode ? "border-gray-700 border-t" : "bg-white border-gray-200 border-t"}`}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-400"} text-md md:text-xl text-center`}
            >
              © 2026 By Vu Phan Anh
            </p>
          </div>
        </footer>

        <ImageModal
          isOpen={isImageOpened}
          image={currentImage}
          title={currentImage?.title || ""}
          onClose={handleImageClose}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          hasNavigation={allImages.length > 1}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}
