import Image from "next/image";

type ProfileImageProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export default function ProfileImage({ src, alt, onClick }: ProfileImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open full photo"
      className="group relative cursor-zoom-in rounded-full focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent-cyan"
    >
      {/* Glow behind the photo: only its opacity changes, which the GPU handles */}
      <span
        aria-hidden
        className="absolute -inset-3 transform-gpu rounded-full bg-gradient-to-tr from-primary via-accent-cyan to-accent-pink opacity-60 blur-2xl transition-opacity duration-300 ease-out will-change-[opacity] group-hover:opacity-90"
      />

      {/* Gradient ring */}
      <span className="relative block rounded-full bg-gradient-to-tr from-primary via-accent-cyan to-accent-pink p-1.5">
        <span className="relative isolate block h-64 w-64 overflow-hidden rounded-full border-4 border-bg sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 320px, 288px"
            className="transform-gpu object-cover object-top transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
          />
        </span>
      </span>
    </button>
  );
}
