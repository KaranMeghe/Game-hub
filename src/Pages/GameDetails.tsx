/** @format */

import { GameAttributes, GameTrailerBox } from '@/components';
import { useFetchGameByIdQuery } from '@/Redux/api/gamesApi';

import { Center, Box, Text as ChakraText, Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const [expanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const { isLoading, data: gameData, isError } = useFetchGameByIdQuery(id);

  console.log(gameData);

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
    <>
      <Heading>{gameData.name}</Heading>
      <>
        {!expanded ? gameData.description_raw.slice(0, 450) : gameData.description_raw}
        <Button
          variant='solid'
          size='xs'
          marginLeft={2}
          colorPalette={'green'}
          onClick={() => setIsExpanded(!expanded)}>
          {!expanded ? 'Show More' : 'Show Less'}
        </Button>
      </>
      <GameAttributes gameData={gameData} />
      <GameTrailerBox gameId={id} />
    </>
  );
};

export default GameDetails;
