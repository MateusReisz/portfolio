"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/projectcard';
import TypingEffect from '../components/typingeffect';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-1xl md:text-1xl font-bold text-black text-ellipsis">
            Mateus Reis | Ciência de Dados e Análises Avançadas
          </h1>
          <div className="space-x-4">
            <Link href="#about" className="text-black text-1xl md:text-1xl hover:text-gray-600">
              Sobre
            </Link>
            <Link href="#projects" className="text-black text-1xl md:text-1xl hover:text-gray-600">
              Projetos
            </Link>
            <Link href="#contact" className="text-black text-1xl md:text-1xl hover:text-gray-600">
              Contato
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen bg-gray-200 flex items-center justify-center bg-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-1 text-1xl md:text-2xl font-bold text-black bg-opacity-50">
              Olá, seja bem-vindo(a).
            </h1>
            <h1 className="mt-8 text-4xl md:text-6xl font-bold text-black bg-opacity-50">
              <TypingEffect text="Mateus Reis | Portfólio" delay={0.001} />
            </h1>
          </div>
          <p className="mt-4 text-xl text-black">Data, Analytics, and AI</p>
          <div className="mt-8">
            <Link
              href="#projects"
              className="hover:shadow-2x1 shadow-lg inline-block bg-black hover:text-black hover:bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Ver Projetos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Sobre Mim */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Sobre Mim</h2>

          {/* Imagem do perfil */}
          <div className="flex justify-center items-center">
            <div className="w-40 h-40 overflow-hidden rounded-full flex mt-8 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="ft-perfil"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-center max-w-2xl mx-auto">
            Sou estudante de Ciência da Computação e entusiasta de Ciência de Dados e Análises Avançadas. Tenho experiência em análise de dados,
            machine learning e visualização de dados. Aprender novas tecnologias é meu hobby!
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white">Projetos</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de Projeto 1 */}
            <ProjectCard
              title="Análise Preditiva de Ações"
              description="Modelo de previsão de preços de ações usando séries temporais."
              link="/projects/stock-prediction"
            />
            {/* Card de Projeto 2 */}
            <ProjectCard
              title="Detecção de Fraudes"
              description="Sistema de detecção de transações fraudulentas usando machine learning."
              link="/projects/fraud-detection"
            />
            {/* Card de Projeto 3 */}
            <ProjectCard
              title="Análise de Sentimentos"
              description="Análise de sentimentos em tweets usando NLP."
              link="/projects/sentiment-analysis"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black">Contato</h2>
          <p className="mt-4 text-gray-700 text-center">
            Entre em contato comigo através dos links abaixo:
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/MateusReisz"
              className="text-black hover:text-gray-600"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mateus-reis-devfull"
              className="text-black hover:text-gray-600"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:mateusreisengc@outlook.com"
              className="text-black hover:text-gray-600"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}