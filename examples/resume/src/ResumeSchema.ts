// The following is a schema definition for determining the resume of a some user input.

export interface Resume {
    header: string;  // An appealing title for the resume
    experiences: Experience[];
    educations: Education[];
    skills: Skill[];
}

// work experience at a company with a given role
export interface Experience{
    startDate: string;
    companyName: string;
    role: string;
}

// education of the candidate form university or certification
export interface Education{
    instituationName: string;
    examTitle: string;
    year: string;
}

// Skills of the person with a level of professionalism
export interface Skill{
    name: string;
    level: number;
}

