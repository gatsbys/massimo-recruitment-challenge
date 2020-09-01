import { Starship } from "./starship.model";

export interface StarshipListContainer {
    count: number;
    next: string;
    previous: null;
    results: Starship[];
}