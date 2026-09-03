import honkSp03 from '../assets/gallery/honk-sp-2025-03.jpg';
import honkSp04 from '../assets/gallery/honk-sp-2025-04.jpg';
import honkSp05 from '../assets/gallery/honk-sp-2025-05.jpg';
import honkSp06 from '../assets/gallery/honk-sp-2025-06.jpg';
import honkSp09 from '../assets/gallery/honk-sp-2025-09.jpg';
import logoWikimedia from '../assets/logos/wikimedia.svg';
import logoWikipedia from '../assets/logos/wikipedia.svg';
import logoCommons from '../assets/logos/commons.svg';
import logoWikidata from '../assets/logos/wikidata.svg';

// Paleta extraída diretamente da logo (varredura de pixels do anel colorido
// e das letras de "wikifanfarras"). É a mesma sequência de cores, na mesma
// ordem em que aparecem girando pela roda da logo.
export const RAINBOW = [
  '#0FA49F', // ciano
  '#862D89', // roxo
  '#3B9557', // verde
  '#11739A', // azul
  '#B02856', // framboesa
  '#D82624', // vermelho
  '#F4791F', // laranja
  '#FCB318', // dourado
  '#97C436', // limão
];

export const SETLIST = [
  {
    track: 'FAIXA 01',
    title: 'Capacitação',
    text: 'Formar integrantes de fanfarras em edição colaborativa da Wikipédia.',
  },
  {
    track: 'FAIXA 02',
    title: 'Conteúdo',
    text: 'Criar e melhorar artigos sobre fanfarras locais de Belo Horizonte.',
  },
  {
    track: 'FAIXA 03',
    title: 'Acervo livre',
    text: 'Registrar fotos e vídeos de ensaios e desfiles sob licença livre no Commons.',
  },
  {
    track: 'FAIXA 04',
    title: 'Diversidade',
    text: 'Promover representatividade nos projetos Wikimedia.',
  },
  {
    track: 'FAIXA 05',
    title: 'Comunidade',
    text: 'Fortalecer o movimento local por meio de parcerias diretas com as bandas.',
  },
];

export const TIMELINE = [
  {
    date: 'A definir',
    title: 'Mapeamento comunitário e divulgação',
    text: 'Identificação das bandas e primeiro contato com parceiros e comunidade.',
    live: false,
  },
  {
    date: 'A definir',
    tag: 'ONLINE',
    title: 'Oficina de edição online — turma 1',
    text: 'Mão na massa a distância: contas, primeiras edições, upload de mídia e boas práticas.',
    live: true,
  },
  {
    date: 'A definir',
    tag: 'ONLINE',
    title: 'Oficina de edição online — turma 2',
    text: 'Segunda turma remota, para quem não pôde vir na primeira ou quer se aprofundar.',
    live: true,
  },
  {
    date: 'A definir',
    title: 'Documentação fotográfica em ensaios',
    text: 'Registro visual das bandas em ação, para alimentar o Commons e os artigos.',
    live: false,
  },
  {
    date: 'A definir',
    tag: 'PRESENCIAL',
    title: 'Oficina presencial de edição — 4 horas',
    text: 'Encontro final cara a cara: fechamento de artigos, itens do Wikidata e uploads pendentes.',
    live: true,
  },
  {
    date: 'A definir',
    title: 'Relatoria e disseminação',
    text: 'Prestação de contas e compartilhamento dos resultados com a comunidade.',
    live: false,
  },
];

