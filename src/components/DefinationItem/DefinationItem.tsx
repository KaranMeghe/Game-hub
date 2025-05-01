/** @format */

import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinationItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as='dt' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinationItem;
