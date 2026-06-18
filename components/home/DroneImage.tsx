import Image from "next/image";
import clsx from "clsx";

/**
 * Reusable drone delivery image component.
 * Uses Unsplash Source for high-quality, free drone delivery photos.
 * All images are optimized via Next.js Image.
 */
interface DroneImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function DroneImage({ src, alt, className, priority }: DroneImageProps) {
  return (
    <div className={clsx("relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}
