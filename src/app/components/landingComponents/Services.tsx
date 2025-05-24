import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  const router = useRouter();

  return (
    <div
      className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      style={{ marginTop: "-150px", borderRadius: "1.5rem" }}
    >
      {/* Services for Professionals */}
      <section className="py-16">
        <h2 className="text-left text-6xl font-bold mb-12">
          Services for Professionals
        </h2>
        <div className="flex flex-col gap-16">
          {/* 1 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Technical News Portals</h3>
                <p className="leading-relaxed">
                  Highly specialized technical news portals providing up-to-date industry insights.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                View News Portals
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>

          {/* 2 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Tailored Industry Insights</h3>
                <p className="leading-relaxed">
                  Create an account to filter content by your interests or subscribe to our biweekly newsletters for curated sector summaries.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                Subscribe Now
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>

          {/* 3 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Company Directories</h3>
                <p className="leading-relaxed">
                  Comprehensive directories of sector companies to facilitate inquiries and connections.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                Explore Directories
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>
        </div>
      </section>

      {/* Services for Companies */}
      <section>
        <h2 className="text-left text-6xl font-bold mt-24 my-12">
          Services for Companies
        </h2>
        <div className="flex flex-col gap-16">
          {/* 1 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Content Agency</h3>
                <p className="leading-relaxed">
                  We create engaging content for your social networks and press releases published in digital media.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                Request Content
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>

          {/* 2 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Request for Quotes</h3>
                <p className="leading-relaxed">
                  Mass distribution of requests with specific characteristics to sector suppliers.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                Send a Request
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>

          {/* 3 */}
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-start max-w-xl mr-12">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Advertising Services</h3>
                <p className="leading-relaxed">
                  Advertising opportunities in our proprietary digital media outlets.
                </p>
              </div>
              <button className="mt-6 w-fit text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md">
                Advertise with Us
              </button>
            </div>
            <div className="w-96 h-96 bg-gray-600 hover:bg-opacity-90 rounded-xl shrink-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
