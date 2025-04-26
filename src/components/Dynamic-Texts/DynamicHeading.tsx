/** @format */

import { RootState } from '@/Redux/store';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const DynamicHeading = () => {
  const { platformName } = useSelector((store: RootState) => store.filters);
  const { genreName } = useSelector((store: RootState) => store.filters);

  const displayName = () => {
    if (platformName) return `Games : ${platformName}`;
    if (genreName) return `Games : ${genreName}`;
    return `Games`;
  };

  return (
    <Text textStyle='3xl' my='20px'>
      {displayName()}
    </Text>
  );
};

export default DynamicHeading;
