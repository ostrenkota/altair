import {Box, Button} from "@chakra-ui/react";
import {ClientsRecordsList} from "../components/ClientsRecordsList.tsx";

export const HomePage = () => {
    return (
        <Box bgColor="#f3f3f3" height="100%" px="30px">
            <Box mb="30px">
                Search
                <Button>123</Button>
            </Box>
            <Box>
                <ClientsRecordsList/>
            </Box>
        </Box>
    )
}
