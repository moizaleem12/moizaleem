import { useParams } from "react-router-dom";
import { data } from "../data";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Project() {
  const { id } = useParams();
  const project = data[id];

  if (!project) return <div className="p-4">Project not found</div>;

  return (
    <div className="py-4 md:p-8 ">
      <div className="aspect-video mb-6">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold   ">
          {project.name}
        </h1>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link.includes("behance") ? (
                <FaBehance className="text-blue-600 hover:text-blue-800 text-2xl" />
              ) : (
                <FaGithub className="text-black hover:text-gray-700 text-2xl" />
              )}
            </a>
          )}
      </div>

      <div className="flex flex-col mt-6">
        <h2 className="text-base md:text-xl font-bold">Project Overview</h2>
        {project.description && (
          <p className="text-sm md:text-lg">{project.fulldescription}</p>
        )}
      </div>
      <div className="flex flex-col mt-6">
        <h2 className="text-base md:text-xl font-bold">Stack used </h2>
        {project.description && (
          <ul className="list-disc list-inside text-sm md:text-lg mt-2">
            {project.technologies?.map((technologies, index) => (
              <li key={index}>{technologies}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col mt-6">
        <h2 className="text-base md:text-xl font-bold">Features</h2>
        <ul className="list-disc list-inside text-sm md:text-lg mt-2">
          {project.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
