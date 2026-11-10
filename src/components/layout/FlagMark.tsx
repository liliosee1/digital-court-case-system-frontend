export function FlagMark({className=''}:{className?:string}) {
  const rays = Array.from({length: 24}, (_, index) => {
    const angle = (index * 15 - 90) * Math.PI / 180;
    const cx = 2.46;
    const cy = 0.5;
    const innerRadius = 0.11;
    const outerRadius = 0.2;

    return {
      x1: cx + Math.cos(angle) * innerRadius,
      y1: cy + Math.sin(angle) * innerRadius,
      x2: cx + Math.cos(angle) * outerRadius,
      y2: cy + Math.sin(angle) * outerRadius,
    };
  });

  return (
    <svg
      viewBox="0 0 3 2"
      aria-label="Rwanda flag"
      role="img"
      className={`h-5 w-8 shrink-0 ${className}`}
    >
      <rect width="3" height="1" fill="#00A2E0" />
      <rect y="1" width="3" height="0.5" fill="#FAD201" />
      <rect y="1.5" width="3" height="0.5" fill="#20603D" />
      {rays.map((ray, index) => (
        <line
          key={index}
          {...ray}
          stroke="#E5BE01"
          strokeWidth="0.014"
          strokeLinecap="round"
        />
      ))}
      <circle cx="2.46" cy="0.5" r="0.105" fill="#E5BE01" />
    </svg>
  );
}
