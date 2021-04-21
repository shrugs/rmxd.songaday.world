import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';

import { GridOfTokens } from '../components/GridOfTokens';
import { RMXD_TOKENS } from '../lib/constants';

function Index() {
  return (
    <VStack align="stretch" py={4} spacing={4} px={{ base: 2, xl: 8 }}>
      <Flex flexDirection={{ base: 'column', sm: 'row' }}>
        <VStack spacing={2}>
          <Box w={{ base: 'full', sm: '64' }}>
            <AspectRatio ratio={1}>
              <Box h="full" w="full" bg="gray.200" />
            </AspectRatio>
          </Box>
          <Heading as="h1" fontSize="sm">
            Song A Day: RMXD Volume 1
          </Heading>
          <Text fontSize="xs">Remixes by Eclectic Method</Text>
          <Text fontSize="xs">Album cover by Daim Aggott-Hönsch</Text>
        </VStack>
        <VStack pl={{ base: 0, sm: 4 }} pt={{ base: 4, sm: 0 }} align="start" spacing={3}>
          <Text lineHeight="shorter">
            <ChakraLink href="https://twitter.com/songadaymann" isExternal>
              Jonathan Mann
            </ChakraLink>{' '}
            has been writing a Song A Day for 4,500 days. On 3.15.21 he sold the first 365 on
            OpenSea. Just over a week later, seventy Song A Day holders sent their 1/1 NFT to the
            RMXD wallet address.
          </Text>
          <Text lineHeight="shorter">
            10 of those songs were chosen at random to be remixed by{' '}
            <ChakraLink href="https://" variant="underlined" isExternal>
              Eclectic Method
            </ChakraLink>
            . The holders whose songs were chosen get 40% of all sales of the remix that came from
            their song.
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Only 100 copies
            </Text>{' '}
            of each animated remix exist.
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Collect all 10
            </Text>{' '}
            remixes to get the album cover.
          </Text>
        </VStack>
      </Flex>
      <GridOfTokens tokens={RMXD_TOKENS} />
    </VStack>
  );
}

// export const getServerSideProps: GetServerSideProps<
//   ComponentPropsWithoutRef<typeof Page>
// > = async (ctx) => {
//   const filters = {
//     location: ctx.query.location as Location,
//     topic: ctx.query.topic as Topic,
//     mood: ctx.query.mood as Mood,
//     beard: ctx.query.beard as Beard,
//     instrument: ctx.query.instrument as Instrument,
//   };
//   const initialKey = makeKey(filters);
//   const initialData = findSongs(filters);

//   return { props: { initialKey, initialData } };
// };

export default Index;
