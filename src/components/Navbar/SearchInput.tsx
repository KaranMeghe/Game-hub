/** @format */
import useHandleNavbar from '@/Hooks/useHandleNavbar';
import { Input, InputGroup } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

const SearchInput = () => {
  const { handleSubmit, inputRef } = useHandleNavbar();

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
