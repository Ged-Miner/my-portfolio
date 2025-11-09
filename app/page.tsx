import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of my web development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
