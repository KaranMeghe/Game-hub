/** @format */

import { HStack, Icon } from '@chakra-ui/react';
import { GAME_PLATFORM } from './GameCard';
import { iconMap } from '@/utils/utilsIcons';

interface PLATFORM {
  platformIcons?: { platform: GAME_PLATFORM }[];
}

const PlatformsIcon: React.FC<PLATFORM> = ({ platformIcons }) => {
  return (
    <HStack marginY={1}>
      {platformIcons?.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformsIcon;
