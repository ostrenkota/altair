import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {ClientRecord} from "../models/client-record.ts";

let mockClientRecords: ClientRecord[] = [
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
        firstName: 'Bob',
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
        lastName: 'White',
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

export function useClientsRecords() {
    return useQuery({
        queryKey: ["clientRecords"], queryFn: async () => {
            await new Promise((resolve) => { //TODO replace with api call
                setTimeout(resolve, 1000);
            })

            return mockClientRecords;
        }
    })
}


export function useRemoveClientRecord() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (recordId: string) => {
            await new Promise(resolve => setTimeout(resolve, 1000))

            mockClientRecords = mockClientRecords.filter(record => record.id !== recordId); // TODO replace with API call

            await queryClient.invalidateQueries({ queryKey: ['clientRecords'] })
        },
    })
}
