import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [message, setMessage] = useState("Fetching backend message...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [healthRes, messageRes] = await Promise.all([
          fetch(`${API_URL}/health`),
          fetch(`${API_URL}/api/message`),
        ]);

        if (!healthRes.ok || !messageRes.ok) {
          throw new Error("API request failed");
        }

        const healthJson = await healthRes.json();
        const messageJson = await messageRes.json();

        setStatus(healthJson.ok ? "Backend Connected" : "Backend Error");
        setMessage(messageJson.message || "No message received");
      } catch (_error) {
        setStatus("Backend Not Reachable");
        setMessage(
          "Could not connect to backend. Check VITE_API_URL and backend deployment."
        );
      }
    };

    fetchData();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <p className="tag">Deploy Test Setup</p>
        <h1>testing-fe</h1>
        <p className="subtitle">Connected with testing-be</p>
        <div className="status-row">
          <span className="label">Status</span>
          <span className="value">{status}</span>
        </div>
        <div className="status-row">
          <span className="label">Message</span>
          <span className="value">{message}</span>
        </div>
        <div className="status-row">
          <span className="label">API URL</span>
          <span className="value">{API_URL}</span>
        </div>
      </section>
    </main>
  );
}

export default App;
