/** @format */

import { NativeSelect, Box } from '@chakra-ui/react';
import { useFetchPlatforms } from '@/Hooks/useFetchPlatforms';
import PlatformSpinner from './PlatformSpinner';

const PlatformSelector = () => {
  const { isLoading, platforms } = useFetchPlatforms();

  return (
    <Box width='240px' position='relative'>
      <NativeSelect.Root size='sm' width='100%'>
        <NativeSelect.Field placeholder='Select platform'>
          {!isLoading &&
            platforms?.results.map((result) => (
              <option key={result.id} value={result.slug}>
                {result.name}
              </option>
            ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      {isLoading && <PlatformSpinner />}
    </Box>
  );
};

export default PlatformSelector;
