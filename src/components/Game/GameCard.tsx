/** @format */

import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { PlatformsIcon } from '../index';

export interface GAME_PLATFORM {
  id: number;
  name: string;
  slug: string;
}

interface GAME_RESULT {
  background_image: string;
  name: string;
  parent_platforms?: { platform: GAME_PLATFORM }[];
}

interface GAME_CARD_PROPS {
  gameData: GAME_RESULT;
}

const GameCard: React.FC<GAME_CARD_PROPS> = ({ gameData }) => {
  const { background_image, name, parent_platforms } = gameData;

  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={background_image} alt={name} />
      <CardBody>
        <Heading>{name}</Heading>
        <PlatformsIcon platformIcons={parent_platforms} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
