import experienceData from "@/data/experience.json";

// Fetching logic will be added here

export function parseExperienceKeys() {
    return Object.keys(experienceData[0]);
}

export function parseExperienceData(activeTab) {
    const filteredData = experienceData.map((item) => item[activeTab]);
    return filteredData;
}
