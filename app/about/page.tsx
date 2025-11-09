import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "PostgreSQL", "Ruby"],
    tools: ["Git", "VSCode", "Figma", "Docker"],
    languages: ["English (Native)", "Japanese (Proficient)"]
  };

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Hi! My name is Ged; I am a software developer based in Japan, working for an international company.
              I specialize in building modern, responsive web applications using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              I am a problem-solver: that attracted me to programming and software development. I enjoy working on projects that challenge me to learn new technologies and solve complex problems.
            </p>
            <p className="text-lg text-muted-foreground">
              When I am not coding, I am spending time with my family, playing games, or finding good craft beer.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>Building interactive user interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>Server-side architecture and databases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools & Workflow</CardTitle>
              <CardDescription>Development environment and design</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
              <CardDescription>Communication and collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
