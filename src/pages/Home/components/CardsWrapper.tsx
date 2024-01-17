// Utils
import { useRef } from "react";
import {
    FaUserShield,
    FaDesktop,
    FaCirclePlay,
    FaPeopleGroup,
    FaShare,
    FaPhone,
} from "react-icons/fa6";

// Types
import { CardsData } from "@/types/cardsData.types";

export default function CardsWrapper() {
    const data = useRef<CardsData>([
        {
            Id: 1,
            Icon: <FaUserShield className="fill-light-200 w-full h-full" />,
            Title: "Secure",
            Desc: "Chatto ensures your conversations stay private with end-to-end encryption.",
        },
        {
            Id: 2,
            Icon: <FaDesktop className="fill-light-200 w-full h-full" />,
            Title: "User-Friendly Design",
            Desc: "Enjoy a seamless experience with our intuitive and user-friendly interface.",
        },
        {
            Id: 3,
            Icon: <FaCirclePlay className="fill-light-200 w-full h-full" />,
            Title: "Multimedia Sharing",
            Desc: "Share moments effortlessly with photos, videos, and audio messages.",
        },
        {
            Id: 4,
            Icon: <FaPeopleGroup className="fill-light-200 w-full h-full" />,
            Title: "Group Chats",
            Desc: "Connect with friends and family in lively group conversations.",
        },
        {
            Id: 5,
            Icon: <FaShare className="fill-light-200 w-full h-full" />,
            Title: "Smart Replies",
            Desc: "Save time with AI-powered suggestions for quick and smart responses.",
        },
        {
            Id: 6,
            Icon: <FaPhone className="fill-light-200 w-full h-full" />,
            Title: "Voice and Video Calls",
            Desc: "Stay connected face-to-face with high-quality voice and video calls.",
        },
    ]);

    return (
        <section className="w-full grid grid-cols-2 grid-rows-3 gap-2 p-4 max-w-5xl mx-auto tablet:grid-cols-3 tablet:grid-rows-2 tablet:gap-8">
            {data.current.map((item) => (
                <div
                    key={item.Id}
                    className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                    <div className="w-6 aspect-square">{item.Icon}</div>
                    <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                        {item.Title}
                    </h2>
                    <p className="text-sm text-primary-100 leading-tight">
                        {item.Desc}
                    </p>
                </div>
            ))}
        </section>
    );
}
