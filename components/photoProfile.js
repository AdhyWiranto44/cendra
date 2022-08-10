export default function PhotoProfile({ src, alt }) {
  return (
    <img className="rounded-full" src={src} alt={alt} />
  );
}