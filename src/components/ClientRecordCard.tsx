import {Box, Card, CardBody, CardHeader, Divider, Flex, Heading, Text} from "@chakra-ui/react";
import {ComponentProps, FC} from "react";
import {ClientRecord} from "../models/client-record.ts";
import {Service} from "../models/service.ts";

export const ClientRecordCard: FC<{ record: ClientRecord }> = ({record}) => {
    return <Card>
        <CardHeader>
            <Heading size='md' mb="6px">{record.firstName + ' ' + record.lastName}</Heading>
            <Heading size='sm'>{record.make + ' ' + record.model + ', ' + record.year}</Heading>
        </CardHeader>
        <CardBody pt="0">
            {record.services.map((service, index) =>
                <>
                    <ServiceRecord mb="4px" service={service}/>
                    {record.services.length - 1 > index && <Divider mb="4px"/>}
                </>
            )}
        </CardBody>
    </Card>
}

const ServiceRecord: FC<{ service: Service } & ComponentProps<typeof Box>> = ({service, ...rest}) => {
    return <Box {...rest}>
        <Text>{service.description}</Text>
        <Flex>
            <Box flex="1">
                💳&nbsp; ${service.costUsd}
            </Box>
            <Box flex="1">
                🗓&nbsp;{service.date.toLocaleDateString()}
            </Box>
        </Flex>
    </Box>
}
