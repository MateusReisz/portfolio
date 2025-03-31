// app/projects/page.tsx

import React from 'react';
import { projects } from '../../data/projects';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <h1>Lista de Projetos</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400} // Defina a largura desejada
                            height={300} // Defina a altura desejada
                            className="project-image"
                        />
                        <Link href={`/projects/${project.id}`} className="project-link">
                            Ver mais
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;