/** @format */

import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameSkeleton = () => {
  return (
    <Card.Root width='300px' borderRadius={10} overflow='hidden'>
      <Skeleton height='300px' />
      <Card.Body>
        <SkeletonText noOfLines={2} gap='2' />
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeleton;
