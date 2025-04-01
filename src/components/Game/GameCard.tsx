/** @format */

import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';

interface GAME_RESULT {
  background_image: string;
  name: string;
}

interface GAME_CARD_PROPS {
  gameData: GAME_RESULT;
}

const GameCard: React.FC<GAME_CARD_PROPS> = ({ gameData }) => {
  const { background_image, name } = gameData;

  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={background_image} alt={name} />
      <CardBody>
        <Heading>{name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
