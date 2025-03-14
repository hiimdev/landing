import React from 'react';
import Image from 'next/image';

import { HStack } from '@/components/ui/h-stack';
import { Text } from '@/components/ui/text';

const ProudlyUncommonList = [
  {
    title: 'Customized',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.`,
    imageUrl: '/common/images/Customized.png',
  },
  {
    title: 'Verified',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.`,
    imageUrl: '/common/images/Verified.png',
  },
  {
    title: 'Innovative',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.`,
    imageUrl: '/common/images/Innovative.png',
  },
];

const ProudlyUncommon = () => {
  return (
    <div className="pb-[60px] pt-10 md:pb-[80px] md:pt-[60px] lg:pb-[100px] lg:pt-[120px]">
      <Text size="lg" weight={600} className="pb-14 text-center tracking-tight text-white">
        The amazing NFT
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ProudlyUncommonList?.map((item, index) => (
          <div key={index} className="col-span-1 p-2.5">
            <HStack className="mb-5">
              <Image src={item?.imageUrl} alt={item?.title} width={88} height={70} />
              <Text size="md" className="text-white">
                {item?.title}
              </Text>
            </HStack>
            <Text size="sm" className="text-[#FFFFFF8F]">
              {item?.desc}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudlyUncommon;
