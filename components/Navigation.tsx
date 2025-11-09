import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:opacity-80 transition-opacity">
            Ged Miner&apos;s Portfolio
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
