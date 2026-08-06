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

export type Project = {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  projectUrl: string
  repositoryUrl: string
  status: string
}

export type NumberedContent = {
  number: string
  title: string
  description: string
}

export const siteConfig: SiteConfig
export const projects: Project[]
export const services: NumberedContent[]
export const principles: NumberedContent[]
export const processSteps: NumberedContent[]
