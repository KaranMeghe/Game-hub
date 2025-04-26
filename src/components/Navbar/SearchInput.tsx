/** @format */

// import { handleSearchInput } from '@/Redux/Slices/gamesSlice';
// import { clearGenresName } from '@/Redux/Slices/genresSlice';
// import { clearPlatformName } from '@/Redux/Slices/platFormSlice';
// import { searchGamesThunks } from '@/Redux/Slices/Thunks/searchGamesThunks';
import { setSearchInput } from '@/Redux/Slices/filterSlice';
import { AppDispatch } from '@/Redux/store';
import { Input, InputGroup } from '@chakra-ui/react';

import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(setSearchInput(inputRef.current.value));
      inputRef.current.value = '';
    }
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
