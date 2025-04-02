/** @format */

import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { CriticScore, PlatformsIcon } from '../index';
import { getCroppedImageUrl } from '@/services/services';

export interface GAME_PLATFORM {
  id: number;
  name: string;
  slug: string;
}

interface GAME_RESULT {
  background_image: string;
  name: string;
  metacritic?: number;
  parent_platforms?: { platform: GAME_PLATFORM }[];
}

interface GAME_CARD_PROPS {
  gameData: GAME_RESULT;
}

const GameCard: React.FC<GAME_CARD_PROPS> = ({ gameData }) => {
  const { background_image, name, parent_platforms, metacritic } = gameData;

  const score = metacritic ?? 0;

  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(background_image)} alt={name} />
      <CardBody>
        <Heading>{name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformsIcon platformIcons={parent_platforms} />
          <CriticScore criticScore={score} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
