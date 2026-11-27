
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const pdf =
  import.meta.env.BASE_URL + "Guia-de-Adocao-Responsavel-ONG-Gepar.pdf";

export function Social() {
  return (
    <div className="social">
      <a
        href="https://www.instagram.com/dinaonggepar/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="nav wrap">
        <Link className="brand" to="/">
          <img
            src={import.meta.env.BASE_URL + "logo-gepar.jpg"}
            alt="Logo ONG GEPAR"
          />

          <span className="brand-text">
  <strong className="titulo-gepar">ONG GEPAR</strong>
  <small className="subtitulo-gepar">
    Grupo Esteiense de Proteção aos Animais de Rua
  </small>
</span>
        </Link>

        <button
          className="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>

        <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/animais">Adote</NavLink>
          <NavLink to="/sobre">Sobre nós</NavLink>
          <NavLink to="/guia">Guia de adoção</NavLink>
          <NavLink to="/historias">Histórias</NavLink>
          <NavLink to="/ajudar">Como ajudar</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer">
        <div>
          <h2>ONG GEPAR</h2>
          <p>Grupo Esteiense de Proteção aos Animais de Rua</p>
          <p>Esteio, Rio Grande do Sul</p>
          <p>
            Salvar um animal não muda o mundo inteiro, mas muda a vida dele.
          </p>
        </div>

        <div>
          <h3>Acompanhe nosso trabalho</h3>
          <Social />
          <a
            href="https://wa.me/5551986254367"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            💬 WhatsApp: (51) 98625-4367
          </a>
        </div>
      </div>
    </footer>
  );
}
