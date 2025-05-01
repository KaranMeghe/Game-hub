/** @format */

import { Box } from '@chakra-ui/react';
import { Navbar } from './components';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Box position='fixed' top={0} left={0} right={0} zIndex={1000}>
        <Navbar />
      </Box>

      <Box mt='100px' padding={5}>
        <Outlet />
      </Box>
    </Provider>
  );
};

export default App;
