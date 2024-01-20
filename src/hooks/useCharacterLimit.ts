export default function (str: string | null | undefined) {
    if (!str) return;

    if (str.length <= 10) return str;

    return str.slice(0, 10) + "...";
}
