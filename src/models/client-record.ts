import {Service} from "./service.ts";

export interface ClientRecord {
    id: string,
    firstName: string,
    lastName: string,
    year: number,
    make: string,
    model: string,
    services: Service[]
}
