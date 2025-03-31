"use client";
import { motion } from 'framer-motion';

// Defina uma interface para as propriedades
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

// Componente para os Cards de Projeto
export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
      <a
        href={link}
        className="mt-1 inline-block text-blue-600 hover:underline"
      >
        Ver Detalhes
      </a>
    </motion.div>
  );
}


