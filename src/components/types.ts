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
