/** @format */

import { useFetchGenres } from '@/Hooks/useFetchGenres';
import { getCroppedImageUrl } from '@/services/services';
import { HStack, List, Image, Text } from '@chakra-ui/react';

const GenresList = () => {
  const { genres } = useFetchGenres();
  console.log(genres);

  return (
    <List.Root listStyleType='none' padding='20px'>
      {genres?.results.map((genre) => (
        <List.Item key={genre.id} paddingY='10px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre?.image_background)} />
            <Text fontSize='lg'>{genre?.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
