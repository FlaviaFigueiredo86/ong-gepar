const base = import.meta.env.VITE_API_URL;

const foto = (nome) =>
  import.meta.env.BASE_URL +
  'Animais%20Gepar/' + encodeURIComponent(nome + '.png');

const fotoGato = (nome) =>
  import.meta.env.BASE_URL +
  'Animais%20Gepar/Gatinhos/' +
  encodeURIComponent(nome + '.png');

export const demo = [
  {
    id: '1',
    nome: 'Cusca e Panda',
    especie: 'Cão',
    idade: '2 anos e meio',
    sexo: 'Fêmeas',
    porte: 'Grande',
    foto: foto('Cusca e Panda'),
    castracao: 'Não castradas',
    cidade: 'Nova Santa Rita',
    responsavel: 'Não informado',
    whatsapp: '5551984544172',
    descricao: 'Cusca e Panda são duas irmãs dóceis e brincalhonas. Foram abandonadas quando filhotes e acolhidas por uma família. Por motivos de saúde dos responsáveis, estão procurando um novo lar cheio de amor e carinho.'
  },
  {
    id: '2',
    nome: 'Paçoca',
    especie: 'Cão',
    idade: '3 a 4 meses',
    sexo: 'Macho',
    porte: 'Médio',
    foto: foto('Paçoca'),
    castracao: 'Filhote',
    cidade: 'Não informada',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Um filhotinho que procura um lar com muito amor, cuidado e responsabilidade.'
  },
  {
    id: '3',
    nome: 'Cacau',
    especie: 'Cão',
    idade: 'Adulta',
    sexo: 'Fêmea',
    porte: 'Médio',
    foto: foto('Cacau'),
    castracao: 'Castrada',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Cacau está à procura de uma família que lhe ofereça carinho, segurança e uma nova oportunidade de ser feliz.'
  },
  {
    id: '4',
    nome: 'Milk',
    especie: 'Cão',
    idade: 'Não informada',
    sexo: 'Macho',
    porte: 'Pequeno (6 kg)',
    foto: foto('Milk'),
    castracao: 'Filhote',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Karine',
    whatsapp: '5551992465040',
    descricao: 'Milk é um cãozinho de pequeno porte que procura um lar cheio de amor.'
  },
  {
    id: '5',
    nome: 'Bela',
    especie: 'Cão',
    idade: '3 meses',
    sexo: 'Fêmea',
    porte: 'Não informado',
    foto: foto('Bela'),
    castracao: 'Filhote',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Herla',
    whatsapp: '5551996765347',
    descricao: 'Uma filhotinha doce, carinhosa e cheia de amor para dar.'
  },
  {
    id: '6',
    nome: 'Plutão',
    especie: 'Cão',
    idade: '5 meses',
    sexo: 'Macho',
    porte: 'Grande',
    foto: foto('Plutão'),
    castracao: 'Filhote',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Um doce de cachorrinho que procura um lar com muito amor.'
  },
  {
    id: '7',
    nome: 'Canela',
    especie: 'Cão',
    idade: '3 a 4 meses',
    sexo: 'Fêmea',
    porte: 'Médio',
    foto: foto('Canela'),
    castracao: 'Filhote',
    cidade: 'Não informada',
    responsavel: 'Karine',
    whatsapp: '5551992465040',
    descricao: 'Uma filhotinha em busca de um lar cheio de amor, cuidado e responsabilidade.'
  },
  {
    id: '8',
    nome: 'Amora',
    especie: 'Cão',
    idade: '3 a 4 meses',
    sexo: 'Fêmea',
    porte: 'Médio',
    foto: foto('Amora'),
    castracao: 'Filhote',
    cidade: 'Não informada',
    responsavel: 'Karine',
    whatsapp: '5551992465040',
    descricao: 'Amora procura uma família que possa oferecer muito amor e cuidado.'
  },
  {
    id: '9',
    nome: 'Bento',
    especie: 'Cão',
    idade: '3 a 4 meses',
    sexo: 'Macho',
    porte: 'Médio',
    foto: foto('Bento'),
    castracao: 'Filhote',
    cidade: 'Não informada',
    responsavel: 'Karine',
    whatsapp: '5551992465040',
    descricao: 'Bento está em busca de um lar cheio de amor, cuidado e responsabilidade.'
  },
  {
    id: '10',
    nome: 'Mel',
    especie: 'Cão',
    idade: '3 a 4 meses',
    sexo: 'Fêmea',
    porte: 'Médio',
    foto: foto('Mel'),
    castracao: 'Filhote',
    cidade: 'Não informada',
    responsavel: 'Karine',
    whatsapp: '5551992465040',
    descricao: 'Uma pequena filhotinha que procura um lar cheio de amor.'
  },
  {
    id: '11',
    nome: 'Joka',
    especie: 'Cão',
    idade: 'Adulto',
    sexo: 'Macho',
    porte: 'Não informado',
    foto: foto('Joka'),
    castracao: 'Castrado',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Joka está esperando uma oportunidade de encontrar uma família e receber muito carinho.'
  },
  {
    id: '12',
    nome: 'Tigrinha',
    especie: 'Cão',
    idade: '8 meses',
    sexo: 'Fêmea',
    porte: 'Pequeno/Médio',
    foto: foto('Tigrinha'),
    castracao: 'Castrada',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '',
    descricao: 'Tigrinha está disponível para adoção individual ou conjunta e procura uma família amorosa.'
  },
  {
    id: '13',
    nome: 'Chiquinha',
    especie: 'Cão',
    idade: 'Adulta',
    sexo: 'Fêmea',
    porte: 'Pequeno',
    foto: foto('Chiquinha'),
    castracao: 'Castrada',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Dócil e carinhosa, Chiquinha merece uma segunda chance e um lar cheio de amor.'
  },
  {
    id: '14',
    nome: 'Ferrugem',
    especie: 'Cão',
    idade: 'Não informada',
    sexo: 'Macho',
    porte: 'Pequeno/Médio',
    foto: foto('Ferrugem'),
    castracao: 'Será entregue castrado',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Um doce de cachorrinho à procura de um lar e de uma família responsável.'
  },
  {
    id: '15',
    nome: 'Maria',
    especie: 'Cão',
    idade: 'Adulta',
    sexo: 'Fêmea',
    porte: 'Não informado',
    foto: foto('Maria'),
    castracao: 'Castrada',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Não informado',
    whatsapp: '5551992465040',
    descricao: 'Uma companheira leal, carinhosa e cheia de amor para dar.'
  },
  {
    id: '16',
    nome: 'Pretinho',
    especie: 'Cão',
    idade: '3 meses',
    sexo: 'Macho',
    porte: 'Não informado',
    foto: foto('Pretinho'),
    castracao: 'Não informada',
    cidade: 'Sapucaia do Sul',
    responsavel: 'Herla',
    whatsapp: '5551996765347',
    descricao: 'Um filhotinho doce, carinhoso e cheio de amor para dar.'
  },
  {
    id: '17',
    nome: 'Faísca',
    especie: 'Gato',
    idade: '3 meses',
    sexo: 'Macho',
    porte: 'Pequeno',
    pelagem: 'Preta e branca',
    foto: fotoGato('faisca'),
    castracao: 'Filhote',
    vermifugacao: 'Não informada',
    antipulgas: 'Não informado',
    cidade: 'Não informada',
    responsavel: 'Não informado',
    whatsapp: '5551984181005',
    descricao: 'Faísca é um lindo gatinho de apenas 3 meses, com patinhas brancas e um olhar encantador. Está à procura de uma família que possa oferecer muito amor, carinho, proteção e um lar seguro para crescer feliz.'
  },
  {
    id: '18',
    nome: 'Godofredo',
    especie: 'Gato',
    idade: '3 meses',
    sexo: 'Macho',
    porte: 'Pequeno',
    pelagem: 'Tigrada e branca',
    foto: fotoGato('godofredo'),
    castracao: 'Filhote',
    vermifugacao: 'Não informada',
    antipulgas: 'Não informado',
    cidade: 'Não informada',
    responsavel: 'Não informado',
    whatsapp: '5551984181005',
    descricao: 'Godofredo é um lindo gatinho de apenas 3 meses, com pelagem tigrada, patinhas brancas e um olhar apaixonante. Procura uma família responsável que possa oferecer carinho, cuidado e um lar cheio de amor.'
  },
  {
    id: '19',
    nome: 'Mística',
    especie: 'Gato',
    idade: 'Aproximadamente 5 meses',
    sexo: 'Fêmea',
    porte: 'Pequeno',
    pelagem: 'Cinza',
    foto: fotoGato('mistica'),
    castracao: 'Filhote',
    vermifugacao: 'Sim',
    antipulgas: 'Sim',
    cidade: 'Não informada',
    responsavel: 'Não informado',
    whatsapp: '5551991593631',
    descricao: 'Mística é uma linda gatinha cinza, muito meiga e carinhosa. Foi encontrada no pátio de um local de trabalho e acolhida temporariamente. Já está vermifugada e recebeu tratamento antipulgas. Agora procura uma família que possa oferecer um lar seguro, muito amor, cuidado e carinho.'
  }
];

export const demonstracao = !base;

async function request(path, options) {
  const r = await fetch(
    base.replace(/\/+$/, '') + path,
    options
  );

  if (!r.ok) {
    throw new Error(
      'Não foi possível concluir a solicitação.'
    );
  }

  return r.status === 204 ? null : r.json();
}

export async function listarAnimais() {
  return base ? request('/animais') : demo;
}

export async function enviarAdocao(dados) {
  if (!base) return { demo: true };

  return request('/adocoes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  });
}