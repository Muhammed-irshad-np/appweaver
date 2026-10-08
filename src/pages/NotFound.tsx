const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">This page isn’t in the lab.</h1>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">
          Back to AppWeavers Labs
        </a>
      </div>
    </div>
  );
};

export default NotFound;
