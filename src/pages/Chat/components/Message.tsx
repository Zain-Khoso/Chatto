// Utils
import { FaUser } from "react-icons/fa6";

// Types
import { MessageProps } from "@/types/messages.types";

export default function Message({ type, photo, text }: MessageProps) {
    if (type === "RECIEVING")
        return (
            <div className="w-11/12 self-start flex flex-col items-start">
                <p className="bg-primary-200 text-light-100 p-2 rounded-md ml-10 rounded-bl-none">
                    {text}
                </p>
                {photo ? (
                    <img
                        src={photo}
                        alt="Profile of the user who sent the message"
                        className="w-8 aspect-square rounded-full"
                    />
                ) : (
                    <FaUser size={20} />
                )}
            </div>
        );

    return (
        <div className="w-11/12 self-end flex flex-col items-end">
            <p className="bg-primary-100 text-dark-400 p-2 rounded-md mr-10 rounded-br-none">
                {text}
            </p>
            {photo ? (
                <img
                    src={photo}
                    alt="Profile of the user who sent the message"
                    className="w-8 aspect-square rounded-full"
                />
            ) : (
                <FaUser size={20} />
            )}
        </div>
    );
}
