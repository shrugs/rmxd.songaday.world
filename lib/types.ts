interface Owner {
  name: string;
  uri: string;
}

interface Credits {
  name: string;
  uri: string;
}

export interface RMXD {
  id: string;
  name: string;
  fromSongId: string;
  fromTokenId: string;
  originalOwner: Owner;
  credits: Credits;
}
