import { ChakraProvider } from '@chakra-ui/react'
import {HomePage} from "./pages/Home.tsx";
import {theme} from "./global-styles.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <HomePage/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
