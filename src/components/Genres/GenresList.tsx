/** @format */

import { useFetchGenres } from '@/Hooks/useFetchGenres';
import { getCroppedImageUrl } from '@/services/services';
import { HStack, List, Image, Button } from '@chakra-ui/react';
import GenresSkelton from './GenresSkeleton';
import useFilterGames from '@/Hooks/useFilterGames';

const GenresList = () => {
  const { genres, isLoading } = useFetchGenres();
  const genresCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const { handleGameFilter } = useFilterGames();

  return (
    <List.Root listStyleType='none' padding='20px'>
      {isLoading && genresCount.map((count) => <GenresSkelton key={count} />)}
      {genres?.results.map((genre) => (
        <List.Item key={genre.id} paddingY='10px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre?.image_background)} />
            <Button variant='ghost' fontSize='lg' onClick={() => handleGameFilter(genre?.name)}>
              {genre?.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
