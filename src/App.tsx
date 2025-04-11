/** @format */

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { GameContainer, GenresContainer, Navbar, PlatformSelector } from './components';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Box position='fixed' top={0} left={0} right={0} zIndex={1000}>
        <Navbar />
      </Box>

      <Grid
        padding='10px'
        templateColumns={{ base: '1fr', md: '1fr 4fr' }}
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        mt='100px'
        gap={6}>
        <GridItem area='aside' display={{ base: 'none', md: 'block' }}>
          <GenresContainer />
        </GridItem>

        <GridItem
          area='main'
          display='flex'
          flexDirection='column'
          gap={4}
          alignItems='center'
          justifyContent='center'
          px={{ base: 4, sm: 6 }}>
          <Box w='100%' maxW='1200px' px={{ base: 4, sm: 6 }}>
            <PlatformSelector />
            <GameContainer />
          </Box>
        </GridItem>
      </Grid>
    </Provider>
  );
};

export default App;
