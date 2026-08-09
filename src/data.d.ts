export type SiteConfig = {
  name: string
  location: string
  email: string
  whatsapp: string
  socialLinks: {
    instagram: string
    github: string
    linkedin: string
  }
}

export type ProjectScreen = {
  image: string
  label: string
  description: string
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  challenge?: string
  focus?: string
  result?: string
  valuePoints?: string[]
  visualTagline?: string
  technologies: string[]
  image?: string
  screens?: ProjectScreen[]
  projectUrl?: string
  repositoryUrl?: string
  status?: string
}

export type NumberedContent = {
  number: string
  title: string
  description: string
  items?: string[]
  outcome?: string
  metric?: string
  marker?: string
}

export type HeroSlide = {
  image: string
  title: string
  label: string
}

export const siteConfig: SiteConfig
export const heroSlides: HeroSlide[]
export const projects: Project[]
export const services: NumberedContent[]
export const principles: NumberedContent[]
export const processSteps: NumberedContent[]
