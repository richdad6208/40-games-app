export default function Page() {
  return (
    <div className="relative h-full">
      <video className="relative h-100dvh">
        <source
          className="absolute object-cover"
          src="/videos/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
