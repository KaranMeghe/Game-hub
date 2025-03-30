/** @format */

import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' />
    </HStack>
  );
};

export default Navbar;
