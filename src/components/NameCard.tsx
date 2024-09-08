import React from "react";
import { GithubIcon, LinkedInIcon } from "./icons";

export const NameCard: React.FC<{
    value: {
        name: string;
        label: string;
        email: string;
        phone: string;
        location: {
            address: string;
            postalCode: string;
            city: string;
            countryCode: string;
            region: string;
        };
        profiles: Array<{
            network: string;
            username: string;
            url: string;
        }>;
    }
}> = ({
    value: {
        name, label, email, phone, location, profiles
    }
}) => {
        return <div className="top-4 self-start p-4 mx-auto grid place-items-center md:block md:p-8 md:max-w-52 md:shrink-0 md:sticky lg:max-w-none">
            <h3 className="text-gray-900 font-bold text-2xl">{name}</h3>
            <div className="text-indigo-500 mb-2">{label}</div>
            <div>
                <span className="info-text href-text">
                    <a href={`mailto:${email}`} itemProp="email">
                        {email}
                    </a>
                </span>
            </div>
            <div>
                <span className="info-text href-text">
                    <a href={`tel://${phone}`} itemProp="telephone">
                        {phone}
                    </a>
                </span>
            </div>
            <div>
                <span className="info-text">
                    {location.city}, {location.region}, {location.countryCode}
                </span>
            </div>
            <div className="flex">
                {
                    profiles.map(profile => {
                        switch (profile.network.toLowerCase()) {
                            case 'github': {
                                return <GithubIcon
                                    key='github'
                                    onClick={() => {
                                        window.open(profile.url);
                                    }}
                                    className="h-4 w-4 mt-4 mr-4 text-gray-800 cursor-pointer hover:text-indigo-500" />
                            }
                            case 'linkedin': {
                                return <LinkedInIcon
                                    key='linkedin'
                                    onClick={() => {
                                        window.open(profile.url);
                                    }}
                                    className="h-4 w-4 mt-4 mr-4 text-gray-800 cursor-pointer hover:text-indigo-500" />
                            }
                            default: {
                                console.error(`${profile.network} is not supported!`);
                                return <></>
                            }
                        }
                    })
                }
            </div>
        </div>
    }