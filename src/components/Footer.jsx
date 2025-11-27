const Footer = () => {
  return (
    <footer className="bg-rose-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6 text-center md:text-left">
        {/* Logo + Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img
            src="./src/elements/logo.png"
            alt="Logo"
            className="h-16 w-16 rounded-full bg-white p-2"
          />

          <div className="flex gap-3 sm:gap-4">
            <img
              src="./src/elements/fb.avif"
              alt="Facebook"
              className="h-7 rounded-full"
            />
            <img
              src="./src/elements/ig.avif"
              alt="Instagram"
              className="h-7 rounded-full"
            />
            <img
              src="./src/elements/tiktok.png"
              alt="Tiktok"
              className="h-7 rounded-full"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 text-white font-medium">
          <a className="hover:text-rose-100 cursor-pointer">CONTACT US</a>
          <a className="hover:text-rose-100 cursor-pointer">
            TERMS & CONDITION
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
