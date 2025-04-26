/** @format */

import { NativeSelect, Box } from '@chakra-ui/react';
import PlatformSpinner from './PlatformSpinner';
import { useFetchPlatformsQuery } from '@/Redux/api/platformsApi';
import { useLazyFetchGamesQuery } from '@/Redux/api/gamesApi'; // 👈 lazy fetch hook
import { useDispatch } from 'react-redux';
import { setPlatformName, setPlatformId, setGenreName } from '@/Redux/Slices/filterSlice';

const PlatformSelector = () => {
  const { data, isLoading, isError } = useFetchPlatformsQuery();
  const [triggerFetchGames, { isFetching }] = useLazyFetchGamesQuery(); // 👈 lazy fetch
  // for games

  const dispatch = useDispatch();

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedName = e.target.options[e.target.selectedIndex].text;
    dispatch(setPlatformId(selectedId === '' ? null : selectedId));
    dispatch(setPlatformName(selectedId === '' ? null : selectedName));
    dispatch(setGenreName(''));
    triggerFetchGames({ platform: selectedId });
  };

  return (
    <Box width='240px' position='relative'>
      <NativeSelect.Root size='sm' width='100%'>
        <NativeSelect.Field placeholder='Select platform' onChange={handlePlatformChange}>
          {isError && <option color='red.400'>Error loading platforms</option>}

          {!isLoading &&
            data?.results.map((result) => (
              <option key={result.id} value={result.id}>
                {result.name}
              </option>
            ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      {(isLoading || isFetching) && <PlatformSpinner />}
    </Box>
  );
};

export default PlatformSelector;
