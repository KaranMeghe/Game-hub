/** @format */
import { setSearchInput } from '@/Redux/Slices/filterSlice';
import { AppDispatch } from '@/Redux/store';
import { Input, InputGroup } from '@chakra-ui/react';

import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup startElement={<LuSearch />}>
        <Input
          ref={inputRef}
          borderColor='gray.700'
          borderRadius={20}
          placeholder='Search Games...'
          variant='subtle'
          pl='8'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
