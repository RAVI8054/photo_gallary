import React, { useState } from "react";

const AboutTabs = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "About Me" },
        { id: "experience", label: "Experiences" },
        { id: "recommended", label: "Recommended" },
    ];

    const content = {
        about: `Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.`,
        experience: `I was born and raised in Albany, NY. I’ve been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella.`,
        recommended: `Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a wonderful journey so far!`,
    };

    return (
        <div className="bg-[#171717] rounded-2xl p-6 w-full max-w-[650px] shadow-inner shadow-black/25">
            <div className="flex space-x-3 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                ? "bg-[#222] text-white"
                                : "bg-[#1a1a1a] text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-300">{content[activeTab]}</p>
        </div>
    );
};

export default AboutTabs;
