// import "./App.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="Header__logo">
        <h2 className="Header__title">Empresa XYZ</h2>
      </div>
      <nav className="Header__nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="Header__search">
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit">Buscar</button>
      </div>
    </div>
  );
}

export default Header;
