/* ═══════════════════════════════════════════════════════════════════
   EXPOSIBRAM 24x7 — SHARED DATA & NAVIGATION
   Mock data realista para demonstração ao parceiro técnico
═══════════════════════════════════════════════════════════════════ */

// ── FORNECEDORES (mock data) ───────────────────────────────────────
const FORNECEDORES = [
  {
    id: 'sandvik-br',
    membroFundador: true,
    nome: 'Sandvik do Brasil',
    sigla: 'S',
    categoria: 'Equipamentos e Maquinário Pesado',
    descricao: 'Equipamentos de perfuração subterrânea e de superfície, britagem e peneiramento para mineração de larga escala.',
    cidade: 'Várzea Paulista, SP',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Equipamentos', 'Multinacional', 'ISO 9001'],
    rating: 4.9,
    contratos: 142,
    mineradoras: 18,
    cases: ['Vale Carajás', 'Anglo American', 'Kinross']
  },
  {
    id: 'epiroc-br',
    membroFundador: true,
    nome: 'Epiroc Brasil',
    sigla: 'E',
    categoria: 'Equipamentos e Maquinário Pesado',
    descricao: 'Soluções de produtividade para mineração e construção. Equipamentos de perfuração, demolição e ar comprimido.',
    cidade: 'São Paulo, SP',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Equipamentos', 'Automação', 'Multinacional'],
    rating: 4.8,
    contratos: 98,
    mineradoras: 14,
    cases: ['Anglo American', 'Lundin Mining']
  },
  {
    id: 'metso-outotec',
    membroFundador: true,
    nome: 'Metso Brasil',
    sigla: 'M',
    categoria: 'Beneficiamento e Processamento',
    descricao: 'Tecnologias para processamento mineral: britadores, moinhos, sistemas de espessamento e flotação.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Processamento', 'Moinhos', 'ISO 14001'],
    rating: 4.7,
    contratos: 87,
    mineradoras: 16,
    cases: ['Vale', 'Samarco', 'Nexa Resources']
  },
  {
    id: 'enaex-br',
    membroFundador: true,
    nome: 'Enaex Brasil',
    sigla: 'EX',
    categoria: 'Insumos e Explosivos',
    descricao: 'Explosivos industriais, nitrato de amônio e serviços de detonação para mineração a céu aberto e subterrânea.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Grande Porte',
    verificada: true,
    tags: ['Explosivos', 'Segurança', 'Certificado IBRAM'],
    rating: 4.9,
    contratos: 64,
    mineradoras: 11,
    cases: ['Vale', 'CSN Mineração', 'Kinross']
  },
  {
    id: 'geobit-geopar',
    nome: 'Geobit Geopar',
    sigla: 'G',
    categoria: 'Exploração e Geologia',
    descricao: 'Sondas de perfuração em nióbio para geotecnia e geologia. Equipamentos brasileiros para sondagem rotativa.',
    cidade: 'Nova Lima, MG',
    porte: 'Médio Porte',
    verificada: true,
    tags: ['Brasileira', 'Inovação', 'Nióbio'],
    rating: 4.6,
    contratos: 28,
    mineradoras: 7,
    cases: ['Vale', 'CBMM']
  },
  {
    id: 'siemens-mining',
    membroFundador: true,
    nome: 'Siemens Mining',
    sigla: 'Si',
    categoria: 'Tecnologia e Automação',
    descricao: 'Eletrocentros, automação industrial e digitalização para mineração. Soluções de eletrificação e SCADA.',
    cidade: 'Jundiaí, SP',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Automação', 'Tech', 'Multinacional'],
    rating: 4.8,
    contratos: 56,
    mineradoras: 12,
    cases: ['Vale Carajás', 'Anglo American']
  },
  {
    id: 'flsmidth-br',
    membroFundador: true,
    nome: 'FLSmidth Brasil',
    sigla: 'F',
    categoria: 'Beneficiamento e Processamento',
    descricao: 'Equipamentos e serviços para mineração: moinhos SAG, sistemas de espessamento, filtragem e desaguamento.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Processamento', 'Sustentabilidade', 'ESG'],
    rating: 4.7,
    contratos: 71,
    mineradoras: 13,
    cases: ['Vale', 'CSN', 'Mosaic']
  },
  {
    id: 'weir-minerals',
    membroFundador: true,
    nome: 'Weir Minerals Brasil',
    sigla: 'W',
    categoria: 'Equipamentos e Maquinário Pesado',
    descricao: 'Bombas, válvulas, ciclones e revestimentos para processamento mineral de alto desempenho.',
    cidade: 'São Paulo, SP',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Bombas', 'Válvulas', 'Equipamentos'],
    rating: 4.8,
    contratos: 49,
    mineradoras: 10,
    cases: ['Vale', 'Anglo American']
  },
  {
    id: 'tetra-tech-br',
    nome: 'Tetra Tech Brasil',
    sigla: 'TT',
    categoria: 'Consultoria e Estudos',
    descricao: 'Consultoria em engenharia e meio ambiente para mineração. Estudos de viabilidade, EIA/RIMA e licenciamento.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Consultoria', 'ESG', 'Licenciamento'],
    rating: 4.7,
    contratos: 38,
    mineradoras: 9,
    cases: ['Anglo American', 'Kinross', 'Equinox']
  },
  {
    id: 'orica-br',
    membroFundador: true,
    nome: 'Orica Brasil',
    sigla: 'O',
    categoria: 'Insumos e Explosivos',
    descricao: 'Sistemas de detonação eletrônica WebGen e soluções de mineração inteligente para otimização de desmonte.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Explosivos', 'Inovação', 'Tech'],
    rating: 4.8,
    contratos: 54,
    mineradoras: 11,
    cases: ['Vale', 'CSN', 'Kinross']
  },
  {
    id: 'caterpillar-br',
    membroFundador: true,
    nome: 'Caterpillar Brasil',
    sigla: 'C',
    categoria: 'Equipamentos e Maquinário Pesado',
    descricao: 'Caminhões fora-de-estrada, carregadeiras, escavadeiras e tratores para mineração de grande porte.',
    cidade: 'Piracicaba, SP',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Equipamentos', 'Multinacional', 'Frota'],
    rating: 4.9,
    contratos: 156,
    mineradoras: 20,
    cases: ['Vale', 'Anglo American', 'Samarco']
  },
  {
    id: 'thyssenkrupp-br',
    nome: 'thyssenkrupp Brasil',
    sigla: 'tk',
    categoria: 'Tecnologia e Automação',
    descricao: 'Sistemas de transporte, britagem primária semi-móvel e correias transportadoras de longa distância.',
    cidade: 'Belo Horizonte, MG',
    porte: 'Multinacional',
    verificada: true,
    tags: ['Logística', 'Engenharia', 'Multinacional'],
    rating: 4.6,
    contratos: 42,
    mineradoras: 8,
    cases: ['Vale Carajás', 'CSN Mineração']
  }
];

