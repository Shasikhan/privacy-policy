"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const apps = [
  {
    name: "Dear Diary",
    description: "Your personal diary secured with love.",
    logo: "dear-diary.png", // Place this in /public
    policyLink: "/dear-diary",
  },
  // Add more apps here in the future
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    padding: "24px",
    marginBottom: "24px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  };

  return (
    <main
      style={{ padding: "40px", background: "#f9f9f9", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "32px",
            color: "#cc3366",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Privacy Policies
        </h1>

        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredIndex === index ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Image
                src={app.logo}
                alt={`${app.name} logo`}
                width={60}
                height={60}
                style={{ borderRadius: "12px", marginRight: "20px" }}
              />
              <div>
                <h2 style={{ fontSize: "24px", margin: 0, color: "#cc3366" }}>
                  {app.name}
                </h2>
                <p style={{ color: "#666", marginTop: "4px" }}>
                  {app.description}
                </p>
              </div>
            </div>

            <Link
              href={app.policyLink}
              style={{
                display: "inline-block",
                backgroundColor: "#cc3366",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Privacy Policy
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
