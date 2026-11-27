import React from 'react';
import { Link } from 'react-router-dom';
import { Social } from '../components/Layout.jsx';
import { depoimentos } from '../services/conteudo.js';

export function Historias() {
  return (
    <section className="wrap section">

      <span className="eyebrow">
        NOVOS COMEÇOS
      </span>

      <h1>Histórias felizes</h1>

      <p>
        Um espaço para celebrar os animais que
        encontraram uma família.
      </p>

      <div className="cards">

        {depoimentos.map(d => (
          <article key={d.id}>

            {d.foto && (
              <img
                className="story-photo"
                src={d.foto}
                alt={d.animal}
              />
            )}

            <h3>{d.animal}</h3>
            <blockquote>{d.texto}</blockquote>
            <p>{d.tutor}</p>

          </article>
        ))}

        {!depoimentos.length && (
          <article>

            <h3>Em breve, histórias reais</h3>

            <p>
              Os depoimentos e fotos serão publicados
              após autorização das famílias.
            </p>

            <Social />

          </article>
        )}

      </div>

    </section>
  );
}

export function FAQ() {

  const perguntas = [
    [
      'Como posso adotar um animal?',
      'Acesse a página de adoção, conheça os animais disponíveis e clique em Tenho interesse. Entre em contato com o responsável pelo animal para conhecer as etapas e orientações do processo de adoção.'
    ],
    [
      'Quais são os requisitos para adotar?',
      'É fundamental ter disponibilidade de tempo, condições financeiras para os cuidados necessários e um ambiente seguro. A adoção deve ser uma decisão consciente e compartilhada com toda a família. Os critérios específicos devem ser confirmados com o responsável pelo animal.'
    ],
    [
      'Como preparar minha casa para receber um animal?',
      'Prepare um espaço confortável e seguro, com água fresca, alimentação adequada, caminha e brinquedos. Para gatos, providencie caixa de areia e telas de proteção nas janelas. Retire objetos e produtos que possam oferecer riscos.'
    ],
    [
      'Os animais são vacinados e castrados?',
      'As condições de saúde variam conforme a idade e o histórico de cada animal. Consulte as informações disponíveis no perfil e confirme com o responsável quais cuidados veterinários já foram realizados.'
    ],
    [
      'Posso adotar mesmo morando em apartamento?',
      'Sim! O importante é oferecer segurança, conforto, atenção e atividades adequadas às necessidades do animal. Para gatos, é fundamental instalar telas de proteção nas janelas e sacadas. Para cães, mantenha uma rotina de passeios e atividades.'
    ],
    [
      'Já tenho outros animais. Posso adotar?',
      'Sim, desde que a adaptação seja feita de maneira gradual, respeitando o espaço e o comportamento de cada animal. Converse com o responsável para avaliar a compatibilidade e procure orientação profissional quando necessário.'
    ],
    [
      'Quanto tempo um animal leva para se adaptar ao novo lar?',
      'Cada animal possui seu próprio ritmo. A adaptação pode levar dias, semanas ou até meses. Paciência, carinho, respeito e uma rotina tranquila ajudam a construir confiança e fortalecer os vínculos com a nova família.'
    ],
    [
      'O que fazer se encontrar um animal abandonado?',
      'Se for seguro, ofereça água, alimento e abrigo temporário. Entre em contato com organizações de proteção animal ou com os órgãos responsáveis do município para receber orientações. Em caso de ferimentos, procure atendimento veterinário.'
    ],
    [
      'O que é um lar temporário?',
      'É um acolhimento provisório oferecido a um animal enquanto ele aguarda uma família definitiva. O lar temporário proporciona segurança, alimentação, carinho e cuidados durante essa importante etapa de sua vida.'
    ],
    [
      'Por que a castração é importante?',
      'A castração contribui para o controle populacional, a prevenção de determinadas doenças e a redução do abandono. A idade e o momento adequado para o procedimento devem ser avaliados por um médico-veterinário.'
    ]
  ];

  return (
    <section className="wrap section narrow faq">

      <span className="eyebrow">
        INFORMAÇÃO TAMBÉM É UMA FORMA DE CUIDAR
      </span>

      <h1>Perguntas frequentes</h1>

      <p className="faq-intro">
        Conheça as principais orientações sobre adoção
        responsável, adaptação e cuidados com seu novo amigo.
        Adotar é um compromisso de amor para toda a vida.
      </p>

      {perguntas.map(([pergunta, resposta]) => (
        <details className="extra-card" key={pergunta}>

          <summary>{pergunta}</summary>

          <p>{resposta}</p>

        </details>
      ))}

      <div className="faq-contato">

        <h2>🐾 Adotar é transformar vidas!</h2>

        <p>
          Um animal precisa de muito mais do que um lar.
          Precisa de amor, respeito, proteção e cuidado
          durante toda a sua vida.
        </p>

        <Link className="btn" to="/animais">
          Conheça nossos animais
        </Link>

      </div>

    </section>
  );
}

export function Apoio({ tipo }) {

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
            <h3>Adoção responsável</h3>
            <p>
              Ajude a incentivar a adoção responsável
              e a busca por novos lares.
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
          <h3>Adote um amigo 🐾</h3>

          <p>
            Conheça os animais que estão esperando
            por uma família cheia de amor e carinho.
          </p>

          <Link to="/animais">
            Saiba mais →
          </Link>
        </article>

        <article>
          <h3>Seja voluntário</h3>

          <p>Doe seu tempo e carinho.</p>

          <Link to="/voluntario">
            Saiba mais →
          </Link>
        </article>

        <article>
          <h3>Perguntas frequentes</h3>

          <p>Tire suas dúvidas.</p>

          <Link to="/faq">
            Saiba mais →
          </Link>
        </article>

      </div>

    </section>
  );
}