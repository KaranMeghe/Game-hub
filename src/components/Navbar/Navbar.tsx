/** @format */

// /** @format */

// // /** @format */

// import { HStack, Image } from '@chakra-ui/react';
// import logo from '../../assets/Logo/logo.webp';
// import { ColorModeButton } from '../ui/color-mode';
// import SearchInput from './SearchInput';

// import { Button, CloseButton, Drawer, Box, Portal } from '@chakra-ui/react';
// import { useColorModeValue } from '@/components/ui/color-mode';

// import { RxHamburgerMenu } from 'react-icons/rx';
// import { GenresContainer } from '../index';

// const Navbar = () => {
//   const bgColor = useColorModeValue('white', 'black');
//   return (
//     <HStack
//       justify='space-between'
//       position='fixed'
//       top={0}
//       left={0}
//       right={0}
//       width={'100%'}
//       height='80px'
//       zIndex='1000'
//       p={5}
//       bg={bgColor}>
//       <Box display={{ base: 'block', lg: 'none' }} p={4}>
//         <Drawer.Root>
//           <Drawer.Trigger asChild>
//             <Button variant='outline' size='sm'>
//               <RxHamburgerMenu />
//             </Button>
//           </Drawer.Trigger>
//           <Portal>
//             <Drawer.Backdrop />
//             <Drawer.Positioner>
//               <Drawer.Content>
//                 <Drawer.Body>
//                   <GenresContainer />
//                 </Drawer.Body>

//                 <Drawer.CloseTrigger asChild>
//                   <CloseButton size='md' />
//                 </Drawer.CloseTrigger>
//               </Drawer.Content>
//             </Drawer.Positioner>
//           </Portal>
//         </Drawer.Root>
//       </Box>

//       <Image src={logo} boxSize='60px' />
//       <SearchInput />
//       <ColorModeButton />
//     </HStack>
//   );
// };

// export default Navbar;

import { HStack, Image, Box, Button, CloseButton, Drawer, Portal } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
import { ColorModeButton } from '../ui/color-mode';
import SearchInput from './SearchInput';
import { useColorModeValue } from '@/components/ui/color-mode';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GenresContainer } from '../index';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'black');

  return (
    <HStack
      justify='space-between'
      position='fixed'
      top={0}
      left={0}
      right={0}
      height='80px'
      width='100%'
      zIndex='1000'
      p={5}
      bg={bgColor}>
      <Box display={{ base: 'block', lg: 'none' }} p={2}>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button variant='outline' size='sm'>
              <RxHamburgerMenu />
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Body>
                  <GenresContainer />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size='md' />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Box>

      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
