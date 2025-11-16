import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center space-y-4">
      <p className="text-sm uppercase tracking-wide text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold">This route isn&apos;t wired up (yet).</h1>
      <p className="text-muted-foreground max-w-md">
        The Hyperlink mock only ships the landing page and the Leak Report demo right now. Pick one of those to keep exploring.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="text-primary underline underline-offset-4">
          Landing page
        </Link>
        <Link href="/demo" className="text-primary underline underline-offset-4">
          Leak report demo
        </Link>
      </div>
    </div>
  );
}
