import React from "react";
import { renderBoldBullets } from "../utils/portfolioHelpers";
import {
  academicItems,
  universityItems,
  asianUniversityItems,
  europeanUniversityItems,
  researchItems,
  researchImages,
  awardItems,
  awardImages,
  leadershipItems,
  leadershipImages,
  extracurricularItems,
  extracurricularImages,
  socialImpactItems,
  socialImpactImages,
} from "../data/portfolioData";

// ─── Shared sub-components ────────────────────────────────────────────────────
export const renderSimpleBullets = (text, isDarkMode = false) => {
  const lines = text
    .split("\n")
    .map((line) => line.trim().replace(/^•\s*/, ""))
    .filter((line) => line);

  return (
    <div className="space-y-2.5">
      {lines.map((line, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <span
            className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-700"
              }`}
          />
          <p
            className={`text-sm leading-relaxed text-left ${isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
          >
            {line}
          </p>
        </div>
      ))}
    </div>
  );
};
const CalendarIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const PersonIcon = () => (
  <svg
    className="w-5 h-5 "
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="w-5 h-5 transition-transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CategoryBadge = ({ label }) => (
  <div className="flex mb-3">
    <span
      className="inline-flex items-center justify-center 
      bg-green-800 text-white  text-[15px] 
      rounded-full font-bold 
      px-3 py-1 mt-2
      whitespace-nowrap shadow-sm mx-auto w-64 leading-tight "
    >
      {label}
    </span>
  </div>
);

// ─── Section pill header (e.g. "Professional" / "Leadership") ────────────────
const SectionHeader = ({ label }) => (
  <div className="flex justify-center mb-8">
    <h3
      className="inline-flex items-center justify-center 
      bg-green-800 text-white text-[15px] 
      rounded-full font-bold 
      px-3 py-1 mt-2
      whitespace-nowrap shadow-sm mx-auto w-48 leading-tight"
    >
      {label}
    </h3>
  </div>
);

