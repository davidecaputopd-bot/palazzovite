export default function BrandMark({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <img
      src="/images/brand/palazzo-vite-logo.svg"
      alt=""
      aria-hidden="true"
      className={className}
      style={{
        filter: light ? "invert(1)" : "none",
      }}
    />
  );
}
