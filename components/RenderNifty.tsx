import { Image, ImageProps } from '@chakra-ui/image';
import { chakra } from '@chakra-ui/system';
const Video = chakra('video');

// TODO: get typings from use.nifti.es
export function RenderNifty({
  poster,
  render,
  ...delegated
}: ImageProps & { poster: string; render: any }) {
  // we render a local poster because ipfs is slow as fuck
  switch (render.type) {
    case 'video': {
      return (
        <Video
          poster={poster}
          objectFit="contain"
          objectPosition="center"
          controls
          controlsList="nodownload"
        >
          {render.sources.map((source) => (
            <source key={source.src} src={source.src} />
          ))}
        </Video>
      );
    }
    case 'image':
    default: {
      const renderData = render.type === 'image' ? render : render.fallback;
      if (!renderData) return null;
      return (
        <Image
          {...delegated}
          src={renderData.src}
          alt={renderData.alt}
          objectFit="contain"
          objectPosition="center"
          pointerEvents="none"
          draggable={false}
        />
      );
    }
  }
}
