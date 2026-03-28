/**
 * Renders text with bold bullet-point lines.
 * Lines starting with "•" or matching "WORD:" pattern are bolded.
 */
export const renderBoldBullets = (text, isDarkMode = false) => {
  const lines = text.split("\n").filter((line) => line.trim());
  return (
    <div className="space-y-1">
      {lines.map((line, idx) => {
        const isBoldLine =
          line.trim().startsWith("•") || /^[A-Z].*:/.test(line.trim());
        return (
          <p
            key={idx}
            className={`leading-tight text-sm md:text-lg text-left
              ${isDarkMode ? "text-gray-300" : "text-white-700"}
              ${isBoldLine ? "font-bold" : "font-normal"}`}
          >
            {line}
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
    "https://drive.google.com/file/d/1S9QtJ3AMM9iGjLa8rMzr_2_8Y0Ca_InP/view?usp=drive_link",
  );
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1S9QtJ3AMM9iGjLa8rMzr_2_8Y0Ca_InP";
  link.download = "Vu-Phan-Anh-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
