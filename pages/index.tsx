import { Link as ChakraLink, Text, VStack } from '@chakra-ui/react';

import { GridOfTokens } from '../components/GridOfTokens';
import { RMXD_TOKENS } from '../lib/constants';

function Index() {
  return (
    <VStack align="stretch" py={4} spacing={4} px={{ base: 2, xl: 8 }}>
      <Text fontSize="xl">Jonathan Mann has been writing a Song A Day for 4,500 days.</Text>
      <Text>
        On 3.15.21 he sold the first 365 on OpenSea. Just over a week later, seventy Song A Day
        holders sent their 1/1 NFT to the RMXD wallet address.
      </Text>
      <Text>
        10 of those songs were chosen at random to be remixed by{' '}
        <ChakraLink href="https://" variant="underlined" isExternal>
          Eclectic Method
        </ChakraLink>
        . The holders whose songs were chosen get 40% of all sales of the remix that came from their
        song.
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Only 100 copies
        </Text>{' '}
        of each animated remix.{' '}
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Collect all 10
        </Text>{' '}
        remixes to get the album cover.
      </Text>
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
