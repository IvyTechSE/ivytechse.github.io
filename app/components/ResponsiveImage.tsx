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
  // Using 1280w as the max width to support up to 640px display size on 2x DPR (Retina) displays
  // This covers the largest display size used in the app (360px) with headroom for high-DPI screens
  const createSrcSet = (ext: string) =>
    `${baseSrc}-320.${ext} 320w, ${baseSrc}-640.${ext} 640w, ${baseSrc}.${ext} 1280w`;

  return (
    <picture>
      <source type="image/avif" srcSet={createSrcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={createSrcSet("webp")} sizes={sizes} />
      <img
        src={`${baseSrc}.jpg`}
        srcSet={createSrcSet("jpg")}
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
