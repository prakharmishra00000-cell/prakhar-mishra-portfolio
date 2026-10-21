import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Web Development — Complete Masterbook (153 Pages)",
  description: "Comprehensive Zero-to-Professional Masterbook covering 20 Volumes and 81 Modules from Computer Fundamentals to Production SaaS and AI Systems.",
};

export default function BookPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#020617" }}>
      <iframe
        src="/book/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Full Stack Web Development Masterbook"
      />
    </div>
  );
}
