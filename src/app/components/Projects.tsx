import { BiLogoTypescript } from "react-icons/bi"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiJsBadge, DiReact } from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri"
import { SiReactrouter, SiTailwindcss } from "react-icons/si"

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "iCommerce",
      desc: "E-commerce inspirado na Apple. Possui um slider de produtos, detalhes dos produtos e carrinho de compras, com design próprio.",
      img: "/projects/iCommerce.jpg",
      techs: [
        { id: 1, icon: <RiNextjsLine /> },
        { id: 2, icon: <DiReact className="text-[#61dafb]" /> },
        { id: 3, icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { id: 4, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
      ],
      url: "https://github.com/hemilyb/apple-ecommerce"
    },
    {
      id: 2,
      title: "Acme Dashboard",
      desc: "Painel administrativo criado com base na documentação oficial do Next.js, apresentando uma interface moderna e responsiva.",
      img: "/projects/acme.png",
      techs: [
        { id: 1, icon: <RiNextjsLine /> },
        { id: 2, icon: <DiReact className="text-[#61dafb]" /> },
        { id: 3, icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { id: 4, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
      ],
      url: "https://github.com/hemilyb/nextjs-dashboard"
    },
    {
      id: 3,
      title: "Plann.er",
      desc: "Planejador de viagem para definir destino e datas, convidar amigos, adicionar atividades diárias e salvar links importantes.",
      img: "/projects/planner.png",
      techs: [
        { id: 1, icon: <DiReact className="text-[#61dafb]" /> },
        { id: 2, icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { id: 3, icon: <BiLogoTypescript className="text-[#3178c6]" /> }
      ],
      url: "https://github.com/hemilyb/plann.er"
    },
    {
      id: 4,
      title: "Weather",
      desc: "Essa aplicação permite visualizar o clima atual para o local digitado, incluindo informações como velocidade do vento e umidade.",
      img: "/projects/weather.jpg",
      techs: [
        { id: 1, icon: <DiJsBadge className="text-[#f0db4f]" /> },
        { id: 2, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 3, icon: <DiCss3 className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/hemilyb/Weather"
    },
    {
      id: 5,
      title: "Gestor de Estoque",
      desc: "Adicione produtos, defina categorias e monitore itens em falta ou recém-adicionados, facilitando a organização e o controle do inventário.",
      img: "/projects/gestor-estoque.png",
      techs: [
        { id: 1, icon: <DiReact className="text-[#61dafb]" /> },
        { id: 2, icon: <SiReactrouter className="text-[#f44250]" /> },
        { id: 3, icon: <DiCss3 className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/hemilyb/gestao-de-estoque"
    },
    {
      id: 6,
      title: "Quizz JavaScript",
      desc: "Quiz de JavaScript focado em eventos e formulários, projetado para reforçar e praticar alguns conceitos da linguagem de forma interativa.",
      img: "/projects/quizz.png",
      techs: [
        { id: 1, icon: <DiJsBadge className="text-[#f0db4f]" /> },
        { id: 2, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 3, icon: <DiCss3 className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/hemilyb/quizz"
    }
  ]


  return (
    <div className="relative text-white">
      <div className="flex justify-center items-center px-4 text-2xl font-bold py-8">
        <h2 className="">
          Alguns dos meus
          <span className="text-purple"> projetos</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14">
        {projects.map((project) => (
          <div key={project.id}
            className="flex flex-col justify-center sm:w-[570px] w-[80vw]">
            <img src={project.img} alt={project.title}
              className="rounded-3xl hover:translate-x-4 duration-200 hover:border border-white/[0.2]" />
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
                  <p className="flex lg:text-base md:text-xs text-sm">Ver repositório</p>
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