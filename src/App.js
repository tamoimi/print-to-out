import { ChakraProvider } from "@chakra-ui/react";
import PrintToOut from "./components/PrintToOut";

function App() {
  return (
    <ChakraProvider>
      <PrintToOut />
    </ChakraProvider>
  );
}

export default App;
