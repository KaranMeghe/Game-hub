/** @format */

import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import { ColorModeButton } from '../ui/color-mode';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack justify='space-between' position='fixed' top={0} left={0} right={0} width={'100%'} zIndex='1000' p={5}>
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
