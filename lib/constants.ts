import { keyBy } from 'lodash-es';

import { RMXD } from './types';

export const RMXD_TOKENS: RMXD[] = [
  {
    id: '1',
    name: 'Geriatrics In Drag',
    fromSongId: '53',
    originalOwner: {
      name: 'Mintsaux',
      uri: 'https://opensea.io/accounts/Mintsaux',
    },
    credits: {
      name: 'Gözde Mutlue',
      uri: 'https://foundation.app/gozdemutluer',
    },
  },
  {
    id: '2',
    name: 'You Stole My Money',
    fromSongId: '175',
    originalOwner: {
      name: 'Cultofmantis',
      uri: 'https://opensea.io/accounts/Cultofmantis',
    },
    credits: {
      name: 'Everfresh',
      uri: 'https://foundation.app/everfresh',
    },
  },
  {
    id: '3',
    name: 'If Your Love Is On Fire',
    fromSongId: '187',
    originalOwner: {
      name: 'CPyrc',
      uri: 'https://opensea.io/accounts/CPyrc',
    },
    credits: {
      name: 'Tru',
      uri: 'https://foundation.app/tru',
    },
  },
  {
    id: '4',
    name: 'Running Through The Internet',
    fromSongId: '196',
    originalOwner: {
      name: 'CPyrc',
      uri: 'https://opensea.io/accounts/CPyrc',
    },
    credits: {
      name: 'Bananakin',
      uri: 'https://rarible.com/bananakin',
    },
  },
  {
    id: '6',
    name: 'Two Chords',
    fromSongId: '209',
    originalOwner: {
      name: 'DJFATHEAD',
      uri: 'https://opensea.io/accounts/DJFATHEAD',
    },
    credits: {
      name: 'Bryan Brinkman',
      uri: 'https://www.bryanbrinkman.com',
    },
  },
  {
    id: '7',
    name: 'I Wrote The Worst Jingle In The World',
    fromSongId: '220',
    originalOwner: {
      name: 'DojiFlip',
      uri: 'https://opensea.io/accounts/DojiFlip',
    },
    credits: {
      name: 'Matt Vojacek',
      uri: 'https://madebythings.com/our-work',
    },
  },
  {
    id: '13',
    name: 'First There Was No Chair',
    fromSongId: '257',
    originalOwner: {
      name: 'Davidfund88',
      uri: 'https://opensea.io/accounts/Davidfund88',
    },
    credits: {
      name: 'Miguelgarest',
      uri: 'https://foundation.app/miguelgarest',
    },
  },
  {
    id: '9',
    name: 'Popcorn',
    fromSongId: '270',
    originalOwner: {
      name: 'DJFATHEAD',
      uri: 'https://opensea.io/accounts/DJFATHEAD',
    },
    credits: {
      name: 'Chris Piascik',
      uri: 'https://foundation.app/chrispiascik',
    },
  },
  {
    id: '10',
    name: 'Dancing Fin',
    fromSongId: '331',
    originalOwner: {
      name: 'nftartcards',
      uri: 'https://opensea.io/accounts/nftartcards',
    },
    credits: {
      name: 'Reed and Rader',
      uri: 'https://foundation.app/reedandrader',
    },
  },
  {
    id: '11',
    name: 'The Best Day of My Life',
    fromSongId: '332',
    originalOwner: {
      name: 'MisterPlus',
      uri: 'https://opensea.io/accounts/MisterPlus',
    },
    credits: {
      name: 'Daniel Fascanio',
      uri: 'https://foundation.app/dfascanio',
    },
  },
];

export const RMXD_TOKENS_BY_ID = keyBy(RMXD_TOKENS, 'id');
export const RMXD_COLLECTION_ID = 'song-a-day-rmxd';
export const OPENSEA_ASSET_CONTRACT = '0x495f947276749ce646f68ac8c248420045cb7b5e';
export const RMXD_ASSET_CONTRACT = '0x2dea2f6f6c5e4210937d7903f0e5f990b2514da7';
