import React from "react";
import moment from "moment";
import { GithubIcon } from "./icons";

type TimelineElementProps = {
    organization: string;
    title?: string;
    url?: string;
    description?: string;
    extra?: JSX.Element;
    startDate: string;
    endDate?: string;
    location?: string;
    children?: string | string[];
    presentDesc?: string;
};

const dateFormat = "MMM YYYY";

export const TimelineElement = ({
    organization,
    title,
    url,
    description,
    extra,
    startDate,
    endDate,
    location,
    children,
    presentDesc = 'Present',
}: TimelineElementProps) => {
    const present = !endDate;
    let childNode: Array<React.ReactNode>;
    if (!children) {
        childNode = [];
    } else if (children instanceof Array) {
        childNode = children.map((child, i) => <li key={i}>{child}</li>)
    } else {
        childNode = [<li>{children}</li>];
    }
    return <li className="mb-6 ms-6">
        <span className={`absolute w-2 h-2 ${present ? 'bg-indigo-500' : 'bg-indigo-100'} rounded-full mt-2 ml-0.5 -start-1.5 ring-8 ring-white`} />
        <h3 className="flex items-center mb-1">
            <span
                className={`font-bold text-gray-900 ${url && 'cursor-pointer decoration-1 decoration-dashed underline decoration-gray-400 underline-offset-4 hover:text-indigo-500'}`}
                onClick={() => {
                    if (url) {
                        window.open(url);
                    }
                }}
            >{organization}</span>
            {
                url?.startsWith("https://github.com") &&
                <GithubIcon
                    onClick={() => {
                        window.open(url);
                    }}
                    className="h-4 w-4 ml-2 text-gray-800 cursor-pointer hover:text-indigo-500"
                />
            }
            {title && <span className="ml-2 text-gray-900">{title}</span>}
            {present && extra}
        </h3>
        <time className="flex align-baseline mb-2 text-sm font-normal leading-none text-gray-400">
            {moment(startDate).format(dateFormat)} - {present ? presentDesc : moment(endDate).format(dateFormat)}{location && ` | ${location}`}
        </time>
        {description && description !== "" && description}
        <div className="mb-4 text-base font-normal text-gray-900">
            <ul className="list-[circle] ps-6">
                {childNode}
            </ul>
        </div>
    </li>
}