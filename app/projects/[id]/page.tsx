"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ProjectDetailPageProps {
    params: {
        id: string;
    };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
    const { id } = params; // Acessando normalmente
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-1xl md:text-1xl font-bold text-black text-ellipsis">
                        Mateus Reis | Ciência de Dados e Análises Avançadas
                    </h1>
                    <div className="space-x-4">
                        <Link href="/#about" className="text-black text-1xl md:text-1xl hover:text-gray-600">
                            Sobre
                        </Link>
                        <Link href="/#projects" className="text-black text-1xl md:text-1xl hover:text-gray-600">
                            Projetos
                        </Link>
                        <Link href="/#contact" className="text-black text-1xl md:text-1xl hover:text-gray-600">
                            Contato
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">{project.title}</h1>
                        <p className="text-xl text-gray-700 mb-8">{project.description}</p>
                        <div className="flex justify-center mb-8">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={450}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div
                            className="prose max-w-2xl mx-auto text-left"
                            dangerouslySetInnerHTML={{ __html: project.content }}
                        />
                        <div className="mt-8">
                            <Link
                                href="/#projects"
                                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
                            >
                                Voltar para Projetos
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-black">Contato</h2>
                    <p className="mt-4 text-gray-700 text-center">
                        Entre em contato comigo através dos links abaixo:
                    </p>
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="https://github.com/MateusReisz" className="text-black hover:text-gray-600">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/mateus-reis-devfull" className="text-black hover:text-gray-600">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:mateusreisengc@outlook.com" className="text-black hover:text-gray-600">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailPage;
