import { useEffect, useState } from "react";
import api from "../api/axios";

export default function HealthBadge() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkHealth = () => {
      api.get("/health")
        .then(() => setStatus("up"))
        .catch(() => setStatus("down"));
    };

    checkHealth();
    const interval = setInterval(checkHealth, 10000); // auto refresh

    return () => clearInterval(interval);
  }, []);

  const styles = {
    up: { color: "#4CAF50", fontWeight: "bold" },
    down: { color: "#f44336", fontWeight: "bold" },
    checking: { color: "#ff9800", fontWeight: "bold" }
  };

  return (
    <span style={styles[status]}>
      {status === "up" && "🟢 API Live"}
      {status === "down" && "🔴 API Down"}
      {status === "checking" && "🟡 Checking..."}
    </span>
  );
}
