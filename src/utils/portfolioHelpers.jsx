/**
 * Renders text with bold bullet-point lines.
 * Lines starting with "•" or matching "WORD:" pattern are bolded.
 */
export const renderBoldBullets = (text, isDarkMode = false) => {
  const lines = text.split("\n").filter((line) => line.trim());

  return (
    <div className="space-y-3">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        const isHeading = trimmed.startsWith("•");
        const isSubBullet = trimmed.startsWith("-");

        if (isHeading) {
          const headingText = trimmed.replace(/^•\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 mt-3 first:mt-0">
              <span
                className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-800"
                  }`}
              />
              <p
                className={`font-bold text-sm md:text-base leading-tight text-left ${isDarkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {headingText}
              </p>
            </div>
          );
        }

        if (isSubBullet) {
          const bulletText = trimmed.replace(/^-\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-4">
              <span
                className={`mt-0.5 flex-shrink-0 ${isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                -
              </span>
              <p
                className={`text-sm leading-relaxed text-left font-normal ${isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {bulletText}
              </p>
            </div>
          );
        }

        // Plain paragraph text under a heading
        return (
          <p
            key={idx}
            className={`pl-4 text-sm leading-relaxed text-left font-normal ${isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};

/**
 * Opens a Google Drive link for preview and triggers a download.
 */
export const handleDownloadCV = () => {
  window.open(
    "https://drive.google.com/file/d/1PAmA2x9s8XyGeJBZlF0RdIQwWiIKQzMA/view?usp=drive_link",
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
