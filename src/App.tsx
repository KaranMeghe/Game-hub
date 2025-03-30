/** @format */

import { Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './components';

const App = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr 4fr' }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area='nav' bg='coral'>
        <Navbar />
      </GridItem>

      <GridItem area='aside' bg='green' display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>

      <GridItem area='main' bg='gold'>
        Main
      </GridItem>
    </Grid>
  );
};
export default App;
