// Components
import User from "./User";

export default function ChatList() {
    return (
        <ul className="w-full flex flex-col gap-2 py-4">
            <li className="w-full rounded-md hover:bg-[rgba(0,0,0,0.1);]">
                <User />
            </li>
            <li className="w-full rounded-md hover:bg-[rgba(0,0,0,0.1);]">
                <User />
            </li>
            <li className="w-full rounded-md hover:bg-[rgba(0,0,0,0.1);]">
                <User />
            </li>
            <li className="w-full rounded-md hover:bg-[rgba(0,0,0,0.1);]">
                <User />
            </li>
        </ul>
    );
}
