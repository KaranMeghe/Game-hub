/** @format */

import { fetchGamesSuccess, fetchGamesFailure, fetchGamesStart } from '@/Redux/store';
import { fetchGames } from '@/services/services';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetchGames = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const gamesList = async () => {
      try {
        dispatch(fetchGamesStart());
        const response = await fetchGames();
        dispatch(fetchGamesSuccess(response));
      } catch (error) {
        const err = error as Error;
        console.log(err.message);
        dispatch(fetchGamesFailure(err.message));
      }
    };

    gamesList();
  }, [dispatch]);
};

export default useFetchGames;
