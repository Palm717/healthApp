import { Image } from "@chakra-ui/react";

function ImageTemplate({ src, alt, maxH, rounded }) {
  return <Image src={src} alt={alt} maxH={maxH} rounded={rounded} />;
}

export default ImageTemplate;
