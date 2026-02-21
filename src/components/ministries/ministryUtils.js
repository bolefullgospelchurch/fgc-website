export const getLocalizedField = (field, lang) => {
  if (!field || typeof field !== "object") return "";
  return field?.[lang] || field?.en || "";
};

export const blocksToPlainText = (blocks) => {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .filter((block) => block?._type === "block" && Array.isArray(block.children))
    .map((block) =>
      block.children
        .filter((child) => typeof child?.text === "string")
        .map((child) => child.text)
        .join("")
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const truncateText = (text, maxLength = 160) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trim()}…`;
};

export const blocksToParagraphs = (blocks) => {
  if (!Array.isArray(blocks)) return [];

  return blocks
    .filter((block) => block?._type === "block" && Array.isArray(block.children))
    .map((block) =>
      block.children
        .filter((child) => typeof child?.text === "string")
        .map((child) => child.text)
        .join("")
    )
    .map((text) => text.trim())
    .filter(Boolean);
};
