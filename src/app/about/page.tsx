import { TeamMembers } from '@/util/teamData';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
    return (
        <div className="text-black">
            <h3 className="text-center font-bold text-2xl my-6"> Meet the team</h3>
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {TeamMembers.map((member, idx) => {
                        return (
                            <div
                                className="p-3 rounded text-center flex flex-col justify-center items-center"
                                key={idx}
                            >
                                <Image
                                    src={member.icon}
                                    height={308}
                                    width={222}
                                    alt={member.name}
                                />
                                <span className="text-[20px]">{member.name}</span>
                                <span className="text-[16px]">{member.role}</span>
                                <div className="flex gap-3">
                                    <Link href={member.githubLink}>
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="text-black text-xl"
                                        />
                                    </Link>

                                    <Link href={member.linkedinLink}>
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="text-black text-xl"
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
