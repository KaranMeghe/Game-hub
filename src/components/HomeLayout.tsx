/** @format */
import { Box, Grid, GridItem } from '@chakra-ui/react';
import GameContainer from './Game/GameContainer';
import GenresContainer from './Genres/GenresContainer';
import PlatformSelector from './Platforms/PlatformSelector';

const HomeLayout = () => {
  return (
    <Grid
      padding='10px'
      templateColumns={{ base: '1fr', md: '1fr 4fr' }}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
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
  );
};

export default HomeLayout;
