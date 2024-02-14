import Tabs from "./tabs";
import './tabs.css';

const RandomComponent = () => <div>Some Random Component</div>;

const TabTest = () => {
    const tabs = [
        { label: "Tab 1", content: <div>This Is Content For Tab 1</div> },
        { label: "Tab 2", content: <div>This Is Content For Tab 2</div> },
        { label: "Tab 3", content: <RandomComponent /> },
    ];

    const handleChange = (currentTabIndex) => {
        console.log("currentTabIndex", currentTabIndex);
    };

    return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
