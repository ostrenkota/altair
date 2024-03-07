import {Center, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import {ClientRecordCard} from "./ClientRecordCard.tsx";
import {useClientsRecords} from "../hooks/useClientsRecords.ts";
import {FC, useMemo} from "react";
import {ClientRecord} from "../models/client-record.ts";

export const ClientsRecordsList: FC<{ filter: string }> = ({filter}) => {
    const {data, error} = useClientsRecords();

    const filtered = useMemo(() => {
        return filter ? data?.filter(d => checkMatchRecord(d, filter.toLowerCase())) : data;
    }, [filter, data]);

    if (error && !data) {
        return <Text color="red">Error: {error.message}</Text>;
    }

    if (!data) {
        return <Center height="400px">
            <Spinner/>
        </Center>
    }

    return (
        <SimpleGrid minChildWidth='240px' spacing='30px'>
            {filtered?.map(record => <ClientRecordCard key={record.id} record={record}/>)}
        </SimpleGrid>
    )
}


function checkMatchRecord(record: ClientRecord, filter: string) {
    return record.firstName.toLowerCase().includes(filter)
        || record.lastName.toLowerCase().includes(filter)
        || record.make.toLowerCase().includes(filter)
        || record.model.toLowerCase().includes(filter);
}
