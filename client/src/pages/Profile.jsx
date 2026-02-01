import { useState, useEffect } from "react";
import api from "../api/axios";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/profile").then(res => setProfile(res.data));
  }, []);

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold text-blue-600">{profile.name}</h1>
      <p className="text-gray-500 mb-6">{profile.email}</p>

      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {profile.skills.map(skill => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

