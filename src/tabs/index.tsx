import EmptyTab from "./EmptyTab";
import Events from "./Events/Events";

interface ITabsSwitcher {
    activeTab: string;
}

export default function TabsSwitcher({ activeTab }: ITabsSwitcher) {
    switch (activeTab) {
        case "events":
            return <Events />;
        case "reviews":
        case "waiting":
        default:
            return <EmptyTab />;
    }
}