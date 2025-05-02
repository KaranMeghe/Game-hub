/** @format */

import { setSearchInput } from '@/Redux/Slices/filterSlice';
import { AppDispatch } from '@/Redux/store';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useHandleNavbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(setSearchInput(inputRef.current.value));
      inputRef.current.value = '';
      navigate('/');
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      dispatch(setSearchInput(''));
    }, 20000);
  };

  return { handleSubmit, inputRef };
};

export default useHandleNavbar;