// ── CATEGORIAS ──────────────────────────────────────────────────────
const CATEGORIAS = [
  { id: 'equip', nome: 'Equipamentos e Maquinário', icon: '⚙️', count: 642 },
  { id: 'tech', nome: 'Tecnologia e Automação', icon: '🤖', count: 318 },
  { id: 'beneficiamento', nome: 'Beneficiamento e Processamento', icon: '⚗️', count: 287 },
  { id: 'engenharia', nome: 'Serviços de Engenharia', icon: '📐', count: 412 },
  { id: 'esg', nome: 'ESG e Sustentabilidade', icon: '🌱', count: 156 },
  { id: 'logistica', nome: 'Logística e Transporte', icon: '🚚', count: 224 },
  { id: 'energia', nome: 'Energia e Utilities', icon: '⚡', count: 138 },
  { id: 'exploracao', nome: 'Exploração e Geologia', icon: '🗺️', count: 197 }
];

// ── RFQs ATIVAS ─────────────────────────────────────────────────────
const RFQS = [
  {
    id: 'rfq-001',
    mineradora: 'Vale S.A.',
    sigla: 'V',
    titulo: 'Sistema de monitoramento de barragens de rejeitos',
    categoria: 'Tecnologia e Automação',
    descricao: 'Buscamos solução de monitoramento em tempo real com sensores InSAR e piezômetros para 3 barragens em Minas Gerais. Necessário compliance com Resolução ANM 95/2022.',
    local: 'Itabira, MG',
    prazo: '15 dias',
    valor: 'R$ 8M - R$ 12M',
    candidatos: 7,
    status: 'aberta',
    publicada: 'há 2 dias',
    match: 96
  },
  {
    id: 'rfq-002',
    mineradora: 'Anglo American',
    sigla: 'A',
    titulo: 'Fornecimento de peças de moinho SAG (Mina-do-Sapo)',
    categoria: 'Beneficiamento e Processamento',
    descricao: 'Necessitamos fornecedor homologado para revestimentos de moinho SAG 28x14, com entrega trimestral programada para 2026.',
    local: 'Conceição do Mato Dentro, MG',
    prazo: '20 dias',
    valor: 'R$ 4M - R$ 6M',
    candidatos: 4,
    status: 'aberta',
    publicada: 'há 5 dias',
    match: 92
  },
  {
    id: 'rfq-003',
    mineradora: 'Kinross Brasil',
    sigla: 'K',
    titulo: 'Consultoria para estudo de descomissionamento (Paracatu)',
    categoria: 'Consultoria e Estudos',
    descricao: 'Estudo técnico-econômico para descomissionamento progressivo da mina de Paracatu, incluindo plano de fechamento e recuperação de áreas.',
    local: 'Paracatu, MG',
    prazo: '30 dias',
    valor: 'R$ 800k - R$ 1,5M',
    candidatos: 11,
    status: 'aberta',
    publicada: 'há 1 semana',
    match: 88
  },
  {
    id: 'rfq-004',
    mineradora: 'Samarco Mineração',
    sigla: 'Sa',
    titulo: 'Explosivos industriais — contrato anual 2026',
    categoria: 'Insumos e Explosivos',
    descricao: 'Cotação para fornecimento anual de emulsão bombeada e iniciadores para operações em Mariana (MG) e Anchieta (ES).',
    local: 'Mariana, MG',
    prazo: '12 dias',
    valor: 'R$ 25M - R$ 32M',
    candidatos: 5,
    status: 'aberta',
    publicada: 'há 3 dias',
    match: 94
  },
  {
    id: 'rfq-005',
    mineradora: 'Companhia Brasileira de Lítio',
    sigla: 'L',
    titulo: 'Sistema de flotação para concentração de lítio',
    categoria: 'Beneficiamento e Processamento',
    descricao: 'Projeto e fornecimento de células de flotação para nova planta de concentração de espodumênio com capacidade de 1.2 Mt/ano.',
    local: 'Araçuaí, MG',
    prazo: '25 dias',
    valor: 'R$ 18M - R$ 24M',
    candidatos: 3,
    status: 'aberta',
    publicada: 'há 4 dias',
    match: 85
  },
  {
    id: 'rfq-006',
    mineradora: 'Nexa Resources',
    sigla: 'N',
    titulo: 'Frota elétrica para operação subterrânea',
    categoria: 'Equipamentos e Maquinário Pesado',
    descricao: 'Aquisição de 6 LHDs elétricos para operação em Vazante (MG) — meta de descarbonização da operação subterrânea.',
    local: 'Vazante, MG',
    prazo: '45 dias',
    valor: 'R$ 38M - R$ 48M',
    candidatos: 4,
    status: 'aberta',
    publicada: 'há 6 dias',
    match: 90
  }
];

