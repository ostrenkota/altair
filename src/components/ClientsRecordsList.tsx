import {ClientRecord} from "../models/client-record.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {ClientRecordCard} from "./ClientRecordCard.tsx";

const mockClientRecords: ClientRecord[] = [
    {
        id: '1',
        firstName: 'Alice',
        lastName: 'Black',
        year: 2021,
        make: 'Ford',
        model: 'Focus',
        services: [
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description description description description description'
            },
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description descriptiondescriptiondescriptiondescriptiondescription'
            }
        ]
    },
    {
        id: '2',
        firstName: 'Alice',
        lastName: 'Black',
        year: 2021,
        make: 'Ford',
        model: 'Focus',
        services: [
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description'
            },
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description'
            }
        ]
    },
    {
        id: '3',
        firstName: 'Alice',
        lastName: 'Black',
        year: 2021,
        make: 'Ford',
        model: 'Focus',
        services: [
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description'
            },
            {
                costUsd: 200,
                date: new Date(),
                code: 35,
                description: 'description'
            }
        ]
    },
];
export const ClientsRecordsList = () => {
    return (
        <SimpleGrid minChildWidth='240px' spacing='30px'>
            {mockClientRecords.map(record =>  <ClientRecordCard key={record.id} record={record}/>)}
        </SimpleGrid>
    )
}
