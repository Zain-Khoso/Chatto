// Utils
import { useLayoutEffect } from "react";

export default function (page: string) {
    useLayoutEffect(() => {
        document.title = `Chatto | ${page}`;
    }, []);
}
