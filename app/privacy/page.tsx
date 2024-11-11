import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Soul AI Agents",
  description: "Privacy Policy and data handling practices for Soul AI Agents",
};

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Soul AI Agents ("we," "our," or "us") is committed to protecting
            your privacy. This &quot;Privacy Policy&quot; explains how we
            collect, use, disclose, and safeguard your information when you use
            our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p>
            We collect information that you provide directly to us when using
            our services, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Account information (name, email, etc.)</li>
            <li>Usage data and interactions with our AI agents</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
