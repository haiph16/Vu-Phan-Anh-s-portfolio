import React from "react";
import { renderBoldBullets } from "../utils/portfolioHelpers";
import {
  academicItems,
  universityItems,
  researchItems,
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
    className="w-5 h-5"
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
  <div className="absolute md:top-1 md:left-1 top-0.5 left-0.5">
    <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
      {label}
    </span>
  </div>
);

const ViewImageFooter = ({ isDarkMode }) => (
  <div
    className={`mt-auto pt-4 border-t ${isDarkMode ? "border-gray-600/30" : "border-gray-100"}`}
  >
    <span
      className={`${isDarkMode ? "text-white hover:text-gray-300" : "text-green-800 hover:text-green-600"}
      font-medium text-sm sm:text-base transition flex items-center gap-2 group-hover:gap-3 cursor-pointer`}
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
      <h3
        className={`text-xl md:text-2xl font-bold mb-6 pb-3 border-b-2 ${
          isDarkMode
            ? "text-white border-gray-600"
            : "text-green-800 border-green-300"
        }`}
      >
        Academic Credentials
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {academicItems.map((item, idx) => (
          <a
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="card-animate group h-full"
          >
            <div
              className={`relative overflow-hidden rounded-xl h-full flex flex-col
              ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white/80 border-gray-100/50"}
              border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="relative overflow-hidden md:h-48 h-32">
                <div
                  className={`absolute inset-0 bg-linear-to-br py-2 md:py-4 ${item.color}
                  to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain my-2 md:my-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 p-4 sm:p-5 mb-12 md:mb-16">
                <div
                  className={`flex items-center gap-3 text-md md:text-lg
                  ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-3`}
                >
                  <time
                    dateTime={item.date}
                    className="flex items-center gap-1"
                  >
                    <CalendarIcon /> {item.date}
                  </time>
                </div>
                <h3
                  className={`text-[14px] md:text-[16px] text-left font-bold mb-3
                  ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"} transition`}
                >
                  {item.title}
                </h3>
                <h2 className="leading-relaxed whitespace-pre-line text-[14px] md:text-[16px] text-left">
                  {item.desc}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* University Admissions Section */}
    <div>
      <h3
        className={`text-xl md:text-2xl font-bold mb-6 pb-3 border-b-2 ${
          isDarkMode
            ? "text-white border-gray-600"
            : "text-green-800 border-green-300"
        }`}
      >
        University Admissions
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {universityItems.map((item, idx) => (
          <a
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="card-animate group h-full"
          >
            <div
              className={`relative overflow-hidden rounded-lg h-full flex flex-col
              ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white/80 border-gray-100/50"}
              border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="relative overflow-hidden h-24 sm:h-28 md:h-32">
                <div
                  className={`absolute inset-0 bg-linear-to-br py-2 ${item.color}
                  to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain my-1 md:my-2 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 p-2 sm:p-3">
                <h3
                  className={`text-xs sm:text-sm font-bold text-center ${
                    isDarkMode
                      ? "text-gray-100"
                      : "text-gray-900 hover:text-green-800"
                  } transition line-clamp-3`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// ─── Research Experiences Tab ─────────────────────────────────────────────────

export const ResearchTab = ({ isDarkMode }) => (
  <div className="space-y-6 sm:space-y-8">
    {researchItems.map((item, idx) => (
      <article
        key={idx}
        className={`card-animate group ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-green-200"}
          rounded-xl overflow-hidden hover:shadow-xl shadow-md transition-shadow duration-300`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image column */}
          <div className="md:w-1/3 flex flex-col justify-center items-center w-full overflow-hidden">
            <div className="pt-4 md:pt-8">
              <span className="flex items-center bg-green-800 text-white px-3 py-1 rounded-full text-sm md:text-lg font-medium">
                {item.category}
              </span>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 my-4 md:my-8 md:pl-8 md:pr-8 md:h-full object-contain"
            />
            <div className="md:pb-6 sm:pb-8 flex text-green-700 justify-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2
                  ${isDarkMode ? "text-white hover:text-gray-300" : "text-blue-800 hover:text-green-800"}
                  font-semibold text-sm md:text-base transition-all hover:gap-3`}
              >
                View Full Research <ExternalLinkIcon />
              </a>
            </div>
          </div>

          {/* Content column */}
          <div className="md:w-2/3 w-full md:p-6 p-4 pt-2">
            <h3
              className={`text-md md:text-xl font-bold
              ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}
              mb-3 whitespace-pre-line transition leading-tight`}
            >
              {item.title}
              {item.paperLink && (
                <>
                  {"\n"}
                  <a
                    href={item.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-800 hover:text-green-800
                      font-semibold text-sm md:text-base transition-all hover:gap-1"
                  >
                    <ExternalLinkIcon /> Link
                  </a>
                </>
              )}
            </h3>

            <p
              className={`text-md md:text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 font-medium`}
            >
              By {item.author}
            </p>

            <span className="flex items-center text-md md:text-lg font-bold gap-1">
              <PersonIcon /> {item.role}
            </span>

            <div className="mb-4 flex items-center gap-2">
              <span
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {renderBoldBullets(item.date)}
              </span>
            </div>

            {renderBoldBullets(item.desc)}
          </div>
        </div>
      </article>
    ))}
  </div>
);

// ─── Awards & Honors Tab ──────────────────────────────────────────────────────

export const AwardsTab = ({ isDarkMode, onImageOpen }) => (
  <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8">
    {awardItems.map((item, idx) => (
      <article key={idx} className="card-animate group h-full cursor-pointer">
        <button
          onClick={() => onImageOpen(awardImages, idx)}
          className="block h-full w-full text-left"
        >
          <div
            className={`relative overflow-hidden rounded-xl h-full flex flex-col
            ${isDarkMode ? "bg-gray-700/50 border-gray-600/50" : "bg-white/80 border-gray-100/50"}
            border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
              <div
                className={`absolute inset-0 bg-linear-to-br py-4 ${item.color}
                to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
              />
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
              />
              <CategoryBadge label={item.category} />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div
                className={`flex items-center gap-3 text-md md:text-lg
                ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-3`}
              >
                <time dateTime={item.date} className="flex items-center gap-1">
                  <CalendarIcon /> {item.date}
                </time>
              </div>
              <h3
                className={`text-md md:text-lg font-bold
                ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}
                mb-3 transition leading-tight`}
              >
                {item.title}
              </h3>
              {renderBoldBullets(item.desc, isDarkMode)}
              <ViewImageFooter isDarkMode={isDarkMode} />
            </div>
          </div>
        </button>
      </article>
    ))}
  </div>
);

// ─── Leadership Projects Tab ──────────────────────────────────────────────────

export const LeadershipTab = ({ isDarkMode, onImageOpen }) => (
  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
    {leadershipItems.map((item, idx) => (
      <article key={idx} className="card-animate group h-full cursor-pointer">
        <button
          onClick={() => onImageOpen(leadershipImages, idx)}
          className="block h-full w-full text-left"
        >
          <div
            className={`relative overflow-hidden rounded-xl h-full flex flex-col
            ${isDarkMode ? "bg-gray-700/50 border-gray-600/50" : "bg-white/80 border-gray-100/50"}
            border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
              <div
                className={`absolute inset-0 bg-linear-to-br py-4 ${item.color}
                to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
              />
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
              />
              <CategoryBadge label={item.category} />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div
                className={`flex items-center gap-2 text-md md:text-lg text-gray-500 mb-3`}
              >
                <time dateTime={item.date} className="flex items-center gap-1">
                  <CalendarIcon /> {item.date}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PersonIcon /> {item.author}
                </span>
              </div>
              <h3
                className={`text-md md:text-lg font-bold whitespace-pre-line
                ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}
                mb-3 transition leading-tight`}
              >
                {item.title}
              </h3>
              {renderBoldBullets(item.desc, isDarkMode)}
              <ViewImageFooter isDarkMode={isDarkMode} />
            </div>
          </div>
        </button>
      </article>
    ))}
  </div>
);

// ─── Extracurricular Experiences Tab ─────────────────────────────────────────

export const ExtracurricularTab = ({ isDarkMode, onImageOpen }) => (
  <div className="grid sm:grid-cols-2 sm:[&>*:nth-child(1)]:col-span-2 grid-cols-1 gap-6 sm:gap-8">
    {extracurricularItems.map((item, idx) => (
      <article key={idx} className="card-animate group h-full cursor-pointer">
        <button
          onClick={() => onImageOpen(extracurricularImages, idx)}
          className="block h-full w-full text-left"
        >
          <div
            className={`relative overflow-hidden rounded-xl h-full flex flex-col
            ${isDarkMode ? "bg-gray-700/50 border-gray-600/50" : "bg-white/80 border-gray-100/50"}
            border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
              <div
                className={`absolute inset-0 bg-linear-to-br py-4 ${item.color}
                to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
              />
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
              />
              <CategoryBadge label={item.category} />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div
                className={`flex items-center gap-3 text-md md:text-lg
                ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-3`}
              >
                <time dateTime={item.date} className="flex items-center gap-1">
                  <CalendarIcon /> {item.date}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PersonIcon /> {item.author}
                </span>
              </div>
              <h3
                className={`text-lg font-bold whitespace-pre-line
                ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}
                mb-3 transition leading-tight`}
              >
                {item.title}
              </h3>
              {renderBoldBullets(item.desc, isDarkMode)}
              <ViewImageFooter isDarkMode={isDarkMode} />
            </div>
          </div>
        </button>
      </article>
    ))}
  </div>
);

// ─── Social Impacts Tab ───────────────────────────────────────────────────────

export const SocialImpactsTab = ({ isDarkMode, onImageOpen }) => (
  <div className="grid sm:grid-cols-2 sm:[&>*:nth-child(1)]:col-span-2 grid-cols-1 gap-4 sm:gap-6">
    {socialImpactItems.map((item, idx) => (
      <article key={idx} className="card-animate group h-full cursor-pointer">
        <button
          onClick={() => onImageOpen(socialImpactImages, idx)}
          className="block h-full w-full text-left"
        >
          <div
            className={`relative overflow-hidden rounded-xl h-full flex flex-col
            ${isDarkMode ? "bg-gray-700/50 border-gray-600/50" : "bg-white/80 border-gray-100/50"}
            border shadow-md transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="relative overflow-hidden h-40 md:h-48 cursor-pointer">
              <div
                className={`absolute inset-0 bg-linear-to-br py-4 ${item.color}
                to-transparent opacity-50 group-hover:opacity-70 transition-opacity`}
              />
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain my-4 group-hover:scale-110 transition-transform duration-500"
              />
              <CategoryBadge label={item.category} />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div
                className={`flex items-center gap-3 text-md md:text-lg
                ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-3`}
              >
                <time dateTime={item.date} className="flex items-center gap-1">
                  <CalendarIcon /> {item.date}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PersonIcon /> {item.author}
                </span>
              </div>
              <h3
                className={`text-md md:text-lg whitespace-pre-line font-bold
                ${isDarkMode ? "text-gray-100" : "text-gray-900 hover:text-green-800"}
                mb-3 transition leading-tight`}
              >
                {item.title}
              </h3>
              {renderBoldBullets(item.desc, isDarkMode)}
              <ViewImageFooter isDarkMode={isDarkMode} />
            </div>
          </div>
        </button>
      </article>
    ))}
  </div>
);