// ── RODADAS DIGITAIS ────────────────────────────────────────────────
const RODADAS = [
  {
    id: 'rod-001',
    titulo: 'Equipamentos de Mineração Subterrânea',
    data: '2026-06-03',
    dataLabel: '03 Jun · Terça-feira',
    horario: '14h – 17h',
    mineradoras: ['Nexa Resources', 'Anglo American', 'Lundin Mining', 'Jaguar Mining'],
    vagas: 20,
    inscritos: 14,
    valor: 'R$ 1.200 por fornecedor',
    status: 'aberta',
    destaque: true
  },
  {
    id: 'rod-002',
    titulo: 'Tecnologia & Automação para Mineração',
    data: '2026-06-10',
    dataLabel: '10 Jun · Terça-feira',
    horario: '14h – 17h',
    mineradoras: ['Vale', 'Samarco', 'Mineração Usiminas', 'CSN Mineração'],
    vagas: 20,
    inscritos: 9,
    valor: 'R$ 1.500 por fornecedor',
    status: 'aberta'
  },
  {
    id: 'rod-003',
    titulo: 'ESG, Descarbonização e Compliance SBCE',
    data: '2026-06-17',
    dataLabel: '17 Jun · Terça-feira',
    horario: '14h – 17h',
    mineradoras: ['Vale', 'Anglo American', 'Kinross', 'Nexa', 'Equinox Gold'],
    vagas: 25,
    inscritos: 21,
    valor: 'R$ 1.800 por fornecedor',
    status: 'aberta',
    destaque: true
  },
  {
    id: 'rod-004',
    titulo: 'Logística e Supply Chain para Mineração',
    data: '2026-06-24',
    dataLabel: '24 Jun · Terça-feira',
    horario: '14h – 17h',
    mineradoras: ['Vale Carajás', 'MRN', 'Mineração Maracá'],
    vagas: 18,
    inscritos: 6,
    valor: 'R$ 1.000 por fornecedor',
    status: 'aberta'
  },
  {
    id: 'rod-005',
    titulo: 'Insumos, Explosivos e Detonação',
    data: '2026-07-01',
    dataLabel: '01 Jul · Terça-feira',
    horario: '14h – 17h',
    mineradoras: ['Vale', 'CSN', 'Samarco', 'Kinross'],
    vagas: 15,
    inscritos: 3,
    valor: 'R$ 1.500 por fornecedor',
    status: 'em-breve'
  }
];

