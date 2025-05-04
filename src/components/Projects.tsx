import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { projects, ProjectType } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center items-center bg-[#222] text-center px-5 border-b border-[#444]"
    >
      {/* 제목 - 실제로 보일 때 애니메이션 */}
      <motion.h2
        className="text-[2.5rem] font-extrabold tracking-wide mb-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }} // 60% 이상 보이면 작동, 1번만
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* 카드 리스트 - 실제로 보일 때 애니메이션 */}
      <motion.div
        className="flex gap-8 max-w-[1100px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#333] w-[300px] rounded-xl shadow-lg flex flex-col overflow-hidden group hover:bg-[#444] transition border border-[#444]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[150px] object-cover"
            />
            <div className="flex-1 flex flex-col justify-center p-5">
              <h3 className="text-[1.5rem] font-bold text-white">
                {project.title}
              </h3>
              <p className="text-[1rem] text-gray-300">{project.description}</p>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
              <button
                onClick={() => {
                  setSelectedProject(project)
                  setSelectedProjectIndex(projects.findIndex(p => p.id === project.id))
                }}
                className="bg-transparent text-white border border-white w-[200px] py-3 rounded-md text-center mb-2 transition hover:bg-white hover:text-[#222]"
              >
                자세히 보기
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white w-[200px] py-3 rounded-md text-center transition hover:bg-white hover:text-[#222]"
              >
                GitHub 바로가기
              </a>
            </div>
          </div>
        ))}
      </motion.div>

      <ProjectDetail
        project={selectedProject}
        projectIndex={selectedProjectIndex}
        onClose={() => {
          setSelectedProject(null)
          setSelectedProjectIndex(null)
        }}
      />
    </section>
  );
};

export default Projects;
