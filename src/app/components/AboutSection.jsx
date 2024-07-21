"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
        <li>PyTorch</li>
        <li>TensorFlow</li>
        <li>Spring Boot</li>
        <li>Spark</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Golang</li>
        <li>Big Data Analytics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Stony Brook University (MS in CS)</li>
        <li>Manipal Institute of Technology (BS in CS)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.coursera.org/account/accomplishments/verify/WC7QKEVTZKLL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Graph Analytics for Big Data - UC San Diego
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/verify/5ATHGXVAT7F3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
             Big Data Modeling and Management Systems - UC San Diego
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/verify/XNSUNP28VZVR" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
             Big Data Integration and Processing - UC San Diego
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I’m a highly motivated and results-driven software developer with 2 years of experience in distributed data processing and enhancing AI workflows.
           My passion lies in leveraging advanced data engineering techniques to tackle real-world challenges. 
           With a proven track record in optimizing data transfer protocols and integrating AI systems, I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to solve complex problems. My experience in both web development and backend services enables me to bridge the gap between data processing and AI implementation effectively.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