// ── HEADER ESTÁTICO (HTML compartilhado) ────────────────────────────
function renderHeader(activeNav = '') {
  return `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="topbar-left">
          <span class="topbar-item">🇧🇷 <strong>Plataforma oficial IBRAM</strong></span>
          <span class="topbar-item">📞 +55 (31) 3047-7300</span>
          <span class="topbar-item">✉️ contato@exposibram24x7.com.br</span>
        </div>
        <div class="topbar-right">
          <a class="topbar-link" href="#">🌐 PT-BR</a>
          <a class="topbar-link" href="#">Ajuda</a>
          <a class="topbar-link" href="#">Para Mineradoras</a>
        </div>
      </div>
    </div>
    <header class="header">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <img src="assets/img/exposibram-24x7.png" alt="Exposibram 24x7 · Mineração do Brasil" class="logo-img">
        </a>
        <nav class="nav">
          <a href="index.html" class="nav-link ${activeNav==='home'?'active':''}">Início</a>
          <a href="diretorio.html" class="nav-link ${activeNav==='diretorio'?'active':''}">Diretório</a>
          <a href="rfq.html" class="nav-link ${activeNav==='rfq'?'active':''}">Oportunidades</a>
          <a href="rodadas.html" class="nav-link ${activeNav==='rodadas'?'active':''}">Rodadas Digitais</a>
          <a href="inteligencia.html" class="nav-link ${activeNav==='intel'?'active':''}">Inteligência</a>
          <a href="conteudo.html" class="nav-link ${activeNav==='conteudo'?'active':''}">Conteúdo</a>
          <a href="demo.html" class="nav-link tour" title="Tour guiado de 5 minutos para apresentações executivas">Tour Executivo</a>
        </nav>
        <div class="header-actions">
          <button class="btn-icon" title="Notificações" style="position:relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5"/><path d="M9 17a3 3 0 006 0"/></svg>
            <span class="badge">3</span>
          </button>
          <a href="dashboard.html" class="user-chip">
            <span>Sandvik Brasil</span>
            <div class="user-avatar">SB</div>
          </a>
        </div>
      </div>
    </header>
  `;
}

// ── FOOTER COMPARTILHADO ────────────────────────────────────────────
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" style="display:inline-block; background:#fff; border-radius:10px; padding:12px 18px;">
              <img src="assets/img/exposibram-24x7.png" alt="Exposibram 24x7" style="height:48px; width:auto; display:block;">
            </a>
            <p>A plataforma digital permanente que conecta toda a cadeia produtiva da mineração brasileira 365 dias por ano.</p>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Plataforma</h4>
            <ul>
              <li><a href="diretorio.html">Diretório de Empresas</a></li>
              <li><a href="rfq.html">Oportunidades</a></li>
              <li><a href="rodadas.html">Rodadas Digitais</a></li>
              <li><a href="inteligencia.html">Inteligência</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Para Empresas</h4>
            <ul>
              <li><a href="#">Cadastre-se como Fornecedor</a></li>
              <li><a href="#">Para Mineradoras</a></li>
              <li><a href="#">Planos e Preços</a></li>
              <li><a href="#">Membro Fundador</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Recursos</h4>
            <ul>
              <li><a href="conteudo.html">Notícias</a></li>
              <li><a href="#">Relatórios</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Central de Ajuda</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Institucional</h4>
            <ul>
              <li><a href="#">Sobre o IBRAM</a></li>
              <li><a href="#">DeCarbonMine</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div class="partners-band" style="margin-bottom: 36px;">
          <span class="partners-label">Uma iniciativa de</span>
          <img src="assets/img/ibram.jpg" alt="IBRAM" class="p-ibram">
          <span style="color: var(--gray-400); font-size: 20px; font-weight: 400;">&amp;</span>
          <img src="assets/img/decarbonmine.png" alt="DeCarbonMine" class="p-dcm">
        </div>
        <div class="footer-bottom">
          <div>© 2026 Exposibram 24x7 · Uma iniciativa IBRAM &amp; DeCarbonMine</div>
          <div class="footer-partners">
            <span>SOB LICENÇA</span>
            <span style="color: var(--gold-400); font-weight: 600">IBRAM</span>
            <span>·</span>
            <span>OPERADO POR</span>
            <span style="color: var(--gold-400); font-weight: 600">DECARBONMINE</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ── INIT (auto-render ao carregar) ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('app-header');
  const footerEl = document.getElementById('app-footer');
  const activeNav = document.body.dataset.nav || '';

  if (headerEl) headerEl.innerHTML = renderHeader(activeNav);
  if (footerEl) footerEl.innerHTML = renderFooter();

  // Tornar dados globais para uso nas páginas
  window.MOCK = { FORNECEDORES, CATEGORIAS, RFQS, RODADAS };
});
