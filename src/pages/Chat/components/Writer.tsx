// Utils
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Writer() {
    return (
        <form className="absolute left-0 bottom-0 flex justify-center items-center gap-4 w-dvw max-h-16 bg-primary-100 p-2 rounded-t-lg">
            <div className="flex-1 flex justify-center items-center gap-2 h-full bg-light-200 p-2 rounded-lg">
                <label htmlFor="messageInput" className="fixed -left-full">
                    Type Your Message here
                </label>
                <input
                    type="text"
                    id="messageInput"
                    placeholder="Type Message..."
                    className="flex-1 bg-transparent font-medium text-dark-400 focus:outline-none placeholder:font-medium placeholder:text-dark-100"
                />
                <label htmlFor="send">
                    <FaRegArrowAltCircleRight
                        size={20}
                        className="fill-dark-400"
                        role="button"
                        type="submit"
                    />
                </label>
                <input
                    type="submit"
                    value="Send"
                    id="send"
                    className="fixed -left-full"
                />
            </div>
        </form>
    );
}
