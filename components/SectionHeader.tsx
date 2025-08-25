export function SectionHeader({ heading, text }: { heading: string; text?: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-sans font-medium text-xs text-faded tracking-[0.02em] uppercase">
        {heading}
      </h2>
      {text && <p className="mt-3 text-md">{text}</p>}
    </div>
  )
}
