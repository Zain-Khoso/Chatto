// Utils
import { FaMessage } from "react-icons/fa6";

// Components
import User from "./User";
import SearchField from "./SearchField";
import ChatList from "./ChatList";

export default function SideNav() {
    return (
        <>
            <header className="w-full flex justify-start items-center p-2 border-b-2 border-dark-200">
                <User />
            </header>

            <main className="w-full p-4 flex flex-col gap-4">
                <SearchField />

                <section className="w-full">
                    <div className="flex justify-start items-center gap-2 w-full">
                        <FaMessage size={20} className="fill-dark-300" />
                        <h2 className="text-3xl text-dark-400 font-semibold">
                            Chats
                        </h2>
                    </div>
                    <ChatList />
                </section>
            </main>
        </>
    );
}
