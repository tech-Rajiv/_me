import { Code, RefreshCcw, Rocket, Wrench, ShieldCheck } from "lucide-react";

const services = [
  { name: "Website Development", icon: <Code size={24} /> },
  { name: "Website ReWorks", icon: <RefreshCcw size={24} /> },
  { name: "Frontend Optimization", icon: <Rocket size={24} /> },
  { name: "Ongoing Maintenance", icon: <ShieldCheck size={24} /> },
  { name: "Bug Fixes & Updates", icon: <Wrench size={24} /> },
];

export default function Services() {
  return (
    <div className="servies py-5 lg:py-1">
      <h2 className="text-lg font-semibold flex "><Wrench className="text-teal-500 w-10" />Services I provide</h2>
      <div className="grid  grid-cols-1 gap-2 lg:grid-cols-3 mt-4 ">
        {services.map((service, index) => (
          <button
            key={index}
            className="flex justify-center gap-3 lg:flex-row text-teal-500 items-center  bg-gray-900 px-5 py-3 rounded-lg shadow text-md font-semibold transition-transform transform hover:bg-[#253041] "
          >
            {service.icon}
            <span className="text-white">{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
