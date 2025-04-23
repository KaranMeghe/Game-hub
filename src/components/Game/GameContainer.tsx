/** @format */

import { SimpleGrid, Box, Text, Center } from '@chakra-ui/react';
import { DynamicHeading, GameCard, GameSkeleton } from '../index';
// import useFetchGames from '@/Hooks/useFetchGames';
import { useFetchGamesQuery } from '@/Redux/api/gamesApi';

const GameContainer = () => {
  // const { gameList, error, shouldShowSkelleton } = useFetchGames();
  const gamesApiResult = useFetchGamesQuery();
  const { data, isLoading, isError } = useFetchGamesQuery();

  console.log('GamesApiResponse:', gamesApiResult);

  const skeletons = Array.from({ length: 18 }, (_, i) => i + 1);

  if (isError) {
    return (
      <Center height='300px'>
        <Text color='red.400' fontWeight='bold'>
          Error: {isError}
        </Text>
      </Center>
    );
  }

  if (!isLoading && data?.results.length === 0) {
    return (
      <Center height='600px'>
        <Text fontSize='2xl'>Games are not available at this moment.</Text>
      </Center>
    );
  }

  return (
    <Box maxW='1200px' w='100%' mx='auto'>
      <DynamicHeading />
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap='40px' py='20px'>
        {isLoading
          ? skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)
          : data?.results.map((game) => <GameCard key={game.id} gameData={game} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameContainer;
