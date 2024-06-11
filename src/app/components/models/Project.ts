import { Tag } from "./Tag";

export interface projects{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tag: Tag[];
}