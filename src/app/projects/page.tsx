import { Badge } from "@/components/badge";
import { Footer } from "@/components/footer";
import { Github, ExternalLink } from "lucide-react";

interface urls {
  live: string;
  github: string;
}

const projectList: {
  title: string;
  url?: urls;
  tags: string[];
  description: string;
}[] = [
  {
    title: "Lumbr",
    url: {
      live: "https://lumbr.app",
      github: "https://github.com/tomshaw650/lumbr",
    },
    tags: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "TRPC"],
    description: "A social web app for discussing software development.",
  },
  {
    title: "Blue Avocado Dashboard",
    tags: ["React", "Spring Boot", "D3", "MySQL", "Docker"],
    description: "A private dashboard for Blue Avocado, a nutrition company.",
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="text-6xl font-bold">projects</h1>
      <h2 className="text-lg mt-2 opacity-60">
        A list of projects I&apos;ve worked on, both in and out of University
      </h2>
      <ul className="flex flex-col gap-y-3">
        {projectList.map((project) => (
          <li
            key={project.title}
            className="flex flex-col gap-y-2 max-w-md mt-5 bg-black border-2 border-white rounded-md p-3"
          >
            <span className="text-3xl font-bold">{project.title}</span>
            <span className="text-lg">{project.description}</span>
            <div className="flex gap-x-3 gap-y-3 flex-wrap">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {project.url && (
              <div className="flex gap-x-5 mt-2">
                <a href="https://github.com/tomshaw650/lumbr">
                  <Github />
                </a>
                <a href="https://lumbr.dev">
                  <ExternalLink />
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
