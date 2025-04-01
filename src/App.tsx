/** @format */

import { Grid, GridItem } from '@chakra-ui/react';
import { GameContainer, Navbar } from './components';
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

        <GridItem area='aside' display={{ base: 'none', lg: 'block' }} mt='80px'>
          Aside
        </GridItem>

        <GridItem area='main' mt='80px'>
          <GameContainer />
        </GridItem>
      </Grid>
    </Provider>
  );
};
export default App;
