import { cn } from "@/lib/utils";

const GREEN = "#0E8A45";
const RED = "#D8232A";

/**
 * Vector recreation of the B·G Pharma Pakistan wall logo:
 * green pill carrying a white "B" with the Pakistan crescent & star,
 * a red disc with a white "G", a leaf sprouting between them and the
 * two-tone "PHARMA PAKISTAN — PRIORITY TO SERVE HUMANITY" wordmark.
 */
export function BgLogoMark({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <svg
      viewBox={markOnly ? "130 15 300 310" : "0 0 560 480"}
      className={cn("block", className)}
      role="img"
      aria-label="B·G Pharma Pakistan — Priority to Serve Humanity"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green pill behind the B */}
      <rect x="140" y="30" width="172" height="282" rx="86" fill={GREEN} />

      {/* Crescent & star roundel at the top of the pill */}
      <g transform="translate(226 100)">
        <circle r="50" fill="#FFFFFF" />
        <circle r="44" fill={GREEN} />
        <path
          d="M18 -30a31 31 0 1 0 0 60 37 37 0 1 1 0-60z"
          fill="#FFFFFF"
          transform="translate(-6 0)"
        />
        <path
          d="M24 -15 l4.4 10.4 11.3 1 -8.5 7.4 2.5 11.1 -9.7-5.8 -9.7 5.8 2.5-11.1 -8.5-7.4 11.3-1z"
          fill="#FFFFFF"
          transform="translate(6 -2) scale(0.92)"
        />
      </g>

      {/* Leaf sprouting between the letters */}
      <path d="M300 178C270 122 282 56 324 22c-12 58-21 108-24 156z" fill={GREEN} />
      <path
        d="M300 178c3-48 12-98 24-156 30 48 26 118-4 150-7 8-16 11-20 6z"
        fill={RED}
      />

      {/* Red disc behind the G */}
      <circle cx="356" cy="208" r="108" fill={RED} />

      {/* Letters */}
      <text
        x="222"
        y="272"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="186"
        fontWeight="700"
        fill="#FFFFFF"
      >
        B
      </text>
      <text
        x="358"
        y="282"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="206"
        fontWeight="700"
        fill="#FFFFFF"
      >
        G
      </text>

      {/* Wordmark */}
      {!markOnly && (
      <text
        x="280"
        y="396"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="54"
        fontWeight="700"
        letterSpacing="1"
      >
        <tspan fill={RED}>PHARMA </tspan>
        <tspan fill={GREEN}>PAKISTAN</tspan>
      </text>
      )}
      {!markOnly && (
      <text
        x="280"
        y="442"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="29"
        fontWeight="700"
        letterSpacing="1.2"
        fill={GREEN}
      >
        PRIORITY TO SERVE HUMANITY
      </text>
      )}
    </svg>
  );
}
