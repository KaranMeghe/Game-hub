/** @format */

import { Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './components';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Grid
        padding='10px'
        templateColumns={{ base: '1fr', lg: '1fr 4fr' }}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area='nav'>
          <Navbar />
        </GridItem>

        <GridItem area='aside' display={{ base: 'none', lg: 'block' }}>
          Aside
        </GridItem>

        <GridItem area='main'>Main</GridItem>
      </Grid>
    </Provider>
  );
};
export default App;
