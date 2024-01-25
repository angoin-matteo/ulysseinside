import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExtendedImage({
  alt,
  className,
  height,
  src,
  width,
}: Readonly<{
  alt: string,
  className?: string,
  height?: number,
  src: string,
  width?: number,
}>) {
  const [newSrc, setNewSrc] = useState("/");

  useEffect(() => {
    import(`../../public/avatars/${src}.webp`)
      .then(module => setNewSrc(module.default));
  }, [src]);

  return (
    <Image
      alt={alt}
      className={className}
      height={height ?? 0}
      src={newSrc}
      width={height ?? 0}
    />
  );
}
