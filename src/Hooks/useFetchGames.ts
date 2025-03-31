/** @format */

import { fetchGamesSuccess, fetchGamesFailure, fetchGamesStart } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { fetchGames } from '@/services/services';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const useFetchGames = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, gameList, error } = useSelector((store: RootState) => store.games);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const gamesList = async () => {
      try {
        dispatch(fetchGamesStart());
        const response = await fetchGames(signal);
        dispatch(fetchGamesSuccess(response));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request was cancelled');
          return;
        }
        dispatch(fetchGamesFailure((error as Error).message));
      }
    };

    gamesList();
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { gameList, isLoading, error };
};

export default useFetchGames;
