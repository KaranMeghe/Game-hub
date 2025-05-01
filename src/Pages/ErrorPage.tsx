/** @format */

import { Center, Box, Heading, Text } from '@chakra-ui/react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Center height='100vh' bg='gray.50'>
      <Box textAlign='center'>
        <Heading as='h2' size='xl' mb={4}>
          Oops.....
        </Heading>
        <Text fontSize='lg' color='gray.600'>
          {isRouteErrorResponse(error) ? 'Invalid Page' : 'An Unexpected Error Occured'}
        </Text>
      </Box>
    </Center>
  );
};

export default ErrorPage;
