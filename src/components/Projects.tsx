import React from "react"
import { Tag } from "./Tag";
import { TimelineElement } from "./TimelineElement";

export const Projects: React.FC<{
    projects: Array<{
        name: string;
        url?: string;
        description?: string;
        startDate: string;
        endDate?: string;
        location?: string;
        highlights: string[];
    }>;
}> = ({
    projects
}) => {
        return <div className="detail-container">
            <h3 className="detail-title">Projects</h3>

            <ol className="relative border-s border-gray-200 text-justify">
                {projects.map((project, i) => {
                    return <TimelineElement
                        key={i}
                        organization={project.name}
                        url={project.url}
                        description={project.description}
                        extra={<Tag className="ml-2">Current</Tag>}
                        startDate={project.startDate}
                        endDate={project.endDate}
                        location={project.location}
                    >
                        {project.highlights}
                    </TimelineElement>
                })}
            </ol>
        </div>
    }