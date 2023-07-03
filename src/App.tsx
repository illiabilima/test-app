import "./App.css";
import { useState } from "react";
import Tab from "./components/Tab/Tab";
import TabsSwitcher from "./tabs";
import Filter from "./components/Filter/Filter";

function App() {
    const [activeTab, setActiveTab] = useState<string>("events");

    function changeTab(key: string) {
        setActiveTab(key);
    }

    return (
        <div className="app">
            <div className="flex">
                <Tab
                    name="reviews"
                    title="Резюме та відгуки"
                    isActive={activeTab === "reviews"}
                    setIsActive={changeTab}
                />
                <Tab
                    name="events"
                    title="Події"
                    isActive={activeTab === "events"}
                    setIsActive={changeTab}
                    extra={<Filter isActive={activeTab === "events"} />}
                />
                <Tab
                    name="waiting"
                    title="Ще проходить"
                    isActive={activeTab === "waiting"}
                    setIsActive={changeTab}
                />
                <div className="border-b border-gray-200 flex-grow" />
            </div>
            <TabsSwitcher activeTab={activeTab} />
        </div>
    );
}

export default App;
