import React from "react"

export const About: React.FC<{ text: string }> = ({
    text
}) => {
    return <div className="detail-container">
        <h3 className="detail-title">About</h3>
        <div className="text-gray-800">
            {text}
        </div>
    </div>
}