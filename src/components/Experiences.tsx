import React from "react"
import { Tag } from "./Tag";
import { TimelineElement } from "./TimelineElement";

export const Experiences: React.FC<{
    experiences: Array<{
        company: string;
        position: string;
        url?: string;
        startDate: string;
        endDate?: string;
        location?: string;
        highlights: string[];
    }>;
}> = ({
    experiences
}) => {
        return <div className="detail-container">
            <h3 className="detail-title">Professional Experiences</h3>

            <ol className="relative border-s border-gray-200 text-justify">
                {experiences.map((experience, i) => {
                    return <TimelineElement
                        key={i}
                        organization={experience.company}
                        title={experience.position}
                        url={experience.url}
                        extra={<Tag className="ml-2">Currents</Tag>}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        location={experience.location}
                    >
                        {experience.highlights}
                    </TimelineElement>
                })}
            </ol>
        </div>
    }