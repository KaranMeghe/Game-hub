/** @format */

import { HStack, Icon } from '@chakra-ui/react';
import { GAME_PLATFORM } from '../../Redux/models/games.model';
import { iconMap } from '@/utils/utils';
import { BsGlobe } from 'react-icons/bs';

interface PLATFORM {
  platformIcons?: { platform: GAME_PLATFORM }[];
}

const PlatformsIcon: React.FC<PLATFORM> = ({ platformIcons }) => {
  return (
    <HStack marginY={1}>
      {platformIcons?.map(({ platform }) => {
        const IconComponent = iconMap[platform.slug] || BsGlobe;
        if (!IconComponent) return null;

        return <Icon key={platform.id} as={IconComponent} color='gray.500' />;
      })}
    </HStack>
  );
};

export default PlatformsIcon;
