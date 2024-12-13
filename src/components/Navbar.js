import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Feed Notizie</Link></li>
        <li><Link to="/contesti">Contesti</Link></li>
        <li><Link to="/attori">Attori</Link></li>
        <li><Link to="/articoli">Articoli</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/infografiche">Infografiche</Link></li>
        <li><Link to="/formazione">Formazione</Link></li>
        <li><Link to="/chi-siamo">Chi Siamo</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/risorse">Risorse e Documenti</Link></li>
        <li><Link to="/contattaci">Contattaci</Link></li>
        <li><Link to="/sostienici">Sostienici</Link></li>
        <li><Link to="/profilo">Profilo</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 