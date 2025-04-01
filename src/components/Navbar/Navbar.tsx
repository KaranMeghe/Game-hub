/** @format */

import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import { ColorModeButton } from '../ui/color-mode';

const Navbar = () => {
  return (
    <HStack justify='space-between' position='fixed' width='100%' zIndex='1000' px={5}>
      <Image src={logo} boxSize='60px' />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
