import { useState } from "react";
import api from "../api/axios";

export default function Search() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // ⭐ important

  const search = async () => {
    if (!q.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setHasSearched(true); // mark search started

      const res = await api.get(`/search?q=${q}`);
      setResults(res.data.projects || []);
    } catch (err) {
      console.error(err);
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects, skills, tech..."
          className="border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={search}
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Status Messages */}
      {loading && <p className="mt-4 text-gray-500">Searching...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Only show "not found" AFTER search */}
      {!loading && hasSearched && results.length === 0 && (
        <p className="mt-4 text-gray-500">No matching projects found.</p>
      )}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h3 className="font-bold text-blue-600">{p.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{p.description}</p>

            {p.techStack && (
              <div className="flex flex-wrap gap-2 mt-2">
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
    </div>
  );
}



