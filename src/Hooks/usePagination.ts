/** @format */

import { useDispatch } from 'react-redux';
import { setNextPageNumber, setPrevPageNumber } from '@/Redux/Slices/filterSlice';

export const useHandlePagination = () => {
  const dispatch = useDispatch();

  const handleNextPage = (pageNum: number) => {
    dispatch(setNextPageNumber(pageNum));
  };

  const handlePrevPage = (pageNum: number) => {
    dispatch(setPrevPageNumber(pageNum));
  };

  return { handleNextPage, handlePrevPage };
};
