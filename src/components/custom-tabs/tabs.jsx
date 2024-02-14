import React, { useState } from "react";

const Tab = ({ label, content, onClick, isActive }) => (
    <div
        className={`tab-item ${isActive ? "active" : ""}`}
        onClick={onClick}
    >
        <span>{label}</span>
    </div>
);

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setCurrentTabIndex(index);
        onChange(index);
    };

    return (
        <div className={"wrapper"}>
            <div className={"heading"}>
                {tabsContent.map((tabItem, index) => (
                    <Tab
                        key={tabItem.label}
                        label={tabItem.label}
                        content={tabItem.content}
                        onClick={() => handleTabClick(index)}
                        isActive={currentTabIndex === index}
                    />
                ))}
            </div>
            <div className={"content"}>
                {tabsContent[currentTabIndex]?.content}
            </div>
        </div>
    );
};

export default Tabs;
