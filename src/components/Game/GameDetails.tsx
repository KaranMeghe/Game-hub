/** @format */

import { useFetchGameByIdQuery } from '@/Redux/api/gamesApi';
import { RootState } from '@/Redux/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();
  const { gameId } = useSelector((state: RootState) => state.filters);

  const { isLoading, data, isError } = useFetchGameByIdQuery(gameId);
  console.log(data);

  if (isLoading) return <p className='text-center'>Loading......</p>;
  if (isError) return <p className='text-center'>Error......</p>;

  return <div>Game Details:{id}</div>;
};

export default GameDetails;
