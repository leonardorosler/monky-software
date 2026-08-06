import './SectionLabel.css'

type SectionLabelProps = {
  children: string
  tone?: 'light' | 'dark'
}

export function SectionLabel({ children, tone = 'light' }: SectionLabelProps) {
  return <p className={`section-label section-label--${tone}`}>{children}</p>
}
