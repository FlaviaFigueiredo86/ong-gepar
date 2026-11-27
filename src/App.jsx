import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Header, Footer } from './components/Layout.jsx';

import {
  Historias,
  FAQ,
  Apoio
} from './pages/Extras.jsx';

import {
  Home,
  Animais,
  Detalhes,
  Adocao,
  Sobre,
  Guia,
  Ajudar
} from './pages/Pages.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/animais" element={<Animais />} />

          <Route path="/animais/:id" element={<Detalhes />} />

          <Route path="/adocao" element={<Adocao />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/guia" element={<Guia />} />

          <Route path="/ajudar" element={<Ajudar />} />

          <Route path="/historias" element={<Historias />} />

          <Route path="/faq" element={<FAQ />} />

          <Route
            path="/voluntario"
            element={<Apoio tipo="voluntario" />}
          />

          <Route
            path="/doacoes"
            element={<Apoio tipo="doacoes" />}
          />

          <Route
            path="/contato"
            element={<Apoio tipo="contato" />}
          />

          <Route
            path="*"
            element={
              <section className="wrap section">
                <h1>Página não encontrada</h1>
                <Link to="/">Voltar ao início</Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}