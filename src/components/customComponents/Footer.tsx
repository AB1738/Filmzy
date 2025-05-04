const Footer = () => {
  return (
    <footer className="p-5 flex justify-center items-center">
      <p className="text-xs">
        Filmzy &copy; {new Date().getFullYear()}. Made with Next.js
      </p>
    </footer>
  );
};
export default Footer;
