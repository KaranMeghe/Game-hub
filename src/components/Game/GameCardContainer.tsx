/** @format */

import { Box } from '@chakra-ui/react';
import React from 'react';

interface GAME_CARD_CONTAINER_PROPS {
  children: React.ReactNode;
}

const GameCardContainer: React.FC<GAME_CARD_CONTAINER_PROPS> = ({ children }) => {
  return (
    <Box borderRadius={10} overflow='hidden' width='300px' height='300px'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
