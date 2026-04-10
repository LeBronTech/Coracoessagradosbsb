export type SaintOfTheDayData = {
    day: number;
    month: string;
    saints: {
        name: string;
        imageUrl: string;
        imageObjectPosition?: string;
        story: string;
        isMartyr?: boolean;
    }[];
};
