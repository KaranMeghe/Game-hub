/** @format */

import useFetchGames from '@/Hooks/useFetchGames';
import { SimpleGrid } from '@chakra-ui/react';
import { GameCard } from '../index';

/** @format */
const GameContainer = () => {
  const { isLoading, gameList, error } = useFetchGames();
  console.log('GameList:', gameList);

  if (isLoading) return <p>Loading......</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} gap='40px' padding='20px'>
        {gameList?.results.map((game) => {
          console.log(game);
          return <GameCard key={game.id} gameData={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameContainer;
