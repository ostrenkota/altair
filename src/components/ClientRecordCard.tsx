import {Card, CardBody, CardHeader, Heading} from "@chakra-ui/react";
import {FC} from "react";
import {ClientRecord} from "../models/client-record.ts";

export const ClientRecordCard: FC<{record: ClientRecord}> = ({record}) => {
    return <Card>
        <CardHeader>
            <Heading size='md' mb="6px">{record.firstName + ' ' + record.lastName}</Heading>
            <Heading size='sm'>{record.make + ' ' + record.model + ', ' + record.year}</Heading>
        </CardHeader>
        <CardBody>
            {JSON.stringify(record.services)}
        </CardBody>
    </Card>
}
