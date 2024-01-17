import { ReactNode } from "react";

type Card = {
    Id: number;
    Icon: ReactNode;
    Title: string;
    Desc: string;
};

export type CardsData = Card[];
