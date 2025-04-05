/** @format */

import { fetchPlatformThunk } from '@/Redux/Slices/Thunks/platformThunks';
import { AppDispatch, RootState } from '@/Redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchPlatforms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, platforms, error } = useSelector((state: RootState) => state.platforms);

  useEffect(() => {
    dispatch(fetchPlatformThunk());
  }, [dispatch]);

  return { isLoading, platforms, error };
};
