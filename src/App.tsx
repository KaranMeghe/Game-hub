/** @format */

import { Grid, GridItem } from '@chakra-ui/react';
import { GameContainer, GenresContainer, Navbar, PlatformSelector } from './components';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Grid
        padding='10px'
        templateColumns={{ base: '1fr', md: '1fr 4fr' }}
        templateAreas={{
          base: `"nav" "main main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area='nav'>
          <Navbar />
        </GridItem>

        <GridItem area='aside' display={{ base: 'none', md: 'block' }} mt='80px'>
          <GenresContainer />
        </GridItem>

        <GridItem area='main' mt='80px' padding='20px' display='flex' flexDirection='column'>
          <PlatformSelector />
          <GameContainer />
        </GridItem>
      </Grid>
    </Provider>
  );
};
export default App;
