/** @format */

import { RootState } from '@/Redux/store';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const DynamicHeading = () => {
  const { platformName } = useSelector((store: RootState) => store.platforms);
  const { genresName } = useSelector((store: RootState) => store.genres);

  const displayName = () => {
    if (platformName) return `Games : ${platformName}`;
    if (genresName) return `Games : ${genresName}`;
    return `Games`;
  };

  return (
    <Text textStyle='3xl' my='20px'>
      {displayName()}
    </Text>
  );
};

export default DynamicHeading;
