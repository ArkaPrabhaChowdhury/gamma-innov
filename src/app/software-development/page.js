import React from "react";
import Contact from "../Contact";
import Bottom from "../Bottom";
import Portfolio from "../Portfolio";
import ContactForm from "../ContactForm";
import { AiOutlineSolution, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import Featured from "../Featured";
import Navbar from "../Navbar";

export const metadata = {
  title:
    "Gamma Innovations - Software Development Solutions",
  description:
  "Get innovative software development solutions with Gamma Innovations. Empower your business with cutting-edge software tailored to your needs!",
  keywords: [
    "Gamma Innovations",
    "web development",
    "app development",
    "software development",
    "digital marketing",
    "tech consultancy",
  ],
  metadataBase: new URL('https://www.gammainnovations.com'),
  alternates:{
    canonical: '/software-development',
  },
  openGraph: {
    title:'Gamma Innovations - Software Development Solutions',
    description: "Get innovative software development solutions with Gamma Innovations. Empower your business with cutting-edge software tailored to your needs!",
    url: 'https://www.gammainnovations.com/software-development',
    type: 'website',
    siteName: 'Gamma Innovations',
    images: '/gamma.svg',
  },
};

const SoftwareDevelopmentPage = () => {
  return (
    <div>
      <Navbar service={true} />
      <div>
        <section className="text-gray-600 body-font bg-white pb-12">
          <div className="container px-5 py-6 md:py-24 mx-auto">
            <div className="text-center md:mb-20">
              <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
                Software Development
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Tailored ERP, Billing, User Management, HR, and Supply Chain
                Systems
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap lg:px-24 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
                <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                    <AiOutlineSolution className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      ERP Solutions
                    </h2>
                    <p className="leading-relaxed text-base">
                      Tailored Enterprise Resource Planning (ERP) systems for
                      streamlining business processes.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                    <MdPayments className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Billing Systems
                    </h2>
                    <p className="leading-relaxed text-base">
                      Customized billing systems for efficient invoicing and
                      payment management.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                    <AiOutlineUsergroupAdd  className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      User Management
                    </h2>
                    <p className="leading-relaxed text-base">
                      User management systems to handle authentication, access
                      control, and user data management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 pt-12 px-6 md:px-0">
                <h1 className="font-bold text-2xl text-center pb-16">
                Schedule a free 30-minute strategy call with our experts! 💻📞
                </h1>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Portfolio />
      <Featured />
      <Contact />
      <Bottom />
    </div>
  );
};

export default SoftwareDevelopmentPage;
