import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <p className="Footer-title">💫 creatorverse</p>
        <span className="Footer-dot">·</span>
        <a
          href="https://github.com/jamesjbustos/creatorverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="Footer-icon" fontSize="small" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
