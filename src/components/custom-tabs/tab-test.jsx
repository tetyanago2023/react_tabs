import Tabs from "./tabs";

const RandomComponent = () => {
    return <div>Some Random Component</div>
}

const TabTest = () => {
    const Tabs = [
        {
            label: "Tab 1",
            content: <div>This Is Content For Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This Is Content For Tab 2</div>
        },
        {
            label: "Tab 3",
            content: <div>This Is Content For Tab 3</div>
        }
    ];

    return (
        <Tabs tabsContent={}/>
    )
}

export default TabTest;