import useSWR from 'swr';

import fetcher from './fetcher';

export function useNifty(address: string, tokenId: string) {
  const { data, isValidating, error } = useSWR(
    tokenId && `https://use.nifti.es/api/eip155:1/erc1155:${address}/${tokenId}`,
    fetcher,
  );

  const openSeaUri = `https://opensea.io/assets/${address}/${tokenId}`;

  return {
    data,
    error,
    loading: !data && isValidating,
    isHydrating: !data && !isValidating && !error,
    openSeaUri,
  };
}
