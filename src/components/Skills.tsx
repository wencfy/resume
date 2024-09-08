import React from "react";
import { Tag } from "./Tag";

export const Skills: React.FC<{ skills: Array<{ name: string; keywords: string[] }> }> = ({
    skills
}) => {
    return <div className="detail-container">
        <h3 className="detail-title">Skills</h3>
        {skills.map(skill => {
            return <div className="mb-2" key={skill.name}>
                <span className="text-gray-800 mr-4">
                    {skill.name}:
                </span>
                {skill.keywords.map((keyword, i) => <Tag key={i} className="inline-block">{keyword}</Tag>)}
            </div>
        })}
    </div>
}