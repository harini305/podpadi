import images from "@/data/images";

// Responsive image over the pre-generated derivatives (next.config sets images.unoptimized):
// AVIF first, WebP fallback; the browser downloads exactly one file at the size it needs.
export default function Img({ id, alt, sizes = "100vw", priority = false, className, style, position, ...rest }) {
  const meta = images[id];
  if (!meta) throw new Error(`Unknown image id: ${id}`);
  const largest = meta.widths[meta.widths.length - 1];
  const srcSet = (ext) => meta.widths.map((w) => `/img/${id}-${w}.${ext} ${w}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <img
        src={`/img/${id}-${largest}.webp`}
        srcSet={srcSet("webp")}
        sizes={sizes}
        width={meta.w}
        height={meta.h}
        alt={alt}
        className={className}
        style={position ? { objectPosition: position, ...style } : style}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        {...rest}
      />
    </picture>
  );
}
