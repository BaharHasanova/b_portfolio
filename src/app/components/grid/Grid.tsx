import Contact from "./Contact";
import Skills from "./Skills";

export default function Grid() {
  return (
    <div className="relative text-black dark:text-white grid sm:grid-cols-2 gap-4 p-4 sm:p-14">

      {/* Box 1: About Me */}
      <div id="about" className="flex flex-col justify-center rounded-3xl row-span-2 sm:col-span-2 lg:col-span-1 p-4 sm:p-14 dark:bg-darkBlue bg-pattern bg-no-repeat bg-center border border-black/10 dark:border-white/10 relative">
        <div className="lg:text-3xl font-semibold text-lg p-4 flex justify-center">
          <h2 className="text-purple items-center">Who am I?</h2>
        </div>
        <div className="space-y-4 min-h-60">
          <p className="text-justify">
          I am a software engineer with a passion for building clean, user-friendly applications that make a real impact. I enjoy solving complex problems through elegant, maintainable code and always strive to keep learning and improving. My goal is to grow as a front-end developer and contribute to meaningful projects that enhance everyday experiences.
          </p>
          </div>
          <div className="flex justify-center pt-6 relative z-10">
            <button
              type="button"
              onClick={() => alert("🚧 Under construction... or am I just mysterious? 🤔")}
              className="bg-purple text-white font-semibold px-6 py-2 rounded-xl hover:bg-purple/90 transition-all duration-300 cursor-pointer active:scale-95 relative z-10 hover:shadow-lg"
            >
              Know Me Beyond Code
            </button>
          </div>
      </div>

      {/* Box 2: Skills */}
      <div id="skills" className="rounded-3xl lg:col-span-1 dark:bg-darkBlue border border-black/10 dark:border-white/10 p-10">
        <Skills />
      </div>

      {/* Box 3: Contact */}
      <div id="contact" className="dark:bg-darkBlue bg-pattern bg-no-repeat bg-center rounded-3xl border border-black/10 dark:border-white/10 py-28">
        <div  className="flex flex-col items-center space-y-2 font-bold text-lg lg:text-2xl">
          <h2 className="text-purple">Connect With Me!</h2>
          <span>You can find me at:</span>
          <Contact />
        </div>
      </div>

    </div>
  );
}