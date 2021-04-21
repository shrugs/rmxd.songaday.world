import { Alert, Box } from '@chakra-ui/react';
import { times } from 'lodash-es';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ComponentPropsWithoutRef } from 'react';

import { GridOfTokens } from '../../components/GridOfTokens';
import TokenCard from '../../components/TokenCard';
import { RMXD_COLLECTION_ID, RMXD_TOKENS_BY_ID } from '../../lib/constants';
import { RMXD } from '../../lib/types';

function AccountPage({ tokens, error }: { tokens?: RMXD[]; error?: string }) {
  return (
    <Box py={4} px={2}>
      {error && <Alert status="error">{error}</Alert>}
      {tokens.length === 0 && <Alert status="info">You don't own any RMXD editions!</Alert>}
      <GridOfTokens tokens={tokens}>
        {!tokens && times(4, (i) => <TokenCard key={i} token={undefined} />)}
      </GridOfTokens>
    </Box>
  );
}

const ONE_MINUTE = 60;

export const getStaticProps: GetStaticProps<ComponentPropsWithoutRef<typeof AccountPage>> = async (
  ctx,
) => {
  const account = ctx.params.account as string;

  if (!account) return { notFound: true };
  if (!account.startsWith('0x')) return { notFound: true };

  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?${new URLSearchParams({
      owner: account,
      collection: RMXD_COLLECTION_ID,
      limit: '50',
    })}`,
  );

  const results = await response.json();

  if (!results.assets) {
    console.error(account, JSON.stringify(results));
    return { props: { error: `OpenSea's response for account ${account} was invalid.` } };
  }

  const tokens = results.assets
    ?.map((asset) => RMXD_TOKENS_BY_ID[asset.token_id.toString()])
    .filter(Boolean);

  return { props: { tokens: tokens ?? null }, revalidate: ONE_MINUTE };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

export default AccountPage;
