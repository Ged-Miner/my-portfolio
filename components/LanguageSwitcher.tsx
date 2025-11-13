"use client";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = params.locale as string;

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Remove the current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '');

    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={currentLocale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLocale("en")}
      >
        EN
      </Button>
      <Button
        variant={currentLocale === "ja" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLocale("ja")}
      >
        日本語
      </Button>
    </div>
  );
}
