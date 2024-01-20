// Utils
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowRotateLeft } from "react-icons/fa6";

// Types
import { schema, SearchField as Type } from "@/types/searchField.types";

export default function SearchField() {
    const [query, setQuery] = useState("");

    // Hook Form Setup
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<Type>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<Type> = async function (data) {
        if (data.query.length === 0)
            setError("query", { message: "Search must NOT be empty." });
        console.log(data.query);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex justify-between items-center gap-2 w-full p-4 my-4 rounded-lg shadow-[0px_0px_10px_4px_rgba(0,0,0,0.2);]">
            <label htmlFor="search-field" className="fixed -left-[200dvw]">
                Search for a Friend
            </label>
            {(errors.root || errors.query) && (
                <span className="absolute -top-1/2 left-0 text-[rgb(255,0,0)]">
                    {errors.root?.message || errors.query?.message}
                </span>
            )}
            <input
                type="text"
                id="search-field"
                placeholder="Search a friend"
                value={query}
                {...(register("query"),
                { onChange: (e) => setQuery(e.target.value) })}
                className="w-full bg-transparent font-semibold peer border-dark-100 pr-4 placeholder:font-medium focus:outline-none focus:border-r-2"
            />
            <FaArrowRotateLeft
                size={20}
                className="hidden fill-dark-100 peer-focus:block"
            />
        </form>
    );
}
