// Utils
import {
    FaUserShield,
    FaDesktop,
    FaCirclePlay,
    FaPeopleGroup,
    FaShare,
    FaPhone,
} from "react-icons/fa6";

export default function CardsWrapper() {
    return (
        <section className="w-full grid grid-cols-2 grid-rows-3 gap-2 p-4 max-w-5xl mx-auto tablet:grid-cols-3 tablet:grid-rows-2 tablet:gap-8">
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaUserShield className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    Secure
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Chatto ensures your conversations stay private with
                    end-to-end encryption.
                </p>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaDesktop className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    User-Friendly Design
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Enjoy a seamless experience with our intuitive and
                    user-friendly interface.
                </p>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaCirclePlay className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    Multimedia Sharing
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Share moments effortlessly with photos, videos, and audio
                    messages.
                </p>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaPeopleGroup className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    Group Chats
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Connect with friends and family in lively group
                    conversations.
                </p>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaShare className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    Smart Replies
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Save time with AI-powered suggestions for quick and smart
                    responses.
                </p>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-b from-primary-200 to-primary-300 p-4 rounded-lg">
                <div className="w-6 aspect-square">
                    <FaPhone className="fill-light-200 w-full h-full" />
                </div>
                <h2 className="text-lg text-light-200 font-medium leading-snug tracking-wider">
                    Voice and Video Calls
                </h2>
                <p className="text-sm text-primary-100 leading-tight">
                    Stay connected face-to-face with high-quality voice and
                    video calls.
                </p>
            </div>
        </section>
    );
}
