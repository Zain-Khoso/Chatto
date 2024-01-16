// Utils
import useDocTitle from "@/hooks/useDocTitle";

// Components
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import CardsWrapper from "./components/CardsWrapper";

export default function Home() {
    useDocTitle("Home");

    return (
        <>
            <TopBar />

            <Hero />

            <CardsWrapper />
        </>
    );
}
