// Utils
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth } from "@/configs/firebase";
import useNavigateHome from "@/hooks/useNavigateHome";
import { collection } from "firebase/firestore";
import { firestore } from "@/configs/firebase";
import { FaArrowLeft } from "react-icons/fa";

// Components
import User from "./components/User";
import Message from "./components/Message";
import Writer from "./components/Writer";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";

export default function Chat() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<any>(undefined);

    const [user, userLoading, userError] = useAuthState(auth);

    useNavigateHome(userLoading ? false : !user || userError ? true : false);

    const [messages] = useCollection(collection(firestore, "messages"));

    useEffect(() => {
        const fetchMessages = async function () {
            setIsLoading(true);
            try {
                setData(
                    messages?.docs.map(function (doc: any) {
                        const item: any =
                            doc._document.data.value.mapValue.fields;
                        const filteredItem: any = {};

                        Object.keys(item).forEach((key: any) => {
                            filteredItem[key] = Object.values(item[key])[0];
                        });

                        filteredItem["id"] = doc.id;

                        return filteredItem;
                    })
                );
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMessages();
    }, [messages]);

    if (error) return <Error />;

    return (
        <div className="w-dvw max-h-dvh flex flex-col">
            <header className="w-full flex justify-start items-center gap-2 bg-light-200 py-2 px-4">
                <Link to="/home">
                    <FaArrowLeft size={30} />
                </Link>
                <User />
            </header>

            <main className="relative w-full max-h-full flex-1 flex flex-col-reverse gap-4 px-4 pb-16 overflow-y-auto">
                {isLoading ? (
                    <Spinner />
                ) : (
                    data?.map((item: any) => (
                        <Message
                            key={item.id}
                            type={
                                item.uid === user?.uid ? "SENDING" : "RECIEVING"
                            }
                            photo={item.photo}
                            text={item.text}
                        />
                    ))
                )}
                <Writer />
            </main>
        </div>
    );
}
