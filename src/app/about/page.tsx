import { TeamMembers } from '@/util/teamData';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
    return (
        <div className="text-black">
            <div className="flex flex-col justify-center items-center mt-[58px]">
                <h3 className="text-center font-bold text-2xl mb-[100px]">About Us</h3>
                <section className="grid grid-cols-1 sm:grid-cols-2 max-w-[1293px] gap-x-[58px] items-center mx-[43px]">
                    <div className="max-w-[549px] h-auto rounded-[75px] text-[24px] bg-[#61529D] text-[white] mb-[44px]">
                        <p className="p-10 text-[16px] md:text-[24px]">
                            Ember AI is an assistant app designed to help a user craft a well
                            written, complete prompt to use when utilizing an AI platform in seeking
                            information.
                            <br />
                            <br />
                            It is based on the Pentagram method, or framework of crafting a prompt
                            which is composed of five parts.
                        </p>
                    </div>
                    <div className="text-[16px] md:text-[24px]">
                        <div className="flex items-center md:mb-[33px]">
                            <img src="/images/group1.svg" className="h-[30px] md:h-[58px] pr-[17px]" />
                            <p>
                                The Persona defines a role that the LLM, or AI, should assume to
                                give a point of reference for context of it&apos;s response.
                            </p>
                        </div>
                        <div className="flex  items-center md:mb-[33px]">
                            <img src="/images/group2.svg" className="h-[30px] md:h-[58px] pr-[17px]" />
                            <p>
                                The Context gives background information for the LLM to use so that
                                the desired task intent is understood.
                            </p>
                        </div>
                        <div className="flex  items-center md:mb-[33px]">
                            <img src="/images/group3.svg" className="h-[30px] md:h-[58px]  pr-[17px]" />
                            <p>
                                The Task should clearly define what the user is asking of the LLM
                                and should include specific action verbs and instructions.
                            </p>
                        </div>
                        <div className="flex  items-center md:mb-[33px]">
                            <img src="/images/group4.svg" className="h-[30px] md:h-[58px]  pr-[17px]" />
                            <p>
                                The Output should describe the desired format of the response from
                                the LLM.
                            </p>
                        </div>
                        <div className="flex  items-center md:mb-[33px]">
                            <img src="/images/group5.svg" className="h-[30px] md:h-[58px]  pr-[17px]" />
                            <p>
                                The Constraint should list any boundaries or restrictions for the
                                LLM response or describe desired tone if applicable.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <h3 className="text-center font-bold text-2xl my-6"> Meet the team</h3>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
