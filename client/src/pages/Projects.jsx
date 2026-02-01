import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Get full profile and extract projects array
        const res = await api.get("/profile");
        setProjects(res.data.projects || []);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (projects.length === 0)
    return <p className="text-center mt-10">No projects found</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
      {projects.map((p, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
          <p className="text-gray-600 mt-2">{p.description}</p>

          {p.techStack && (
            <div className="flex flex-wrap gap-2 mt-4">
              {p.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