const ViewImageFooter = ({ isDarkMode }) => (
  <div
    className={`mt-4 pt-4 border-t ${isDarkMode ? "border-gray-600/30" : "border-gray-100"}`}
  >
    <span
      className={`${isDarkMode ? "text-white hover:text-gray-300" : "text-green-800 hover:text-green-600"}
      font-medium text-sm sm:text-left transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}
    >
      View Image
      <ChevronRightIcon />
    </span>
  </div>
);

// ─── Academic Profiles Tab ────────────────────────────────────────────────────

export const AcademicTab = ({ isDarkMode }) => (
  <div className="space-y-10">
    {/* Credentials Section */}
    <div>
      <div className="flex justify-center mb-8">
        <h3
          className="inline-flex items-center justify-center 
      bg-green-800 text-white  text-[15px] 
      rounded-full font-bold 
      px-3 py-1 mt-2
      whitespace-nowrap shadow-sm mx-auto w-60 leading-tight"
        >
          Academic Credentials
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {academicItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-xl overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1
      ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-100"}`}
          >
            {/* Logo */}
            <div className="h-40 sm:h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full object-contain hover:scale-105 transition-transform"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              {/* Organization */}
              <div
                className={`flex items-start gap-2 mb-2 ${isDarkMode ? "text-green-400" : "text-green-800"
                  }`}
              >
                <BuildingIcon />
                <span
                  className={`text-base font-bold leading-tight text-left ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  {item.title}
                </span>
              </div>

              {/* Program | Date */}
              <div className={`flex items-start gap-2 mb-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
                  <CalendarIcon />
                </span>
                <span className="leading-snug text-left">
                  {item.date}
                </span>
              </div>
              <div
                className={`flex items-start gap-2 mb-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
                  <PersonIcon />
                </span>
                <span className="leading-snug text-left">
                  {item.author}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`border-t mb-4 ${isDarkMode ? "border-gray-600/30" : "border-gray-100"
                  }`}
              />

              {/* Bullet list */}
              {renderSimpleBullets(item.desc, isDarkMode)}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Asian University Admissions */}
    <div>
      <div className="flex justify-center mb-8">
        <h3
          className="inline-flex items-center justify-center 
        bg-green-800 text-white  text-[15px] 
        rounded-full font-bold 
        px-3 py-1 mt-2
        whitespace-nowrap shadow-sm mx-auto w-72 leading-tight"
        >
          Asian University Admissions
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {asianUniversityItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-xl overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1
          ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-100"}`}
          >
            {/* Image */}
            <div className="h-24 w-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full w-full object-contain pt-2 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="px-3 pb-1 flex flex-col flex-1">
              <h3
                className={`font-medium text-1rem text-center my-2 leading-relaxed whitespace-pre-line ${isDarkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {item.title}
              </h3>
              {item.desc && (
                <p
                  className={`text-sm leading-relaxed whitespace-pre-line ${isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* European University Admissions */}
    <div>
      <div className="flex justify-center mb-8">
        <h3
          className="inline-flex items-center justify-center 
        bg-green-800 text-white  text-[15px] 
        rounded-full font-bold 
        px-3 py-1 mt-2
        whitespace-nowrap shadow-sm mx-auto w-80 leading-tight"
        >
          European University Admissions
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {europeanUniversityItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-xl overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1
          ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-100"}`}
          >
            {/* Image */}
            <div className="h-24 w-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full w-full px-14 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="px-3 pb-1 flex flex-col flex-1">
              <h3
                className={`font-medium text-1rem text-center my-2 leading-tight ${isDarkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {item.title}
              </h3>
              {item.desc && (
                <p
                  className={`text-sm leading-relaxed whitespace-pre-line ${isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Research Experiences Tab ─────────────────────────────────────────────────

export const ResearchTab = ({ isDarkMode, onImageOpen }) => (
  <div className="space-y-8">
    {researchItems.map((item, idx) => (
      <article
        key={idx}
        className={`card-animate group rounded-xl overflow-hidden shadow-md border transition-all
          ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-green-100"}`}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-gray-50/50 p-4 md:p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <CategoryBadge label={item.category} />

            <div
              className="cursor-pointer overflow-hidden rounded-lg my-4 w-full flex justify-center"
              onClick={() => onImageOpen(researchImages, idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-48 md:max-h-full w-auto object-contain hover:scale-105 md:hover:scale-110 transition-transform duration-500"
              />
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline text-center"
            >
              Full Research <ExternalLinkIcon />
            </a>
          </div>

          <div className="md:w-2/3 p-6">
            {/* Organization */}
            <div className={`flex items-start gap-2 mb-2 ${isDarkMode ? "text-green-400" : "text-green-800"}`}>
              <BuildingIcon />
              <span className={`text-sm sm:text-base font-bold leading-snug text-left ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {item.title}
              </span>
            </div>

            {/* Event + Date (calendar) */}
            <div className={`flex items-start gap-2 mb-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
                <CalendarIcon />
              </span>
              <span className="leading-snug text-left">
                {item.date}
              </span>
            </div>

            {/* Title | Role (person) */}
            <div className={`flex items-start gap-2 mb-4 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
              <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
                <PersonIcon />
              </span>
              <span className="leading-snug text-left">
                {item.author}
              </span>
            </div>
            <div className="prose prose-sm max-w-none">
              {renderBoldBullets(item.desc, isDarkMode)}
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
);
const BuildingIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
    />
  </svg>
);
// ─── Awards & Honors Tab ──────────────────────────────────────────────────────

export const AwardsTab = (props) => (
  <div className="grid grid-cols-1 gap-6">
    {awardItems.map((item, idx) => (
      <StandardCard
        key={idx}
        item={item}
        idx={idx}
        {...props}
        images={awardImages}
      />
    ))}
  </div>
);

// ─── Leadership, Extracurricular, Social Impact (Dùng chung Layout mới) ────────

const StandardCard = ({ item, idx, isDarkMode, onImageOpen, images, showCategoryBadge = true }) => (
  <article className="h-full">
    <div
      className={`flex flex-col h-full rounded-xl overflow-hidden border shadow-md transition-all hover:-translate-y-1
      ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-100"}`}
    >
      {showCategoryBadge && <CategoryBadge label={item.category} />}

      <div
        className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer"
        onClick={() => onImageOpen(images, idx)}
      >
        <img
          src={item.img}
          alt={item.organization || item.title}
          className="max-h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Organization */}
        <div
          className={`flex items-start gap-2 mb-2 ${isDarkMode ? "text-green-400" : "text-green-800"
            }`}
        >
          <BuildingIcon />
          <span
            className={`text-base font-bold leading-tight text-left ${isDarkMode ? "text-white" : "text-gray-900"
              }`}
          >
            {item.organization || item.title}
          </span>
        </div>

        {/* Date */}
        <div
          className={`flex items-start gap-2 mb-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
            <CalendarIcon />
          </span>
          <span className="leading-snug text-left">{item.date}</span>
        </div>

        {/* Program | Role */}
        <div
          className={`flex items-start gap-2 mb-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <span className={isDarkMode ? "text-green-400" : "text-green-800"}>
            <PersonIcon />
          </span>
          <span className="leading-snug text-left">
            {item.program && <>{item.program} | </>}
            {item.role && <span className="font-semibold">{item.role}</span>}
          </span>
        </div>

        {/* Divider */}
        <div
          className={`border-t mb-4 ${isDarkMode ? "border-gray-600/30" : "border-gray-100"
            }`}
        />

        <div className="text-sm flex-1">
          {renderBoldBullets(item.desc, isDarkMode)}
        </div>

        <div onClick={() => onImageOpen(images, idx)}>
          <ViewImageFooter isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  </article>
);

// ─── Leadership Tab: grouped into "Professional" and "Leadership" sections ───
// Each leadershipItems entry has a `group` field ("Professional" | "Leadership").
// We keep the item's original index (its position in leadershipItems) so it
// still lines up correctly with leadershipImages for the image modal/navigation.
export const LeadershipTab = (props) => {
  const groupOrder = ["Professional", "Leadership"];

  const indexedItems = leadershipItems.map((item, idx) => ({ item, idx }));

  return (
    <div className="space-y-10">
      {groupOrder.map((groupName) => {
        const itemsInGroup = indexedItems.filter(
          ({ item }) => item.group === groupName
        );
        if (!itemsInGroup.length) return null;

        return (
          <div key={groupName}>
            <SectionHeader label={groupName} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {itemsInGroup.map(({ item, idx }) => (
                <StandardCard
                  key={idx}
                  item={item}
                  idx={idx}
                  {...props}
                  images={leadershipImages}
                  showCategoryBadge={false}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ExtracurricularTab = (props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {extracurricularItems.map((item, idx) => (
      <div
        key={idx}
      // className={idx === 0 ? "sm:col-span-2" : ""}
      >
        <StandardCard
          item={item}
          idx={idx}
          {...props}
          images={extracurricularImages}
        />
      </div>
    ))}
  </div>
);

export const SocialImpactsTab = (props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {socialImpactItems.map((item, idx) => (
      <div key={idx} className={idx === 0 ? "sm:col-span-2" : ""}>
        <StandardCard
          item={item}
          idx={idx}
          {...props}
          images={socialImpactImages}
        />
      </div>
    ))}
  </div>
);