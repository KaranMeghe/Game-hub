/** @format */

// import { useFetchGenres } from '@/Hooks/useFetchGenres';
import { getCroppedImageUrl } from '@/services/services';
import { HStack, List, Image, Button, Text, Center } from '@chakra-ui/react';
import GenresSkelton from './GenresSkeleton';
import { useFetchGenresQuery } from '@/Redux/api/genresApi';
import { useDispatch } from 'react-redux';
import { setGenreId, setGenreName } from '@/Redux/Slices/filterSlice';

const GenresList = () => {
  const { data, isLoading, isError } = useFetchGenresQuery();
  const dispatch = useDispatch();
  const genresCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  // const { selectedGenre } = useFilterGames();

  const handleFilteredGenresGames = (genreId: number, genreName: string) => {
    dispatch(setGenreName(genreName));
    dispatch(setGenreId(genreId));
  };

  if (isError) {
    return (
      <Center height='300px'>
        <Text color='red.400' fontWeight='bold'>
          Error: "Unable to Fetch Genres"
        </Text>
      </Center>
    );
  }

  return (
    <List.Root listStyleType='none' padding='20px'>
      <Text textStyle='2xl' fontWeight='bold' paddingY='10px'>
        Genres
      </Text>
      {isLoading && genresCount.map((count) => <GenresSkelton key={count} />)}
      {data?.results.map((genre) => (
        <List.Item key={genre.id} paddingY='3px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre?.image_background)}
              objectFit='cover'
            />
            <Button
              variant='ghost'
              fontSize='lg'
              // fontWeight={selectedGenre === genre.name ? 'bold' : 'normal'}
              // color={selectedGenre === genre.name ? 'green.400' : ''}
              onClick={() => handleFilteredGenresGames(genre?.id, genre?.name)}>
              {genre?.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
