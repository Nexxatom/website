export default function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1700 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NEXXATOM"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* N */}
      <path
        d="M40 30V150H60V60L150 150H170V30H150V120L60 30H40Z"
        fill="#FFFFFF"
      />

      {/* E */}
      <g fill="#FFFFFF">
        <rect x="240" y="30" width="110" height="14" rx="7" />
        <rect x="240" y="83" width="95" height="14" rx="7" />
        <rect x="240" y="136" width="110" height="14" rx="7" />
      </g>

      {/* X */}
      <g fill="#2563FF">
        <path d="M430 30L490 90L430 150H460L520 90L460 30H430Z" />
        <path d="M610 30L550 90L610 150H580L520 90L580 30H610Z" />
      </g>

      {/* X */}
      <g fill="#2563FF">
        <path d="M650 30L710 90L650 150H680L740 90L680 30H650Z" />
        <path d="M830 30L770 90L830 150H800L740 90L800 30H830Z" />
      </g>

      {/* A */}
      <path
        d="M900 150L980 30L1060 150H1035L980 65L925 150H900Z"
        fill="#FFFFFF"
      />

      {/* T */}
      <g fill="#FFFFFF">
        <rect x="1110" y="30" width="120" height="14" rx="7" />
        <rect x="1163" y="30" width="14" height="120" rx="7" />
      </g>

      {/* O */}
      <rect
        x="1280"
        y="30"
        width="110"
        height="120"
        rx="28"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="14"
      />

      {/* M */}
      <path
        d="M1450 150V30H1470L1540 115L1610 30H1630V150H1610V60L1540 135L1470 60V150H1450Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
