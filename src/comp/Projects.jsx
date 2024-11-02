// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Toursaza',
    image: 'https://img.pica-ai.com/image/aigc/alg%26faceswap%26p%263c4b62a1ad52b8568c537c308939eee5_1024_1024.webp', // Replace with your image URL
    description: 'This is a description of Project One.',
  },
  {
    id: 2,
    name: 'CarSale',
    image: 'https://img.pica-ai.com/image/aigc/alg%26faceswap%26p%2666739a675a96909305b3202de5c239e3_1024_1024.webp', // Replace with your image URL
    description: 'This is a description of Project Two.',
  },
  {
    id: 3,
    name: 'Rezin',
    image: 'https://img.pica-ai.com/image/aigc/alg%26faceswap%26p%264795c801edafb9eda66cd4a9bdde652c_1024_1024.webp', // Replace with your image URL
    description: 'This is a description of Project Three.',
  },
  {
    id: 4,
    name: 'Personal Portfolio Web',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your image URL
    description: 'This is a description of Project Four.',
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center py-8 px-4 md:px-8 lg:px-16 mt-20 md:mt-0" id='projects'>
      <h2 className="text-3xl md:text-5xl font-bold text-center md:mb-8 text-[#fdf0d5]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full max-w-5xl">
        {projects.map((project) => (
          <div key={project.id} className="bg-white cursor-pointer md:scale-[1] scale-[.7] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.name} className="w-full h-[250px] object-cover" />
            <div className="p-4 bg-[#780000]">
              <h3 className="text-xl font-semibold text-[#FDF0D5]">{project.name}</h3>
              <p className="text-[#FDF0D5] mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
