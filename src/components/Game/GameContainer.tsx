/** @format */

import useFetchGames from '@/Hooks/useFetchGames';
import { SimpleGrid } from '@chakra-ui/react';
import { GameCard, GameSkeleton } from '../index';

/** @format */
const GameContainer = () => {
  const { isLoading, gameList, error } = useFetchGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log('GameList:', gameList);

  if (error) return <p>Error:{error}</p>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} gap='40px' padding='20px'>
        {isLoading && skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {gameList?.results.map((game) => {
          return <GameCard key={game.id} gameData={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameContainer;
