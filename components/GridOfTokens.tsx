import { BoxProps, SimpleGrid } from '@chakra-ui/react';

import { RMXD } from '../lib/types';
import TokenCard from './TokenCard';

export function GridOfTokens({ tokens, children, ...delegated }: BoxProps & { tokens: RMXD[] }) {
  return (
    <SimpleGrid {...delegated} gap="4" columns={{ base: 1, lg: 2, xl: 3 }}>
      {tokens?.map((token) => (
        <TokenCard key={token.id} h="full" w="full" token={token} />
      ))}

      {children}
    </SimpleGrid>
  );
}
