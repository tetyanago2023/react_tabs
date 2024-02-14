import {useState} from "react";

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return(
        <div className={"wrapper"}>
            <div className={"heading"}>
                <h1>Custom Tabs</h1>
                {
                     tabsContent.map(tabItem =>
                         <div key={tabItem.label}>
                            <span className={"label"}>{tabItem.label}</span>
                        </div>)
                }
            </div>
            <div className={"content"}>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>

        </div>
    )
}

export default Tabs;