/** @format */

import { SimpleGrid, Box, Text, Center } from '@chakra-ui/react';
import { DynamicHeading, GameCard, GameSkeleton } from '../index';

import { useFetchGamesQuery } from '@/Redux/api/gamesApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const GameContainer = () => {
  const { platformId, genreId, searchInput } = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isError, isFetching } = useFetchGamesQuery({
    platform: platformId,
    genres: genreId,
    search: searchInput,
  });

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
        {isLoading || isFetching
          ? skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)
          : data?.results.map((game) => <GameCard key={game.id} gameData={game} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameContainer;
