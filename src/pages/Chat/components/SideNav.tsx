// Components
import User from "./User";
import SearchField from "./SearchField";

export default function SideNav() {
    return (
        <>
            <header className="w-full flex justify-start items-center p-2 border-b-2 border-dark-200">
                <User />
            </header>

            <main className="w-full p-4 flex flex-col gap-4">
                <SearchField />
            </main>
        </>
    );
}
