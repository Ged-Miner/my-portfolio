import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('About');

  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    tools: ["Git", "VS Code", "Figma", "Docker"],
    languages: ["English (Native)", "Japanese (Proficient)"]
  };

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              {t('intro')}
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              {t('passion')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('personal')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('frontend')}</CardTitle>
              <CardDescription>{t('frontendDesc')}</CardDescription>
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
              <CardTitle>{t('backend')}</CardTitle>
              <CardDescription>{t('backendDesc')}</CardDescription>
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
              <CardTitle>{t('tools')}</CardTitle>
              <CardDescription>{t('toolsDesc')}</CardDescription>
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
              <CardTitle>{t('languages')}</CardTitle>
              <CardDescription>{t('languagesDesc')}</CardDescription>
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
