import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  Heading,
  HStack,
  Link as ChakraLink,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react';

import { RMXD_ASSET_CONTRACT } from '../lib/constants';
import { RMXD } from '../lib/types';
import { useNifty } from '../lib/useNifty';
import { OwnershipButton } from './OwnershipButton';
import { RenderNifty } from './RenderNifty';

function TokenCard({ token, ...delegated }: BoxProps & { token: RMXD }) {
  const { data, loading, isHydrating, error, openSeaUri } = useNifty(
    RMXD_ASSET_CONTRACT,
    token?.id,
  );

  return (
    <VStack
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="sm"
      py="2"
      spacing="2"
      alignItems="stretch"
      bg="white"
      {...delegated}
    >
      <HStack px="2" justify="space-between" spacing="4">
        <VStack align="stretch" flex="1" minW="0">
          {token ? (
            <Heading as="h3" fontSize="xl" isTruncated>
              {token.name}
            </Heading>
          ) : (
            <Skeleton h="6" w="full" />
          )}
          {token ? (
            <Text as="h4" fontSize="xs" isTruncated>
              RMXD from{' '}
              <ChakraLink href={`https://songaday.world/song/${token.fromSongId}`} isExternal>
                Song a Day #{token.fromSongId}
              </ChakraLink>
            </Text>
          ) : (
            <Skeleton h="4" w="66%" />
          )}
        </VStack>

        <VStack spacing={1} justify="center" align="end">
          <Button
            as="a"
            href={`https://rarible.com/token/${RMXD_ASSET_CONTRACT}:${token?.id}`}
            target="_blank"
            rel="noopener noreferrer"
            isLoading={!token}
            variant="rarible"
            size="sm"
          >
            <Text as="span" fontFamily="mono">
              Collect on Rarible
            </Text>
          </Button>
          <Text color="gray.500" fontSize="xs">
            only 100 editions available
          </Text>
        </VStack>
      </HStack>

      <AspectRatio ratio={16 / 9}>
        {data ? <RenderNifty render={data.render} /> : <Skeleton h="full" w="full" />}
      </AspectRatio>

      <VStack flex="1" p={2} spacing={4} align="stretch">
        <Box flex="1" overflowY="auto">
          {token ? (
            <Text lineHeight="tall">
              Originally owned by{' '}
              <ChakraLink variant="underlined" href={token.originalOwner.uri} isExternal>
                {token.originalOwner.name}
              </ChakraLink>
              , remixed by{' '}
              <ChakraLink variant="underlined" href={token.credits.uri} isExternal>
                Eclectic Method
              </ChakraLink>
              , and animated by{' '}
              <ChakraLink variant="underlined" href={token.credits.uri} isExternal>
                {token.credits.name}
              </ChakraLink>
              .
            </Text>
          ) : (
            <SkeletonText skeletonHeight="4" noOfLines={2} />
          )}
        </Box>

        {!error && (
          <HStack justifyContent="space-between">
            <Box flex="1" overflowX="auto" display="flex">
              <HStack>
                {loading || isHydrating ? (
                  <OwnershipButton ownership={undefined} />
                ) : (
                  data?.ownerships?.map((ownership) => (
                    <OwnershipButton key={ownership.owner.id} ownership={ownership} />
                  ))
                )}
              </HStack>
            </Box>
            <Button
              as="a"
              size="xs"
              variant="ghost"
              href={openSeaUri}
              target="_blank"
              rel="noopener noreferrer"
              isDisabled={!data}
              zIndex="1"
            >
              View on OpenSea
            </Button>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
}

export default TokenCard;
