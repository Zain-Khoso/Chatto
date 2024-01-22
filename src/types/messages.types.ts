export type MessageProps = {
    type: "SENDING" | "RECIEVING";
    photo: string | null | undefined;
    text: string;
};
