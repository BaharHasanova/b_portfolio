import Contact from "./Contact";
import Skills from "./Skills";

export default function Grid() {
  return (
    <div className="relative text-white grid sm:grid-cols-2 gap-4 p-4 sm:p-14">
      <div className="flex flex-col justify-center rounded-3xl row-span-2 sm:col-span-2 lg:col-span-1 p-4 sm:p-14 bg-pattern bg-no-repeat bg-center border border-white/[0.1]">
        <div className="lg:text-3xl font-semibold text-lg p-4 flex justify-center">
          <h2 className="text-purple items-center">Quem sou eu?</h2>
        </div>
        <div className="space-y-4 min-h-60">
          <p>Curso Análise e Desenvolvimento de Sistemas e meu objetivo é me tornar uma desenvolvedora front-end de alta qualidade. Estou sempre em busca de novas formas de melhorar minhas habilidades e valorizo o aprendizado contínuo.</p>
          <p>
            Sou curiosa e gosto de resolver problemas. Acredito que a tecnologia tem o poder de transformar o mundo e estou animada para fazer parte dessa transformação! :)</p>
        </div>
      </div>

      <div className="rounded-3xl  lg:col-span-1 border border-white/[0.1] bg-darkBlue p-10">
        <Skills />
      </div>

      <div className="bg-pattern bg-no-repeat bg-center rounded-3xl border border-white/[0.1] py-28">
        <div className="flex flex-col items-center space-y-2 font-bold text-lg lg:text-2xl">
          <h2 className="text-purple">Conecte-se Comigo!</h2>
          <span>Você pode me encontrar em:</span>
          <Contact />
        </div>
      </div>

    </div>
  )
}