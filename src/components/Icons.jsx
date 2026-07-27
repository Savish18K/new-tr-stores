// Shared inline SVG icons — gold line style matching the reference
export const PhoneIcon = ({ size = 20, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" fill={color}/>
    <path d="M15 4.5c2.5.7 4 2.2 4.6 4.6M15.4 1c3.6.9 6.6 3.9 7.4 7.5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const WhatsAppIcon = ({ size = 20, color = '#4fce5d', bg = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {bg && <circle cx="12" cy="12" r="12" fill={color} />}
    <path
      d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2.2 21.8l5-1.3c1.4.8 3.1 1.2 4.8 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2zm0 17.8c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 7 4zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.2-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.2 3.9 1.2 2 2.7 3.4 4.8 4.3 1.9.8 2.6.6 3.2.5.7-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2z"
      fill={bg ? '#fff' : color}
    />
  </svg>
)

export const MailIcon = ({ size = 20, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
    <path d="M3.5 7l8.5 6 8.5-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const TruckIcon = ({ size = 26, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 26 22" fill="none" aria-hidden="true">
    <path d="M1 3.5h14v11H1z" fill={color}/>
    <path d="M15 7h4.5l3.5 4v3.5h-8V7z" fill={color} opacity="0.85"/>
    <circle cx="6" cy="17" r="2.6" fill="#fff" stroke={color} strokeWidth="1.6"/>
    <circle cx="19" cy="17" r="2.6" fill="#fff" stroke={color} strokeWidth="1.6"/>
  </svg>
)

export const UserIcon = ({ size = 30, color = '#222' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.7"/>
    <path d="M4.5 20c1-3.6 4-5.5 7.5-5.5s6.5 1.9 7.5 5.5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)

export const HeartIcon = ({ size = 30, color = '#222', fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
    <path
      d="M12 20.3S3.5 15.1 3.5 9.2C3.5 6.3 5.8 4 8.6 4c1.9 0 3.1 1 3.4 2.1C12.3 5 13.5 4 15.4 4c2.8 0 5.1 2.3 5.1 5.2 0 5.9-8.5 11.1-8.5 11.1z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

export const CartIcon = ({ size = 32, color = '#222' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2.5 3.5h3l2.4 12.2c.15.75.8 1.3 1.57 1.3h8.9c.74 0 1.38-.51 1.55-1.23L21.8 8H6.3" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="20.6" r="1.6" fill={color}/>
    <circle cx="18" cy="20.6" r="1.6" fill={color}/>
  </svg>
)

export const SearchIcon = ({ size = 22, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.5" stroke={color} strokeWidth="2.2"/>
    <path d="M15.6 15.6L21 21" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

export const ChevronDown = ({ size = 12, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 1.5L6 6.5L11 1.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const StarIcon = ({ size = 18, color = '#fbb527' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 1.8l3.1 6.4 7 1-5 5 1.2 7-6.3-3.3L5.7 21.2l1.2-7-5-5 7-1z"/>
  </svg>
)

export const PinIcon = ({ size = 22, color = '#e0a537', filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"
      fill={filled ? color : 'none'}
      stroke={color}
      strokeWidth="1.8"
    />
    <circle cx="12" cy="9" r="2.6" fill={filled ? '#0b4823' : 'none'} stroke={filled ? 'none' : color} strokeWidth="1.8"/>
  </svg>
)

export const GlobeIcon = ({ size = 20, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.7"/>
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" stroke={color} strokeWidth="1.7"/>
  </svg>
)

export const CalendarIcon = ({ size = 15, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth="1.8"/>
    <path d="M3 10h18M8 2.5V6M16 2.5V6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const QuoteIcon = ({ size = 40, color = '#e0a537' }) => (
  <svg width={size} height={size} viewBox="0 0 40 32" fill={color} aria-hidden="true">
    <path d="M0 32V20.8C0 9.6 5.9 2.4 15.7 0l2 4.6C11.4 7 8 11 7.6 16H16v16H0zm24 0V20.8C24 9.6 29.9 2.4 39.7 0l2 4.6C35.4 7 32 11 31.6 16H40v16H24z" transform="scale(0.95)"/>
  </svg>
)

export const LeafIcon = ({ size = 34, color = '#136931' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.5 3.5C12 3.5 5 7.5 4 15c-.4 3 .5 5.5.5 5.5S6 21 9 20.5c7.5-1.2 11.5-8.5 11.5-17z" fill={color}/>
    <path d="M5.5 19.5C9 13 14 8.5 19 6" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

export const MedalIcon = ({ size = 34, color = '#136931' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="9" r="6" stroke={color} strokeWidth="1.9"/>
    <path d="M12 6l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2L8.8 8.3 11 8z" fill={color}/>
    <path d="M8.5 14L7 21l5-2.6L17 21l-1.5-7" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SupportIcon = ({ size = 34, color = '#136931' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12a8 8 0 0 1 16 0" stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
    <rect x="2.5" y="11.5" width="4" height="7" rx="2" fill={color}/>
    <rect x="17.5" y="11.5" width="4" height="7" rx="2" fill={color}/>
    <path d="M19.5 18.5c0 2-1.8 3-4.5 3" stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
)