// Explica o "universo wiki" para quem está chegando agora: o movimento como um
// todo e os três projetos com os quais a oficina trabalha na prática.
export const WIKI_PROJECTS = [
  {
    tag: 'A REDE',
    name: 'Movimento Wiki',
    logo: logoWikimedia,
    text: 'Uma rede mundial de voluntários e organizações — coordenada pela Wikimedia Foundation, sem fins lucrativos e sem anúncios — que constrói projetos de conhecimento livre. A Wikipédia é o mais conhecido, mas não é o único.',
  },
  {
    tag: 'A ENCICLOPÉDIA',
    name: 'Wikipédia',
    logo: logoWikipedia,
    text: 'A enciclopédia livre e colaborativa mais lida do mundo, escrita e revisada por voluntários. É nela que vamos registrar a história, o repertório e a trajetória das fanfarras de Belo Horizonte.',
  },
  {
    tag: 'O ACERVO',
    name: 'Wikimedia Commons',
    logo: logoCommons,
    text: 'Repositório de fotos, vídeos e áudios sob licença livre, usado para ilustrar a Wikipédia e outros projetos. É para lá que vão os registros dos ensaios e desfiles das bandas.',
  },
  {
    tag: 'OS DADOS',
    name: 'Wikidata',
    logo: logoWikidata,
    text: 'Um banco de dados livre e colaborativo que conecta informações entre os projetos Wikimedia. Cada fanfarra pode virar um item com dados como ano de fundação, integrantes e estilo musical.',
  },
];

export const STATS = [
  { value: '30', label: 'participantes' },
  { value: '15', label: 'novos editores, mín. 5 edições cada' },
  { value: '10+5', label: 'artigos criados e aprimorados' },
  { value: '200', label: 'arquivos enviados ao Commons' },
  { value: '15', label: 'itens criados/melhorados no Wikidata' },
  { value: '2', label: 'parcerias formalizadas' },
];

// Fotos de referência já publicadas no Wikimedia Commons sob licença livre —
// exemplos do tipo de acervo que a oficina pretende gerar para as fanfarras de BH.
export const GALLERY = [
  {
    src: honkSp03,
    alt: 'Fanfarra tocando durante o Festival HONK! SP 2025, no túnel José Roberto Fanganiello Melhem, em São Paulo',
    author: 'ProtoplasmaKid',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Festival_de_fanfarrias_HONK!_SP_2025_03.jpg',
  },
  {
    src: honkSp04,
    alt: 'Integrantes de fanfarra se apresentando no Festival HONK! SP 2025',
    author: 'ProtoplasmaKid',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Festival_de_fanfarrias_HONK!_SP_2025_04.jpg',
  },
  {
    src: honkSp05,
    alt: 'Fanfarra ativista tocando no Festival HONK! SP 2025',
    author: 'ProtoplasmaKid',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Festival_de_fanfarrias_HONK!_SP_2025_05.jpg',
  },
  {
    src: honkSp06,
    alt: 'Banda de fanfarra se apresentando no túnel durante o Festival HONK! SP 2025',
    author: 'ProtoplasmaKid',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Festival_de_fanfarrias_HONK!_SP_2025_06.jpg',
  },
  {
    src: honkSp09,
    alt: 'Público e fanfarra reunidos no Festival HONK! SP 2025',
    author: 'ProtoplasmaKid',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Festival_de_fanfarrias_HONK!_SP_2025_09.jpg',
  },
];

export const GALLERY_LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const PROPOSAL_URL =
  'https://br.wikimedia.org/wiki/Wiki_Apoia_2026/Propostas/Oficina_de_edi%C3%A7%C3%A3o_da_wikipedia_com_fanfarras_de_carnaval_de_Belo_Horizonte';

export const TALK_URL =
  'https://br.wikimedia.org/wiki/Discuss%C3%A3o:Wiki_Apoia_2026/Propostas/Oficina_de_edi%C3%A7%C3%A3o_da_wikipedia_com_fanfarras_de_carnaval_de_Belo_Horizonte';

export const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfgFSyfjppJ0i6QeASXYwNas5EflSS0h0zY7w-tdia4gK2pNQ/viewform?usp=publish-editor';

// As três sessões da oficina, em ordem — o Hero conta os dias até a próxima.
export const WORKSHOPS = [
  { date: '2026-09-13T00:00:00-03:00', label: 'Oficina online', short: '13 de setembro' },
  { date: '2026-09-16T00:00:00-03:00', label: 'Oficina online', short: '16 de setembro' },
  { date: '2026-09-27T00:00:00-03:00', label: 'Oficina presencial', short: '27 de setembro' },
];
