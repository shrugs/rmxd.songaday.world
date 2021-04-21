import { Image, ImageProps } from '@chakra-ui/image';
import { chakra } from '@chakra-ui/system';
const Video = chakra('video');

// TODO: get typings from use.nifti.es
export function RenderNifty({ render, ...delegated }: ImageProps & { render: any }) {
  switch (render.type) {
    case 'video': {
      return (
        <Video
          poster={render.poster}
          objectFit="contain"
          objectPosition="center"
          autoPlay
          muted
          loop
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
