"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Apache Arrow Communicator Framework",
    description: "This project enhances data communication between HDFS and GPU analytics clusters using Apache Arrow and gRPC, enabling real-time analysis of over 2 billion tweets for the World Well-Being Project. By optimizing SQL queries and ETL tasks with Spark, it supports the development of a real-time mental health analysis application",
    image: "/images/projects/arrow.png",
    tag: ["All", "ML/Data"],
    gitUrl: "https://github.com/ojasdeshpande10/client_arrow_flight",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "RAG based chatbot application",
    description: "This project integrates NVIDIA NIM endpoints to harness powerful NLP capabilities, enabling a Retrieval-Augmented Generation (RAG) system. Users can upload documents to create embeddings, which are then accessible through a conversational interface, allowing for dynamic interactions with the uploaded content.",
    image: "/images/projects/5.png",
    tag: ["All", "ML/Data","Fullstack"],
    gitUrl: "https://github.com/ojasdeshpande10/document_retrieval_system_RAG",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ResNet Image Classifier",
    description: "This project implements a Residual Neural Network (ResNet) model to classify images from the CIFAR-10 dataset. The implementation showcases the effectiveness of ResNets in handling the vanishing gradients problem in deep neural networks, thus allowing the training of very deep networks.",
    image: "/images/projects/resnet.png",
    tag: ["All", "ML/Data"],
    gitUrl: "https://github.com/ojasdeshpande10/ResNet",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Language Model with Attention Mechanism ",
    description: "This project integrates LSTM networks with the attention mechanism to enhance sequence modeling. It improves handling of long-range dependencies and captures rich contextual representations, optimizing tasks like machine translation and text summarization. The attention mechanism also enhances interpretability by highlighting influential input segments and providing valuable insights into the model's behavior.",
    image: "/images/projects/lstm.png",
    tag: ["All", "ML/Data"],
    gitUrl: "https://github.com/ojasdeshpande10/LSTM_with_attention_mechanism",
    previewUrl: "https://drive.google.com/file/d/1ZQ2mP2HG0S8tz5lj3l3a7jf_Mh4hs0K_/view",
  },

   
  {
    id: 3,
    title: "CryptoShield- Networking Project",
    description: "CryptoShield is a robust \"jump\" proxy designed to add an additional layer of encryption and security to publicly accessible TCP services. By acting as an intermediary, Jumproxy decrypts traffic using a symmetric key before relaying it to the intended service. This prevents attackers from exploiting potential zero-day vulnerabilities in the protected service unless they have the secret key.",
    image: "/images/projects/cyb.jpeg",
    tag: ["All","Backend"],
    gitUrl: "https://github.com/ojasdeshpande10/Crypto_Shield",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "PortSleuth- Networking Project",
    description: "synprobe is a versatile TCP service fingerprinting tool designed for cybersecurity enthusiasts and network administrators. This tool combines the capabilities of a simple TCP SYN scan and service detection to provide detailed information about the services running on a host. It operates similarly to nmap -sS and nmap -sV, identifying open ports and gathering additional service information.",
    image: "/images/projects/cyb.jpeg",
    tag: ["All","Backend"],
    gitUrl: "https://github.com/ojasdeshpande10/Port_Scanner",
    previewUrl: "/",
  },

  // {
  //   id: 5,
  //   title: "RAG based chatbot application",
  //   description: "This project integrates NVIDIA NIM endpoints to harness powerful NLP capabilities, enabling a Retrieval-Augmented Generation (RAG) system. Users can upload documents to create embeddings, which are then accessible through a conversational interface, allowing for dynamic interactions with the uploaded content.",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "ML/Data"],
  //   gitUrl: "https://github.com/ojasdeshpande10/document_retrieval_system_RAG",
  //   previewUrl: "/",
  // }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML/Data"
          isSelected={tag === "ML/Data"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
