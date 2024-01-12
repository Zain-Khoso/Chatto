// Utils
import { useLayoutEffect } from "react";

export default function (page) {
    useLayoutEffect(() => {
        document.title = `Chatto | ${page}`;
    }, []);
}
