interface WorkExperience {
  title: string
  company: string
  period: string
  duration: string
  description: string[]
}

interface ProjectData {
  title: string
  description: string
  techUsed: string[]
  image?: string
  githubLink: string
  projectLink?: string
  inProgress?: boolean
  isPrivate?: boolean
}
