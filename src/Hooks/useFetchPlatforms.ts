/** @format */

import { fetchPlatformThunk } from '@/Redux/Slices/Thunks/platformThunks';
import { AppDispatch, RootState } from '@/Redux/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchPlatforms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hasFetched = useRef(false);

  const { isLoading, platforms, error } = useSelector((state: RootState) => state.platforms);

  useEffect(() => {
    const controller = new AbortController();

    if (hasFetched.current) return;
    hasFetched.current = true;
    dispatch(fetchPlatformThunk());

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { isLoading, platforms, error };
};
