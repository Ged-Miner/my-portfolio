import { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            {/* Placeholder for image - we'll add real images later */}
            <span className="text-muted-foreground text-sm">Image placeholder</span>
          </div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline">+{project.tags.length - 3}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          {project.category} • {project.date}
        </CardFooter>
      </Card>
    </Link>
  );
}
