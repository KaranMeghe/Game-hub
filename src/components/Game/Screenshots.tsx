/** @format */

import { useFetchGameScreenShotsQuery } from '@/Redux/api/gamesApi';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  gameId: number | undefined;
}

const Screenshots = ({ gameId }: Props) => {
  const { isLoading, data, isError } = useFetchGameScreenShotsQuery(gameId);

  if (isLoading) return null;
  if (isError) throw isError;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((file) => {
        return <Image key={file.id} src={file.image} />;
      })}
    </SimpleGrid>
  );
};

export default Screenshots;
