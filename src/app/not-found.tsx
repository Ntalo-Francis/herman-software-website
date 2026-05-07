import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-navy">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-charcoal">Page Not Found</h2>
        <p className="mb-6 text-charcoal">The page you're looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="rounded-md bg-teal px-6 py-2 text-white hover:bg-teal-dark transition-colors inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}