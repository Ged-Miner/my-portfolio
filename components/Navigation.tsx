import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:opacity-80 transition-opacity">
            Matthew&apos;s Portfolio
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">
            <Button variant="ghost">{t('projects')}</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">{t('about')}</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">{t('contact')}</Button>
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
