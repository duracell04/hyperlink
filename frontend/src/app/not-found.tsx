import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">404</h1>
        <p className="text-lg text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-primary underline-offset-2 underline hover:text-primary/80"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}
