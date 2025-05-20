import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
