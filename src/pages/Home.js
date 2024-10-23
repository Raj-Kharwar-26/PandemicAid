import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
import api from "../services/api";
import PandemicCard from "../components/PandemicCard";
import Modal from "../components/Modal";

export default function Home() {
  const [pandemics, setPandemics] = useState([
    {
      id: 1,
      name: "Pandemic 1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://asset.gallup.com/p/POLL/3d4a65dd-f292-4a03-84f4-732aab5e0275.jpg",
    },
    {
      id: 2,
      name: "Pandemic 2",
      details:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
      image: "https://asset.gallup.com/p/POLL/3d4a65dd-f292-4a03-84f4-732aab5e0275.jpg",
    },
    {
      id: 3,
      name: "Pandemic 3",
      details:
        "Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.",
      image: "https://asset.gallup.com/p/POLL/3d4a65dd-f292-4a03-84f4-732aab5e0275.jpg",
    },
    {
      id: 4,
      name: "Pandemic 4",
      details:
        "Etiam faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur ultricies nisl id nunc accumsan id vulputate urna aliquet. Donec dignissim massa eu justo pretium tincidunt.",
      image: "https://asset.gallup.com/p/POLL/3d4a65dd-f292-4a03-84f4-732aab5e0275.jpg",
    },
  ]);

  useEffect(() => {
    fetchPandemics();
  }, []);

  const fetchPandemics = async () => {
    try {
      const response = await api.getPandemics();
      setPandemics(response.data);
    } catch (error) {
      console.error("Error fetching pandemics:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Pandemic Aid
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Stay informed about current pandemics and support global efforts to
            combat them.
          </p>
          <div className="mt-10">
            <Link
              to="/ngos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
            >
              Support NGOs
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Current Pandemics
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Learn about ongoing pandemics and how you can help combat their
            spread and impact.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pandemics.map((pandemic) => (
            <PandemicCard
              key={pandemic.id}
              pandemic={pandemic}
            />
          ))}
        </div>

        {pandemics.length === 0 && (
          <div className="text-center mt-12">
            <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No pandemics
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              There are currently no pandemics listed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
