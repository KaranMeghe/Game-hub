/** @format */

import { NativeSelect, Box } from '@chakra-ui/react';
import PlatformSpinner from './PlatformSpinner';
import { useFilterGamesPlatforms } from '@/Hooks/useFilterGamesPlatforms';
import { useFetchPlatformsQuery } from '@/Redux/api/platformsApi';

const PlatformSelector = () => {
  // platforms, isLoading
  const { handleChange } = useFilterGamesPlatforms();
  const { data, isLoading, isError } = useFetchPlatformsQuery();

  return (
    <Box width='240px' position='relative'>
      <NativeSelect.Root size='sm' width='100%'>
        <NativeSelect.Field placeholder='Select platform' onChange={handleChange}>
          {isError && <option color='red.400'>Error: "Unable to Fetch Platforms"</option>}
          {!isLoading &&
            data?.results.map((result) => (
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
