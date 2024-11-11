import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Soul AI Agents",
  description: "Terms of Service and usage guidelines for Soul AI Agents",
};

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 gradient-text">
        Terms of Service
      </h1>

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
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using Soul AI Agents services, you agree to be
            bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily access Soul AI Agents services
            for personal or business use, subject to the following restrictions:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>You must not modify or copy our proprietary material</li>
            <li>You must not use the service for any illegal purpose</li>
            <li>
              You must not attempt to decompile or reverse engineer any software
            </li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
