/** @format */

import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

const GameSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Skeleton height='300px' />
        <Card.Body>
          <SkeletonText noOfLines={2} gap='2' />
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameSkeleton;
