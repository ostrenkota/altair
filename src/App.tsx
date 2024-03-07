import { ChakraProvider } from '@chakra-ui/react'
import {HomePage} from "./pages/Home.tsx";
import {theme} from "./global-styles.ts";
function App() {

    return (
        <ChakraProvider theme={theme}>
            <HomePage/>
        </ChakraProvider>
    )
}

export default App
