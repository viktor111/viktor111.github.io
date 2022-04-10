export interface PersonalData {
    name: string
    imageUrl: string
    description: string
    country: string
    city: string
    birthDay: string
    email: string
    phoneNumber: string
    linkedInLink: string
    githubLink: string
    workExperiance: WorkExperiance[]
  }
  
  export interface WorkExperiance {
    company: string
    position: string
    dateFrom: string
    dateTo: string
    technologies: string[]
    description: string
  }