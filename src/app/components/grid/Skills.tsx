import { BiLogoTypescript } from "react-icons/bi";
import { DiCss3, DiGithubBadge, DiHtml5, DiJsBadge, DiReact, DiSass } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import OrbitingSkills from "../OrbitingSkills";

// export const skills = [
//   {
//     id: "react",
//     name: "React",
//     icon: <DiReact />,
//     color: "text-[#61dafb]",
//     hover: "hover:text-[#00C8FF]"
//   },
//   {
//     id: "next.js",
//     name: "Next.js",
//     icon: <RiNextjsLine />,
//     color: "text-black dark:text-white",
//     hover: "hover:text-gray-700 dark:hover:text-gray-200"
//   },
//   {
//     id: "react-native",
//     name: "React Native",
//     icon: <DiReact />,
//     color: "text-[#61dafb]",
//     hover: "hover:text-[#00C8FF]"
//   },
//   {
//     id: "javascript",
//     name: "JavaScript",
//     icon: <DiJsBadge />,
//     color: "text-[#f0db4f]",
//     hover: "hover:text-[#FFDE00]"
//   },
//   {
//     id: "typescript",
//     name: "TypeScript",
//     icon: <BiLogoTypescript />,
//     color: "text-[#3178c6]",
//     hover: "hover:text-[#007AFF]"
//   },
//   {
//     id: "tailwind",
//     name: "Tailwind",
//     icon: <SiTailwindcss />,
//     color: "text-[#38bdf8]",
//     hover: "hover:text-[#00B1FF]"
//   },
//   {
//     id: "sass",
//     name: "Sass",
//     icon: <DiSass />, color: "text-[#bf4080]",
//     hover: "hover:text-[#DF1E80]"
//   },
//   {
//     id: "css",
//     name: "CSS3",
//     icon: <DiCss3 />,
//     color: "text-[#1572b6]",
//     hover: "hover:text-[#0093FF]"
//   },
//   {
//     id: "html",
//     name: "HTML5",
//     icon: <DiHtml5 />,
//     color: "text-[#e44d26]",
//     hover: "hover:text-[#FF3400]",
//   },
//   {
//     id: "github",
//     name: "Github",
//     icon: <DiGithubBadge />,
//     color: "text-black dark:text-white",
//     hover: "hover:text-gray-700 dark:hover:text-gray-200"
//   },
//   {
//     id: "figma",
//     name: "Figma",
//     icon: <SiFigma />,
//     color: "text-black dark:text-white",
//     hover: "hover:text-gray-700 dark:hover:text-gray-200"
//   }
// ]

// export default function Skills() {


//   return (
//     <>
//       <div className="lg:text-3xl font-semibold text-lg py-6 lg:p-10">
//         <h2>Skills</h2>
//       </div>
//       <div className="grid grid-cols-4 lg:grid-cols-5 gap-4">
//         {skills.map((skill) => (
//           <div
//           key={skill.id}
//           className={`relative flex items-center flex-col gap-1 text-xs opacity-100 text-center ${skill.color} ${skill.hover} duration-200`}
//         >
//           <span className="*:size-10 rounded-lg p-2 bg-gray-100 dark:bg-[#10132e]">{skill.icon}</span>
//           <span>{skill.name}</span>
//         </div>
//         ))}
//       </div>
//     </>
//   )
// }

export default function Skills() {
  return (
    <>
      <div className="lg:text-3xl font-semibold text-lg py-6 lg:p-10">
        <h2>Skills</h2>
      </div>
      <div className="flex justify-center items-center min-h-[400px]">
        <OrbitingSkills />
      </div>
    </>
  );
}