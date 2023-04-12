import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "../../Shared/Navbar/Navbar";
import pic1 from "../../../Assets/Images/pic1.jpg";
import pic2 from "../../../Assets/Images/pc2.jpg";
import pic3 from "../../../Assets/Images/pic3.jpg";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pic1} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Introduction</h1>
            <p className="py-6 text-base">
            Climate change continues to be one of the most pressing challenges of our time, and innovative solutions are needed to inspire collective action. Enter the Global Treeball League (GTL), the world's first Climate Change NFT-based gaming tournament which aims to gamify the process of plantation and foster a sustainable future through collective action. In this playbook, we'll delve into the world of GTL and explore how we can use this groundbreaking initiative to transform the way we approach reforestation and climate action.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Founder’s Message</h1>
            <p className="py-6 text-base">
            GTL was founded on the principle that creative and engaging approaches are needed to motivate individuals and communities to take part in environmental conservation efforts. By combining the power of blockchain technology, NFTs (non-fungible tokens), AI and gamification, GTL seeks to create a unique platform that incentivizes participation in reforestation initiatives while raising awareness about the importance of addressing climate change.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl font-bold">How It Works ?</h1>
            <p className="py-6 text-base">
            GTL works similar to a sports league. It identifies hosts at the locations where the plantation initiatives are to be conducted and organizes Ecoweek at the host campuses where different GTL Activity Rounds are conducted as per specific guidelines mentioned below. In every season specific number of Ecoweeks are organized. All the Ecoweek participants take part in GTL Activities which ultimately leads to plantation of trees, geocoded at different locations to create an everlasting impact on people and the planet. 
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaTwitter className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Follow us on Twitter
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaFacebook className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Like us on Facebook
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaInstagram className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Follow us on Instagram
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default About;
