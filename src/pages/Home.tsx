import {Box, Input} from "@chakra-ui/react";
import {ClientsRecordsList} from "../components/ClientsRecordsList.tsx";
import {useState} from "react";

export const HomePage = () => {
    const [input, setInput] = useState('');
    return (
        <Box bgColor="#f3f3f3" height="100%" px="30px" pt="40px">
            <Box mb="30px">
                <Input bgColor="lightgoldenrodyellow" placeholder="search" value={input} onChange={e => setInput(e.target.value)}/>
            </Box>
            <Box>
                <ClientsRecordsList filter={input}/>
            </Box>
        </Box>
    )
}
