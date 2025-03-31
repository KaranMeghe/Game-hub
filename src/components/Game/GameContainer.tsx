/** @format */

import { fetchGamesFailure, fetchGamesSuccess } from '@/Redux/store';
import { fetchGames } from '@/services/services';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const GameContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const gamesList = async () => {
      try {
        const response = await fetchGames();
        dispatch(fetchGamesSuccess(response.data));
      } catch (error) {
        const err = error as Error;
        console.log(err.message);
        dispatch(fetchGamesFailure(err.message));
      }
    };

    gamesList();
  }, [dispatch]);
  return <div>GameContainer</div>;
};

export default GameContainer;
