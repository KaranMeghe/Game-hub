/** @format */

import useFetchGames from '@/Hooks/useFetchGames';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { GameCard, GameSkeleton } from '../index';

/** @format */
const GameContainer = () => {
  const { isLoading, gameList, error } = useFetchGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  if (error) return <p>Error:{error}</p>;

  return (
    <Box width='100%'>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, '2xl': 4 }} gap='40px' paddingY='20px'>
        {isLoading
          ? skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)
          : gameList?.results.map((game) => <GameCard key={game.id} gameData={game} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameContainer;
