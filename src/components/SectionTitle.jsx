const Arrow = ({ flip = false }) => (
  <svg
    className="section-title__arrow"
    width="64"
    height="16"
    viewBox="0 0 64 16"
    fill="none"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
  >
    <path d="M12 8 L52 8" stroke="#e0a537" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 3 L10 8 L4 13" stroke="#14532d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 2 L58 8 L50 14 Z" fill="#e0a537" />
  </svg>
)

export default function SectionTitle({ children, align = 'center' }) {
  return (
    <div className={`section-title${align === 'left' ? ' section-title--left' : ''}`}>
      <Arrow />
      <h2 className="section-title__text">{children}</h2>
      <Arrow flip />
    </div>
  )
}
