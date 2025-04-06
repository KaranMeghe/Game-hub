/** @format */

import { SimpleGrid, Box, Text, Center } from '@chakra-ui/react';
import { GameCard, GameSkeleton } from '../index';
import useFetchGames from '@/Hooks/useFetchGames';

const GameContainer = () => {
  const { gameList, isLoading, error, isFiltering } = useFetchGames();
  const skeletons = Array.from({ length: 18 }, (_, i) => i + 1);

  if (error)
    return (
      <Center height='300px'>
        <Text color='red.400' fontWeight='bold'>
          Error: {error}
        </Text>
      </Center>
    );

  if (!gameList?.results && !isLoading && !isFiltering)
    return (
      <Center height='300px'>
        <Text fontSize='lg'>Games are not available at this moment.</Text>
      </Center>
    );

  const noGames = !isLoading && !isFiltering && gameList?.results?.length === 0;

  return (
    <Box width='100%'>
      {noGames ? (
        <Center height='300px'>
          <Text fontSize='lg' fontWeight='semibold' color='gray.500'>
            No games found for this platform.
          </Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, '2xl': 4 }} gap='40px' paddingY='20px'>
          {isLoading || isFiltering
            ? skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)
            : gameList?.results.map((game) => <GameCard key={game.id} gameData={game} />)}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default GameContainer;
