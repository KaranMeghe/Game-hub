/** @format */

import { useFetchGameTrailerQuery } from '@/Redux/api/gamesApi';

interface Prop {
  gameId: string | undefined;
}

const GameTrailerBox = ({ gameId }: Prop) => {
  const { isLoading, data, isError } = useFetchGameTrailerQuery(gameId);

  if (isLoading) return null;
  if (isError) throw isError;

  const first = data?.results[0];
  return first ? <video src={first.data[480]} poster={first.preview} controls /> : null;
};

export default GameTrailerBox;
