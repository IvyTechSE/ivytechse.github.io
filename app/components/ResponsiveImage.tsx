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
  // Include full-size variants in srcset for better image quality on larger screens
  // Using 1280w as a reasonable max width for full-size variants to support high-DPI displays
  const avifSrcSet = `${baseSrc}-320.avif 320w, ${baseSrc}-640.avif 640w, ${baseSrc}.avif 1280w`;
  const webpSrcSet = `${baseSrc}-320.webp 320w, ${baseSrc}-640.webp 640w, ${baseSrc}.webp 1280w`;
  const jpgSrcSet = `${baseSrc}-320.jpg 320w, ${baseSrc}-640.jpg 640w, ${baseSrc}.jpg 1280w`;

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={`${baseSrc}.jpg`}
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
