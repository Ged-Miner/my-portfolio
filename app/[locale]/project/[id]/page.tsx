import { getProjectById, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface ProjectPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  const locales = ['en', 'ja'];

  return projects.flatMap((project) =>
    locales.map((locale) => ({
      id: project.id,
      locale: locale,
    }))
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  const t = await getTranslations('Project');

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backButton')}
          </Button>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              {project.category} • {project.date}
            </p>
          </div>

          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Main image placeholder</span>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg">{project.longDescription}</p>
          </div>

          <div className="flex gap-4">
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('viewLive')}
                </Button>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('viewCode')}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
