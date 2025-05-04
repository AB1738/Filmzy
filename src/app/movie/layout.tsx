const MovieLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mt-20 min-h-screen w-full md:max-w-7xl mx-auto p-5">
      {children}
    </div>
  );
};
export default MovieLayout;
