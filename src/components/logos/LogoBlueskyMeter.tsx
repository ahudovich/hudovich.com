export function LogoBlueskyMeter(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#logo-bluesky-meter-a)">
        <path
          fill="#2563EB"
          d="M12 0H4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4"
        />
        <mask
          id="logo-bluesky-meter-b"
          width="12"
          height="12"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'luminance' }}
        >
          <path fill="#fff" d="M2 2h12v12H2z" />
        </mask>
        <g
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.15"
          mask="url(#logo-bluesky-meter-b)"
        >
          <path d="M9.8 3.35a5 5 0 1 0 2.85 2.85" />
          <path d="m8.7 7.3 2.8-2.8M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </g>
      </g>
      <defs>
        <clipPath id="logo-bluesky-meter-a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
