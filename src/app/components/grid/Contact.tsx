import { DiGithubBadge } from "react-icons/di"
import { LiaLinkedin } from "react-icons/lia"
import { TfiEmail } from "react-icons/tfi"

export default function Contact() {

  const socialMedias = [
    {
      id: 1,
      img: <DiGithubBadge className="size-7" />,
      link: "https://github.com/BaharHasanova"
    },
    {
      id: 2,
      img: <LiaLinkedin className="size-7" />,
      link: "https://linkedin.com/in/bahar-hasanova"
    },
    {
      id: 3,
      img: <TfiEmail className="size-5" />,
      link: "mailto:khasanovabahar@gmail.com"
    },
  ]

  return (
    
    <div className="flex items-center gap-4 py-4">
      {socialMedias.map((socialMedia) => (
        <a
        href={socialMedia.link}
        target="_blank"
        key={socialMedia.id}
        className="cursor-pointer size-10 flex justify-center items-center 
                  dark:bg-[#10132e] 
                   rounded-lg border border-black/10 dark:border-white/10
                   hover:scale-105 transition-all duration-200"
      >
        <span className="text-black dark:text-white">
          {socialMedia.img}
        </span>
      </a>
      ))}
    </div>

  )
}