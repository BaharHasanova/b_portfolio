import { BiLogoTypescript } from "react-icons/bi"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiJsBadge, DiPython, DiReact } from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri"
import { SiReactrouter, SiTailwindcss } from "react-icons/si"
import Image from 'next/image'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Chill 404 Page",
      desc: "A simple 404 page that can be used in any project",
      img: "/projects/404.png",
      techs: [
        { id: 1, icon: <RiNextjsLine /> },
        { id: 2, icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { id: 3, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
      ],
      url: "https://github.com/BaharHasanova/404-page"
    },
    {
      id: 2,
      title: "Gif Generator",
      desc: "GIF generator that allows users to create custom GIFs from images",
      img: "/projects/gif.png",
      techs: [
        { id: 1, icon: <DiPython className="text-[#3776AB]" /> }
      ],
      url: "https://github.com/BaharHasanova/gif-generator"
    },
    {
      id: 3,
      title: "autoIntro",
      desc: "AutoIntro app that lets users share their preferences, habits, and tastes through a structured profile, generating a unique link for others to explore and instantly discover information",
      img: "/projects/autoIntro.png",
      techs: [
        { id: 1, icon: <RiNextjsLine /> },
        { id: 2, icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { id: 3, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
      ],
      url: "https://github.com/BaharHasanova/autoIntro"
    }
    // {
    //   id: 4,
    //   title: "Moodify",
    //   desc: "Um app para monitorar o bem-estar emocional, permite que os usuários registrem suas notas de humor e identifiquem padrões para cuidar melhor da saúde mental.",
    //   img: "/projects/moodify.jpg",
    //   techs: [
    //     { id: 1, icon: <DiReact className="text-[#61dafb]" /> },
    //     { id: 3, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
    //   ],
    //   url: "https://github.com/hemilyb/moodify"
    // },
    // {
    //   id: 5,
    //   title: "Gestor de Estoque",
    //   desc: "Permite adicionar produtos, organizar categorias e acompanhar itens em falta, tornando o controle de estoque mais fácil e eficiente.",
    //   img: "/projects/gestor-estoque.png",
    //   techs: [
    //     { id: 1, icon: <DiReact className="text-[#61dafb]" /> },
    //     { id: 2, icon: <SiReactrouter className="text-[#f44250]" /> },
    //     { id: 3, icon: <DiCss3 className="text-[#1572b6]" /> }
    //   ],
    //   url: "https://github.com/hemilyb/gestao-de-estoque"
    // },
    // {
    //   id: 6,
    //   title: "EchoBeat",
    //   desc: "Desenvolvido em React, os usuários podem dar notas ao produto com estrelas e deixar comentários, ajudando marcas a coletar feedback e melhorar a experiência dos clientes.",
    //   img: "/projects/echobeat.jpg",
    //   techs: [
    //     { id: 1, icon: <DiReact className="text-[#61dafb]" /> },
    //     { id: 2, icon: <SiTailwindcss className="text-[#38bdf8]" /> }
    //   ],
    //   url: "https://github.com/hemilyb/review-de-produto"
    // }
  ]


  return (
    <div id="projects" className="relative text-black dark:text-white">
      <div className="flex justify-center items-center px-4 text-2xl font-bold py-8">
        <h2 className="">
          Some of my
          <span className="text-purple"> projects</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14">
        {projects.map((project) => (
          <div key={project.id}
            className="flex flex-col justify-center sm:w-[570px] w-[80vw]">
            <Image 
              src={project.img}
              alt={project.title}
              width={500}  // Set appropriate width
              height={300} // Set appropriate height
              loading="lazy"
              className="rounded-lg"
            />
            <h3 className="font-bold lg:text-xl md:text-xl text-base mt-4">
              {project.title}
            </h3>
            <p className="lg:text-base lg:font-normal font-light text-sm">
              {project.desc}
            </p>


            <div className="flex items-center justify-between mt-4 mb-3">
              <div className="flex items-center">
                {project.techs.map((tech, index) => (
                  <div key={tech.id}
                    className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center lg:size-10 size-8"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <span className="*:size-5">{tech.icon}</span>
                  </div>
                ))}
              </div>

              <a href={project.url}
                target="_blank">
                <div className="border flex items-center px-4 py-2 rounded-md text-purple hover:text-white gap-2">
                  <p className="flex lg:text-base md:text-xs text-sm">View repository</p>
                  <DiGithubBadge className="size-5" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}