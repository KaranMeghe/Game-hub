/** @format */

import { SimpleGrid, Text as ChakraText } from '@chakra-ui/react';
import DefinationItem from '../DefinationItem/DefinationItem';
import CriticScore from './CriticScore';
import { GAME_DETAILS } from '@/Redux/models/games.model';

interface Props {
  gameData: GAME_DETAILS;
}
const GameAttributes = ({ gameData }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinationItem term='Platforms'>
        {gameData.parent_platforms?.map(({ platform }) => (
          <ChakraText key={platform.id}>{platform.name}</ChakraText>
        ))}
      </DefinationItem>

      <DefinationItem term='Metascore'>{<CriticScore criticScore={gameData.metacritic} />}</DefinationItem>

      <DefinationItem term='Genres'>
        {gameData.genres.map((genre) => {
          return <ChakraText key={genre.id}>{genre.name}</ChakraText>;
        })}
      </DefinationItem>

      <DefinationItem term='Publisher'>
        {gameData.publishers.map((publisher) => {
          return <ChakraText key={publisher.id}>{publisher.name}</ChakraText>;
        })}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
