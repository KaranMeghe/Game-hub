/** @format */

import { useFetchPlatforms } from '@/Hooks/useFetchPlatforms';
import { NativeSelect } from '@chakra-ui/react';

const PlatformSelector = () => {
  const { isLoading, platforms, error } = useFetchPlatforms();

  console.log(platforms);
  return (
    <NativeSelect.Root size='sm' width='240px'>
      <NativeSelect.Field placeholder='Select option'>
        {platforms?.results.map((result) => {
          return (
            <option key={result.id} value={result.slug}>
              {result.name}
            </option>
          );
        })}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export default PlatformSelector;
