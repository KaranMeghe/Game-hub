/** @format */

import { GameAttributes, GameTrailerBox, Screenshots } from '@/components';
import { useFetchGameByIdQuery } from '@/Redux/api/gamesApi';

import { Center, Box, Text as ChakraText, Heading, Button, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const [expanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const { isLoading, data: gameData, isError } = useFetchGameByIdQuery(id);

  if (isLoading)
    return (
      <Center height='100vh'>
        <Box textAlign='center'>
          <ChakraText fontSize='lg'>Loading......</ChakraText>
        </Box>
      </Center>
    );

  if (isError || !gameData)
    return (
      <Center height='100vh'>
        <Box textAlign='center'>
          <ChakraText fontSize='lg'>Game Details not available</ChakraText>
        </Box>
      </Center>
    );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading>{gameData.name}</Heading>

        {!expanded ? gameData.description_raw.slice(0, 450) : gameData.description_raw}
        <Button
          variant='solid'
          size='xs'
          marginLeft={2}
          colorPalette={'green'}
          onClick={() => setIsExpanded(!expanded)}>
          {!expanded ? 'Show More' : 'Show Less'}
        </Button>
        <GameAttributes gameData={gameData} />
      </GridItem>

      <GridItem>
        <GameTrailerBox gameId={gameData.id} />
        <Screenshots gameId={gameData.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
