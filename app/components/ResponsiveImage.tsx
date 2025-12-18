type ResponsiveImageProps = {
  baseSrc: string;
  alt: string;
  className?: string;
  sizes?: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function ResponsiveImage({
  baseSrc,
  alt,
  className,
  sizes,
  width,
  height,
  priority,
}: ResponsiveImageProps) {
  const avifSrcSet = `${baseSrc}-320.avif 320w, ${baseSrc}-640.avif 640w`;
  const webpSrcSet = `${baseSrc}-320.webp 320w, ${baseSrc}-640.webp 640w`;
  const jpgSrcSet = `${baseSrc}-320.jpg 320w, ${baseSrc}-640.jpg 640w`;

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={`${baseSrc}-640.jpg`}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
