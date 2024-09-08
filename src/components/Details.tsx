import React from "react"
import { About } from "./About";
import { Skills } from "./Skills";
import { Experiences } from "./Experiences";
import { Education } from "./Education";
import { Projects } from "./Projects";

export const Details: React.FC<{
    basics: {
        summary: string;
    };
    skills: Array<{ name: string; keywords: Array<string> }>;
    work: Array<{
        company: string;
        position: string;
        url?: string;
        startDate: string;
        endDate?: string;
        location?: string;
        highlights: string[];
    }>;
    education: Array<{
        institution: string;
        url: string;
        area: string;
        studyType: string;
        startDate: string;
        endDate?: string;
        score: string;
    }>;
    projects: Array<{
        name: string;
        url?: string;
        startDate: string;
        endDate?: string;
        location?: string;
        highlights: string[];
    }>;
}> = ({
    basics: {
        summary
    },
    skills,
    work,
    education,
    projects,
}) => {
        return <div className="p-8 max-w-3xl">
            <About text={summary} />
            <Skills skills={skills} />
            <Experiences experiences={work} />
            <Projects projects={projects} />
            <Education education={education} />
        </div>
    }