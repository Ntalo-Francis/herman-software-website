export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="relative mx-auto mb-6 h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-light"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-teal"></div>
        </div>
        <p className="text-body-sm text-gray-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}