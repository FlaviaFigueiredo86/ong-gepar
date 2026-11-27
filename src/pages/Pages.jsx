import {Destaques} from './Extras.jsx';
import React,{useState,useEffect} from 'react';import {Link,useParams,useSearchParams} from 'react-router-dom';import {pdf,Social} from '../components/Layout.jsx';import AnimalCard,{Foto} from '../components/AnimalCard.jsx';import {listarAnimais,enviarAdocao,demonstracao} from '../services/api.js';
function useAnimais(){const [state,set]=useState({items:[],loading:true,error:''});useEffect(()=>{let active=true;listarAnimais().then(items=>{if(active)set({items,loading:false,error:''})}).catch(e=>{if(active)set({items:[],loading:false,error:e.message})});return()=>{active=false}},[]);return state;}
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">

          <div>
            <span className="eyebrow">
              PROTEÇÃO ANIMAL • ESTEIO/RS
            </span>

            <h1>
              Salvar um animal não muda o mundo inteiro,
              mas muda a vida dele.
            </h1>

            <p>
              Transforme a vida de um animal através
              da adoção responsável. Conheça o trabalho
              da ONG GEPAR e faça parte dessa mudança.
            </p>

            <div className="actions">

              <Link className="btn" to="/animais">
                Quero adotar
              </Link>

              <Link className="btn outline" to="/ajudar">
                Como ajudar
              </Link>

            </div>
          </div>

          <img
            className="hero-img"
            src={import.meta.env.BASE_URL + "cachorro-gato.jpg"}
            alt="Cachorro e gatinho juntos"
          />

        </div>
      </section>

      <Animais inicial={true} />

      <Destaques />

    </>
  );
}
export function Animais({ inicial = false }) {
  const { items, loading, error } = useAnimais();
  const [filter, set] = useState('Todos');

  const filtrados = items.filter(
    a => filter === 'Todos' || a.especie === filter
  );

  const visible = inicial
  ? [
      ...filtrados.filter(a => a.especie === 'Cão').slice(0, 3),
      ...filtrados.filter(a => a.especie === 'Gato').slice(0, 3)
    ]
  : filtrados;
  return (
    <section className="wrap section">

      <h1>Encontre seu novo amigo</h1>

      <p>
        Conheça os animais que esperam por uma
        família e um lar cheio de amor.
      </p>

      {!inicial && (
        <div className="actions">
          {['Todos', 'Cão', 'Gato'].map(x => (
            <button
              key={x}
              className={'btn ' + (filter === x ? '' : 'outline')}
              onClick={() => set(x)}
            >
              {x}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : (
        <div className="cards vitrine-animais">

          {visible.map(a => (
            <AnimalCard key={a.id} animal={a} />
          ))}

          {!visible.length && (
            <p>Nenhum animal encontrado.</p>
          )}

        </div>
      )}

      {inicial && (
        <div className="ver-mais-animais">
          <Link className="btn" to="/animais">
            Ver mais animais →
          </Link>
        </div>
      )}

    </section>
  );
}
export function Detalhes() {
  const { id } = useParams();
  const { items, loading, error } = useAnimais();

  const a = items.find(x => String(x.id) === id);

  const telefone = a?.whatsapp || '';

  const telefoneFormatado = telefone.replace(
    /^55(\d{2})(\d{5})(\d{4})$/,
    '($1) $2-$3'
  );

  const mensagem = encodeURIComponent(
    `Olá! Vi o perfil de ${a?.nome} no site da ONG GEPAR e gostaria de saber mais sobre a adoção.`
  );

  const temInformacao = valor =>
    valor &&
    !/^não informad[oa]s?$/i.test(String(valor).trim());

  return (
    <section className="wrap section">

      <Link className="voltar-vitrine" to="/animais">
        ← Voltar para os animais
      </Link>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : !a ? (
        <p>Animal não encontrado.</p>
      ) : (
        <div className="perfil-animal">

          <div className="perfil-foto">
            <Foto animal={a} />
          </div>

          <div className="perfil-info">

            <span className="eyebrow">
              ADOÇÃO RESPONSÁVEL
            </span>

            <h1>{a.nome}</h1>

            <div className="perfil-dados">

              {[
                ['Nome', a.nome],
                ['Espécie', a.especie],
                ['Idade aproximada', a.idade],
                ['Sexo', a.sexo],
                ['Porte', a.porte],
                ['Pelagem', a.pelagem],
                ['Castração', a.castracao],
                ['Vermifugação', a.vermifugacao],
                ['Antipulgas', a.antipulgas],
                ['Localização', a.cidade]
              ]
                .filter(([titulo, valor]) =>
                  temInformacao(valor)
                )
                .map(([titulo, valor]) => (
                  <div key={titulo}>
                    <strong>{titulo}</strong>
                    <p>{valor}</p>
                  </div>
                ))}

            </div>

            {temInformacao(a.descricao) && (
              <div className="perfil-historia">

                <h2>Conheça {a.nome}</h2>

                <p>{a.descricao}</p>

              </div>
            )}

            <div className="perfil-contato">

              <h3>Informações para adoção</h3>

              {temInformacao(a.responsavel) && (
                <p>
                  <strong>Responsável:</strong>{' '}
                  {a.responsavel}
                </p>
              )}

              {temInformacao(telefone) && (
                <p>
                  <strong>Telefone:</strong>{' '}
                  <a href={'tel:+' + telefone}>
                    {telefoneFormatado}
                  </a>
                </p>
              )}

              {temInformacao(telefone) ? (
                <a
                  className="btn whatsapp"
                  href={
                    'https://wa.me/' +
                    telefone +
                    '?text=' +
                    mensagem
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar pelo WhatsApp
                </a>
              ) : (
                <a
                  className="btn whatsapp"
                  href={
                    'https://wa.me/5551986254367?text=' +
                    mensagem
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar a ONG GEPAR
                </a>
              )}

            </div>

            <Link
              className="btn"
              to={'/adocao?animal=' + encodeURIComponent(a.id)}
            >
              Quero adotar
            </Link>

          </div>

        </div>
      )}

    </section>
  );
}
export function Adocao(){const [params]=useSearchParams();const [msg,setMsg]=useState('');const [busy,setBusy]=useState(false);async function submit(e){e.preventDefault();setBusy(true);setMsg('');try{const data=Object.fromEntries(new FormData(e.currentTarget));data.animalId=params.get('animal');const result=await enviarAdocao(data);setMsg(result?.demo?'Demonstração concluída. Nenhum dado foi enviado ou armazenado.':'Solicitação enviada.');}catch(e){setMsg(e.message)}finally{setBusy(false)}}return <section className="wrap section narrow"><h1>Interesse em adoção</h1><p>Preencha o formulário para iniciar o processo de adoção.</p>{demonstracao&&<p className="notice">Formulário de demonstração. Não informe dados pessoais reais.</p>}<form onSubmit={submit}><label>Nome completo<input name="nome" required/></label><label>E-mail<input name="email" type="email" required/></label><label>Telefone<input name="telefone" type="tel" required/></label><label>Cidade<input name="cidade" required/></label><label>Conte sobre seu lar e sua rotina<textarea name="mensagem" required rows="4"/></label><label className="check"><input type="checkbox" required/> Li o guia de adoção e compreendo as responsabilidades.</label><a href={pdf} target="_blank" rel="noreferrer">Guia de Adoção em PDF</a><button className="btn" disabled={busy}>{busy?'Enviando...':'Enviar interesse'}</button><p role="status">{msg}</p></form></section>}
export function Sobre() {
  const [lerMais, setLerMais] = useState(false);

  return (
    <section className="wrap section narrow sobre-ong">

      <span className="eyebrow">
        NOSSA HISTÓRIA • DESDE 2004
      </span>

      <h1>Conheça a ONG GEPAR</h1>
<div className="sobre-fundadora">
  <img
    src={import.meta.env.BASE_URL + "criadora-gepar.jpg"}
    alt="Dina, fundadora da ONG GEPAR"
  />

  <div className="sobre-fundadora-texto">
    <h2>Quem fundou a GEPAR</h2>

    <p>
      Dina Terezinha da Silva Vicente, fundadora e
      presidente da ONG GEPAR, dedica sua trajetória
      à proteção, ao acolhimento e à defesa dos animais.
    </p>
  </div>
</div>
      <p className="sobre-intro">
        A ONG GEPAR (Grupo Esteiense de Proteção aos
        Animais de Rua) é uma organização de proteção
        animal de Esteio (RS), voltada ao resgate,
        recuperação e adoção responsável de animais
        em situação de rua, vulnerabilidade ou deficiência.
      </p>

      <div className="sobre-datas">
        <div>
          <strong>2004</strong>
          <p>Início do trabalho</p>
        </div>

        <div>
          <strong>2009</strong>
          <p>Fundação oficial</p>
        </div>
      </div>

      {lerMais && (
        <div className="sobre-historia">

          <h2>Origem e fundação</h2>

          <article className="sobre-card">
            <h3>Início do trabalho — 2004</h3>
            <p>
              Em 29 de julho de 2004, a fundadora e
              presidente Dina Terezinha da Silva Vicente
              começou a acolher em sua casa animais em
              situação de vulnerabilidade, encaminhando-os
              à adoção. A cadelinha Mocinha foi a primeira
              adoção do grupo.
            </p>
          </article>

          <article className="sobre-card">
            <h3>Fundação oficial — 2009</h3>
            <p>
              Após cerca de cinco a seis anos de atuação
              informal, a ONG foi oficialmente fundada
              em 30 de dezembro de 2009 por voluntários
              engajados na causa animal em Esteio.
            </p>
          </article>

          <h2>Atuação e causas</h2>

          <article className="sobre-card">
            <h3>🐾 Resgate e adoção</h3>
            <p>
              Recolhimento e recuperação de cães e gatos
              feridos, perdidos, abandonados ou com
              deficiência, além da realização de feiras
              e campanhas de adoção responsável.
              A ONG atua principalmente em Esteio,
              oferecendo também apoio na região,
              como em Sapucaia do Sul.
            </p>
          </article>

          <article className="sobre-card">
            <h3>🏡 Casas de passagem e parcerias</h3>
            <p>
              A GEPAR conta com uma rede de voluntários
              e casas de passagem, além de participar
              de pautas locais sobre cão comunitário
              e políticas públicas de bem-estar animal,
              como a inauguração da Farmácia Pet de
              Esteio, em outubro de 2025.
            </p>
          </article>

          <article className="sobre-card">
            <h3>❤️ Saúde e conscientização</h3>
            <p>
              A ONG promove alertas e ações contra
              os maus-tratos e atua na conscientização
              e no combate à esporotricose felina,
              reforçando a importância do tratamento
              e do não abandono dos animais.
            </p>
          </article>

          <article className="sobre-card">
            <h3>🤝 Sustentação e apoio da comunidade</h3>
            <p>
              O trabalho da ONG é mantido com o apoio
              da comunidade, por meio de doações de
              ração, itens de higiene e limpeza,
              além da coleta de materiais recicláveis,
              como tampinhas, garrafas PET e latinhas.
            </p>
          </article>

        </div>
      )}

      <button
        className="btn"
        aria-expanded={lerMais}
        onClick={() => setLerMais(!lerMais)}
      >
        {lerMais
          ? 'Ler menos ↑'
          : 'Ler mais sobre nossa história ↓'}
      </button>

      <div className="sobre-frase">
        <p>
          “Salvar um animal não muda o mundo inteiro,
          mas muda a vida dele.”
        </p>
      </div>

      <h3>Acompanhe nosso trabalho</h3>

      <Social />

    </section>
  );
}
export function Guia(){return <section className="wrap section narrow"><h1>Guia de adoção responsável</h1><p>Conheça os cuidados com alimentação, saúde, custos e responsabilidades antes de adotar.</p><div className="actions"><a className="btn" href={pdf} target="_blank" rel="noreferrer">Guia de Adoção em PDF ↗</a><a className="btn outline" href={pdf} download>Baixar PDF</a></div><iframe className="pdf" src={pdf} title="Guia de adoção responsável da ONG GEPAR"/></section>}
export function Ajudar() {
  return (
    <section className="wrap section ajudar-ong">

      <span className="eyebrow">
        PEQUENOS GESTOS, GRANDES TRANSFORMAÇÕES
      </span>

      <h1>Juntos podemos transformar vidas</h1>

      <p className="ajudar-intro">
        Toda ajuda faz a diferença! Sua solidariedade
        contribui para que os animais recebam
        alimentação, proteção, carinho e uma nova
        oportunidade de serem felizes.
      </p>

      <div className="ajudar-cards">

        <article>
          <span className="ajudar-icone">🐾</span>

          <h2>Doe alimentos e materiais</h2>

          <p>
            Você pode contribuir com rações para
            cães e gatos, cobertores, caminhas,
            produtos de higiene e materiais de limpeza.
          </p>

          <p>
            Entre em contato com a ONG para conhecer
            as necessidades atuais e combinar a entrega
            das doações.
          </p>
        </article>

        <article>
          <span className="ajudar-icone">🏡</span>

          <h2>Ofereça um lar temporário</h2>

          <p>
            Abra as portas da sua casa e do seu
            coração para um animal enquanto ele
            aguarda uma família definitiva.
          </p>

          <p>
            Oferecer um lar temporário é proporcionar
            segurança, carinho e proteção durante
            uma etapa importante da vida do animal.
          </p>

          <p>
            Consulte a ONG para saber como participar.
          </p>
        </article>

      </div>

      <div className="ajudar-pix">

        <span className="ajudar-icone">💚</span>

        <h2>Faça uma doação via PIX</h2>

        <p>
          Sua contribuição ajuda nas despesas
          com alimentação, medicamentos e
          tratamentos veterinários.
        </p>

        <div className="pix-chave">
          Chave PIX oficial disponível em breve.
        </div>

        <p>
          <strong>
            Não importa o valor, toda contribuição
            faz a diferença!
          </strong>
        </p>

      </div>

      <div className="ajudar-contato">

        <h2>Entre em contato conosco</h2>

        <p>
          Saiba como contribuir e fazer parte
          dessa corrente de solidariedade.
        </p>

        <a
          href="https://wa.me/5551986254367"
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