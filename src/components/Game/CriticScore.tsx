/** @format */

import { Badge } from '@chakra-ui/react';

interface CRITIC_SCORE {
  criticScore: number;
}

const CriticScore: React.FC<CRITIC_SCORE> = ({ criticScore }) => {
  return (
    <Badge fontSize='14px' px={2} borderRadius='4px' colorPalette={criticScore >= 80 ? 'green' : 'orange'}>
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
