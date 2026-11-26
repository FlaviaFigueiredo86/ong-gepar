import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Social} from '../components/Layout.jsx';
import {eventos,depoimentos} from '../services/conteudo.js';
export function Calendario() {
  const [mes, setMes] = useState(
    () => new Date().toISOString().slice(0, 7)
  );

  const [ano, m] = mes.split('-').map(Number);
  const inicio = new Date(ano, m - 1, 1).getDay();
  const total = new Date(ano, m, 0).getDate();

  const lista = eventos.filter(
    e => e.data.startsWith(mes)
  );

  return (
    <section className="wrap section">

      <span className="eyebrow">
        FIQUE POR DENTRO
      </span>

      <h1>Calendário de Feiras e Eventos</h1>

      <p>
        Acompanhe as próximas feiras de adoção,
        campanhas e ações da ONG GEPAR.
      </p>

      <label>
        Escolha o mês
        <input
          type="month"
          value={mes}
          onChange={e =>
            e.target.value && setMes(e.target.value)
          }
        />
      </label>

      <div className="calendar">

        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
          .map(d => <strong key={d}>{d}</strong>)}

        {Array.from({ length: inicio }, (_, i) => (
          <div key={'v' + i} />
        ))}

        {Array.from({ length: total }, (_, i) => {
          const dia = i + 1;

          const tem = lista.some(
            e => Number(e.data.slice(-2)) === dia
          );

          return (
            <div
              className={tem ? 'event-day' : ''}
              key={dia}
            >
              {dia}
              {tem && <small> • Feira</small>}
            </div>
          );
        })}

      </div>

      <h2>Próximos eventos</h2>

      {lista.length ? (
        lista.map(e => (
          <article className="extra-card" key={e.id}>

            <h3>{e.titulo}</h3>

            <p>
              📅 {e.data.split('-').reverse().join('/')}
            </p>

            <p>🕒 {e.horario}</p>

            <p>📍 {e.local}</p>

          </article>
        ))
      ) : (
        <div className="calendario-aviso">

          <span className="calendario-icone">📅</span>

          <h2>Em breve, novas datas!</h2>

          <p>
            Nossa próxima programação será divulgada
            assim que as datas e os locais forem
            confirmados.
          </p>

          <p>
            Enquanto isso, acompanhe nosso Instagram
            e fique por dentro das novidades.
          </p>

          <a
            href="https://www.instagram.com/dinaonggepar/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Acompanhe nosso Instagram
          </a>

          <p className="calendario-frase">
            Cada feira é uma nova oportunidade
            de transformar vidas. 🐾
          </p>

        </div>
      )}

    </section>
  );
}
export function Historias(){return <section className="wrap section"><span className="eyebrow">NOVOS COMEÇOS</span><h1>Histórias felizes</h1><p>Um espaço para celebrar os animais que encontraram uma família.</p><div className="cards">{depoimentos.map(d=><article key={d.id}>{d.foto&&<img className="story-photo" src={d.foto} alt={d.animal}/>}<h3>{d.animal}</h3><blockquote>{d.texto}</blockquote><p>{d.tutor}</p></article>)}{!depoimentos.length&&<article><h3>Em breve, histórias reais</h3><p>Os depoimentos e fotos serão publicados após autorização das famílias.</p><Social/></article>}</div></section>}
export function FAQ(){return <section className="wrap section narrow"><h1>Perguntas frequentes</h1>{[['Como posso adotar?','Conheça os animais e envie seu interesse. Confirme os critérios com a ONG.'],['Onde acontecem as feiras?','Consulte o calendário e as redes oficiais.'],['Como preparar minha casa?','Leia o guia de adoção responsável e prepare um ambiente seguro.'],['Como posso ajudar sem adotar?','Divulgue campanhas e consulte a ONG sobre doações e voluntariado.']].map(([q,a])=><details className="extra-card" key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>}
export function Apoio({tipo}) {
     if (tipo === 'voluntario') {
    return (
      <section className="wrap section voluntariado">

        <span className="eyebrow">
          DOE SEU TEMPO, TRANSFORME VIDAS
        </span>

        <h1>Seja um voluntário</h1>

        <p className="voluntario-intro">
          Ser voluntário é transformar amor pelos
          animais em atitudes que fazem a diferença.
          É dedicar um pouco do seu tempo para
          proporcionar cuidado, carinho e esperança
          àqueles que mais precisam.
        </p>

        <p>
          Na ONG GEPAR, cada gesto de solidariedade
          pode contribuir para um futuro melhor
          para os animais. Além de ajudar, o
          voluntariado é uma oportunidade de
          aprender, conhecer pessoas, criar laços
          e fazer parte de uma causa especial.
        </p>

        <h2>Como você pode ajudar?</h2>

        <div className="voluntario-cards">

          <article>
            <span>❤️</span>
            <h3>Carinho e cuidado</h3>
            <p>
              Ajude a proporcionar atenção,
              carinho e bem-estar aos animais.
            </p>
          </article>

          <article>
            <span>🐾</span>
            <h3>Feiras de adoção</h3>
            <p>
              Colabore com eventos e campanhas
              de adoção responsável.
            </p>
          </article>

          <article>
            <span>📢</span>
            <h3>Divulgação</h3>
            <p>
              Compartilhe histórias e ajude
              os animais a encontrarem novos lares.
            </p>
          </article>

          <article>
            <span>🤝</span>
            <h3>Arrecadações</h3>
            <p>
              Colabore com campanhas de doações
              e mobilização da comunidade.
            </p>
          </article>

        </div>

        <div className="voluntario-frase">
          Você não precisa fazer tudo.
          Basta fazer um pouco para transformar
          uma vida.
        </div>

        <div className="voluntario-contato">

          <h2>Venha fazer parte dessa história!</h2>

          <p>
            Entre em contato com a GEPAR para
            conhecer as oportunidades de
            voluntariado e descobrir como você
            pode contribuir. Toda ajuda é bem-vinda!
          </p>

          <p>📍 Esteio, Rio Grande do Sul</p>

          <a
            href="https://wa.me/5551986254367?text=Olá! Gostaria de saber mais sobre o voluntariado na ONG GEPAR."
            target="_blank"
            rel="noreferrer"
            className="btn whatsapp"
          >
            WhatsApp: (51) 98625-4367
          </a>

          <h3>Acompanhe nosso trabalho</h3>

          <Social />

        </div>

      </section>
    );
  }
  const textos = {
    voluntario: [
      'Seja voluntário',
      'Entre em contato para conhecer as atividades e oportunidades de voluntariado.'
    ],
    doacoes: [
      'Faça uma doação',
      'Consulte a ONG sobre necessidades de ração, materiais e contribuições. Confirme os dados de pagamento nos canais oficiais.'
    ],
    contato: [
      'Fale com a GEPAR',
      'Tem dúvidas sobre adoção, doações ou voluntariado? Entre em contato conosco!'
    ]
  };

  const [titulo, descricao] = textos[tipo];

  return (
    <section className="wrap section narrow">

      <h1>{titulo}</h1>
      <p>{descricao}</p>

      <h3>📍 Nossa localização</h3>
      <p>Esteio, Rio Grande do Sul</p>

      <h3>Entre em contato pelo WhatsApp</h3>

      <a
        href="https://wa.me/5551986254367"
        target="_blank"
        rel="noreferrer"
        className="btn whatsapp"
      >
        💬 WhatsApp: (51) 98625-4367
      </a>

      <h3>Acompanhe nossas redes sociais</h3>

      <Social />

    </section>
  );
}
export function Destaques() {
  return (
    <section className="wrap section">

      <h2>Faça parte dessa história</h2>

      <div className="cards">

        <article>
          <h3>Calendário de adoções</h3>
          <p>Confira a programação das feiras.</p>
          <Link to="/calendario">Saiba mais →</Link>
        </article>

        <article>
          <h3>Seja voluntário</h3>
          <p>Doe seu tempo e carinho.</p>
          <Link to="/voluntario">Saiba mais →</Link>
        </article>

        <article>
          <h3>Perguntas frequentes</h3>
          <p>Tire suas dúvidas.</p>
          <Link to="/faq">Saiba mais →</Link>
        </article>

      </div>

    </section>
  );
}