/** @format */

import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { CriticScore, PlatformsIcon } from '../index';
import GameCardContainer from './GameCardContainer';
import { getCroppedImageUrl } from '../../services/services';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGameiD } from '@/Redux/Slices/filterSlice';
import { AppDispatch } from '@/Redux/store';
import { GAME_CARD_PROPS } from '@/Redux/models/games.model';

const GameCard: React.FC<GAME_CARD_PROPS> = ({ gameData }) => {
  const { background_image, name, parent_platforms, metacritic, id } = gameData;
  const dispatch = useDispatch<AppDispatch>();

  const score = metacritic ?? 0;

  const handleDispatch = (id: number) => {
    dispatch(setGameiD(id));
  };

  return (
    <GameCardContainer>
      <Link to={`/gameinfo/${id}`} onClick={() => handleDispatch(id)}>
        <Card.Root>
          <Image src={getCroppedImageUrl(background_image)} alt={name} />
          <CardBody>
            <HStack justifyContent='space-between' mb={3}>
              <PlatformsIcon platformIcons={parent_platforms} />
              <CriticScore criticScore={score} />
            </HStack>
            <Heading>{name}</Heading>
          </CardBody>
        </Card.Root>
      </Link>
    </GameCardContainer>
  );
};

export default GameCard;
