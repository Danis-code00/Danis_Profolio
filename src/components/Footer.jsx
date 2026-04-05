const Footer = () => {
  return (
    <footer id="mac-footer" className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-1 text-[11px] text-white/40 select-none z-40">
      <p>© {new Date().getFullYear()} Danis Rai</p>
      <p>·</p>
      <p>Built with React &amp; GSAP</p>
    </footer>
  );
};

export default Footer;
