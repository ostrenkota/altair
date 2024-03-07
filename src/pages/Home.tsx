import {Box, Input} from "@chakra-ui/react";
import {ClientsRecordsList} from "../components/ClientsRecordsList.tsx";
import {useState} from "react";

export const HomePage = () => {
    const [input, setInput] = useState('');
    return (
        <Box height="100%" overflow="auto">
            <Box height="fit-content" bgColor="#f3f3f3" px="30px" py="40px">
                <Box mb="30px">
                    <Input bgColor="lightgoldenrodyellow" placeholder="search" value={input}
                           onChange={e => setInput(e.target.value)}/>
                </Box>
                <Box>
                    <ClientsRecordsList filter={input}/>
                </Box>
            </Box>
        </Box>
    )
}
