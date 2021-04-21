import { keyBy } from 'lodash-es';

import { RMXD } from './types';

const _TOKENS: RMXD[] = [
  {
    id: '0x0',
    name: 'Geriatrics In Drag',
    fromSongId: '53',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048412942183170049',
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
    id: '0x1',
    name: 'You Stole My Money',
    fromSongId: '175',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048547082601758721',
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
    id: '0x2',
    name: 'If Your Love Is On Fire',
    fromSongId: '187',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048560276741292033',
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
    id: '0x3',
    name: 'Running Through The Internet',
    fromSongId: '196',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048570172345942017',
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
    id: '0x4',
    name: 'Two Chords',
    fromSongId: '209',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048583366485475329',
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
    id: '0x5',
    name: 'I Wrote The Worst Jingle In The World',
    fromSongId: '220',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048595461113380865',
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
    id: '0x6',
    name: 'First There Was No Chair',
    fromSongId: '257',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048636143043608577',
    originalOwner: {
      name: 'Davidfund88',
      uri: 'https://opensea.io/accounts/Davidfund88',
    },
    credits: {
      name: 'Miguel Gares',
      uri: 'https://foundation.app/miguelgarest',
    },
  },
  {
    id: '0x7',
    name: 'Popcorn',
    fromSongId: '270',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048650436694769665',
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
    id: '0x8',
    name: 'Dancing Fin',
    fromSongId: '331',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048717506904064001',
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
    id: '0x9',
    name: 'Best Day of My Life',
    fromSongId: '332',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048718606415691777',
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

export const RMXD_TOKENS: RMXD[] = [
  {
    id: '3',
    name: 'Mark His Words',
    fromSongId: '332',
    fromTokenId: '27853175353995272517766450193869818424107874020190547876689048718606415691777',
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
export const RMXD_COLLECTION_ID = 'punks-mavericks-and-mishegas';
export const OPENSEA_ASSET_CONTRACT = '0x495f947276749ce646f68ac8c248420045cb7b5e';
export const RMXD_ASSET_CONTRACT = '0x4392ae0ba1e06cf8d0b7f098fec016dedd85b519'; // TODO: change
