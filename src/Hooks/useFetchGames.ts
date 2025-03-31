/** @format */

import { fetchGamesSuccess, fetchGamesFailure, fetchGamesStart } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';

import { fetchGames } from '@/services/services';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFetchGames = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, gameList, error } = useSelector((store: RootState) => store.games);

  useEffect(() => {
    const gamesList = async () => {
      try {
        dispatch(fetchGamesStart());
        const response = await fetchGames();

        if (response) {
          dispatch(fetchGamesSuccess(response));
        } else {
          dispatch(fetchGamesFailure('Failed to fetch games.'));
        }
      } catch (error) {
        const err = error as Error;
        dispatch(fetchGamesFailure(err.message));
      }
    };

    gamesList();
  }, [dispatch]);

  return { gameList, isLoading, error };
};

export default useFetchGames;
