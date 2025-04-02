/** @format */

import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const GenresSkelton = () => {
  return (
    <HStack gap='5' mb={3}>
      <SkeletonCircle size='10' />
      <Skeleton height='5' width='45%' />
    </HStack>
  );
};

export default GenresSkelton;
