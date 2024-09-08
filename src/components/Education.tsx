import React from "react"
import { TimelineElement } from "./TimelineElement";

export const Education: React.FC<{
    education: Array<{
        institution: string;
        url: string;
        area: string;
        studyType: string;
        startDate: string;
        endDate?: string;
        score: string;
    }>;
}> = ({
    education
}) => {
        return <div className="detail-container">
            <h3 className="detail-title">Education</h3>

            <ol className="relative border-s border-gray-200">
                {education.map((edu, i) => {
                    return <TimelineElement
                        key={i}
                        organization={edu.institution}
                        title={`${edu.area}, ${edu.studyType}`}
                        startDate={edu.startDate}
                        endDate={edu.endDate}
                    />
                })}
            </ol>
        </div>
    }