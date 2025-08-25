export function LogoTailwind({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
      <mask
        id="tailwind-a"
        width="16"
        height="10"
        x="0"
        y="3"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'luminance' }}
      >
        <path fill="#fff" d="M0 3.09h16v9.818H0z" />
      </mask>
      <g mask="url(#tailwind-a)">
        <path
          fill="#38BDF8"
          fillRule="evenodd"
          d="M8 3.09q-3.2 0-4 3.273 1.2-1.636 2.8-1.228c.609.156 1.044.608 1.525 1.107C9.109 7.057 10.017 8 12 8q3.2 0 4-3.273-1.2 1.636-2.8 1.228c-.609-.156-1.044-.608-1.525-1.107C10.891 4.032 9.983 3.09 8 3.09M4 8Q.8 8 0 11.271q1.2-1.636 2.8-1.228c.609.156 1.044.608 1.525 1.108.784.814 1.692 1.756 3.675 1.756q3.2 0 4-3.273-1.2 1.636-2.8 1.228c-.609-.156-1.044-.607-1.525-1.107C6.891 8.942 5.983 7.999 4 7.999"
          clipRule="evenodd"
        />
      </g>
    </svg>
  )
}
