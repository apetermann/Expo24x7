# Exposibram 24x7 — Protótipo MVP

> **A feira permanente da mineração brasileira.**
> Plataforma digital que conecta toda a cadeia produtiva do setor mineral 365 dias por ano, sob a marca institucional do IBRAM, operada pela DeCarbonMine.

---

## 📍 Sobre este protótipo

Este repositório contém um **MVP visual navegável** da plataforma Exposibram 24x7. Não é o produto final — é a **especificação visual** que será entregue ao parceiro tecnológico (Vela APX / Constellation, Samba ou outro) como referência exata do que deve ser construído.

**O que este protótipo demonstra:**
- A arquitetura de 5 camadas do produto (Diretório, Matchmaking, Marketplace Comercial, Inteligência, Conteúdo)
- A jornada dos 5 públicos (mineradoras, fornecedores, startups, investidores, comunidade)
- A identidade visual e o sistema de design completo
- Os fluxos de monetização (assinatura, RFQ, rodadas, relatórios, leads)
- A diferenciação competitiva (selo IBRAM, módulo ESG/SBCE da DCM)

**O que este protótipo NÃO faz** (e que o parceiro vai construir):
- Backend real, banco de dados, autenticação
- Matchmaking com IA (aqui é apenas mockado)
- Integração com Zoom/Meet para rodadas
- Sistema de pagamentos
- Mobile app nativo

---

## 🎯 Visão de produto resumida

| Camada | Função | Monetização |
|---|---|---|
| **1. Diretório Inteligente** | Base verificada de 2.850+ empresas da cadeia produtiva | Foundation — sem cobrança direta |
| **2. Motor de Matchmaking** | Conexão automática demanda × oferta + Rodadas digitais semanais | Tickets por rodada (R$ 1.000-1.800) |
| **3. Marketplace Comercial** | Vitrine, destaque, leads, homologação express | Assinaturas + upsells (R$ 1.500-5.800/mês) |
| **4. Inteligência Setorial** | Relatórios trimestrais + dashboards + módulo ESG/SBCE | Relatórios avulsos + plano Enterprise |
| **5. Conteúdo e Comunidade** | Notícias, podcast, eventos, vagas, biblioteca | Reduz CAC, aumenta engajamento |

**North Star Metric:** GMV — volume de negócios facilitados pela plataforma.
Meta 18 meses: R$ 18 bi anualizados.

---

## 🗂 Estrutura do repositório

```
exposibram-24x7-mvp/
│
├── index.html              # Landing page institucional
├── diretorio.html          # Busca de empresas com filtros
├── empresa.html            # Perfil completo de fornecedor (case: Sandvik)
├── dashboard.html          # Área logada do fornecedor (KPIs, leads, performance)
├── rfq.html                # Sistema de RFQ (Request for Quotation)
├── rodadas.html            # Calendário de Rodadas Digitais de Negócios
├── inteligencia.html       # Módulo de Inteligência Setorial (relatórios + dashboards)
├── conteudo.html           # Conteúdo, podcast, vagas
│
└── assets/
    ├── styles.css          # Design system completo
    └── shared.js           # Mock data + componentes compartilhados
```

---

## 🎨 Sistema de Design

**Paleta institucional** (IBRAM × DCM):
- `--teal-900: #0D2B35` (azul-petróleo institucional)
- `--gold-600: #B8860B` (ouro — mineração, premium)
- `--gray-50/900` (sistema neutro para conteúdo)

**Tipografia:**
- **Playfair Display** — títulos (serif, peso institucional)
- **Inter** — corpo (sans, legibilidade B2B)
- **JetBrains Mono** — dados/números técnicos

**Princípios:**
- B2B institucional, não consumer-y
- Densidade de informação alta (executivos não rolam tela)
- Hierarquia visual clara (CTA principal sempre em ouro)
- Mobile-first mas otimizado para desktop (compradores de mineradora trabalham no notebook)

---

## 🚀 Como rodar localmente

Não precisa de build. É HTML/CSS/JS puro.

**Opção 1 — Abrir direto:**
```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/exposibram-24x7-mvp.git
cd exposibram-24x7-mvp

# Abra o index.html no navegador
open index.html   # macOS
xdg-open index.html   # Linux
start index.html   # Windows
```

**Opção 2 — Servidor local (recomendado para testar navegação):**
```bash
# Python 3
python -m http.server 8000

# Ou Node.js
npx serve .
```
Acesse `http://localhost:8000`.

---

## 🌐 Deploy no GitHub Pages (3 minutos)

1. **Crie o repositório no GitHub:**
   - Acesse https://github.com/new
   - Nome sugerido: `exposibram-24x7-mvp`
   - Visibilidade: Public (para uso do GitHub Pages gratuito)

2. **Faça o upload dos arquivos:**
   ```bash
   cd exposibram-24x7-mvp
   git init
   git add .
   git commit -m "MVP inicial - protótipo Exposibram 24x7"
   git branch -M main
   git remote add origin https://github.com/[seu-usuario]/exposibram-24x7-mvp.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages:**
   - Vá em **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` · Folder: `/ (root)`
   - Salve

4. **Acesse em ~1 minuto:**
   ```
   https://[seu-usuario].github.io/exposibram-24x7-mvp/
   ```

Esse é o link que vai para o e-mail do parceiro técnico.

---

## 🤝 Para o parceiro tecnológico

### O que estamos contratando

A construção da **plataforma de produção** que materialize este protótipo, em 3 fases:

**Fase 1 — MVP (90 dias)**
- Diretório com busca/filtros funcional
- Perfis de empresa editáveis
- Sistema básico de RFQ (publicação + candidatura)
- Calendário de rodadas com inscrição
- Autenticação (mineradora gratuita, fornecedor pago)
- Painel administrativo IBRAM × DCM

**Fase 2 — Escala (meses 4-9)**
- Matchmaking com IA (LLM + embeddings dos perfis)
- App mobile (React Native ou Flutter)
- Módulo de inteligência setorial (relatórios + dashboards)
- Integração de pagamentos (Stripe, Asaas)
- Internacionalização (EN, ES)

**Fase 3 — Marketplace transacional (meses 10-18)**
- Cotação eletrônica integrada
- Sistema de homologação digital
- Contratos com assinatura eletrônica
- Conexão com ERPs das mineradoras (Vale, Anglo)
- Escrow de pagamentos para deals menores

### Stack sugerida

| Camada | Tecnologia sugerida |
|---|---|
| Frontend Web | Next.js 14 (React Server Components) |
| Frontend Mobile | React Native + Expo |
| Backend | Node.js (NestJS) ou Python (FastAPI) |
| Banco principal | PostgreSQL + Prisma |
| Cache / fila | Redis + BullMQ |
| Busca | Meilisearch ou Algolia |
| IA / Embeddings | OpenAI + Pinecone (ou pgvector) |
| Storage | Cloudflare R2 ou S3 |
| Auth | Clerk ou Supabase Auth |
| Hosting | Vercel + Railway/Render |
| Observabilidade | Sentry + PostHog |

### Premissas inegociáveis

1. **LGPD-compliance** de origem — não como "feature futura"
2. **Multi-tenancy** desde o dia 1 — mineradoras e fornecedores têm visões diferentes
3. **API-first** — toda funcionalidade exposta via REST/GraphQL para futuras integrações
4. **Acessibilidade WCAG AA** — plataforma institucional tem que ser inclusiva
5. **Performance** — Core Web Vitals no verde em todas as páginas

### O que não muda

- O nome **Exposibram 24x7** (marca licenciada do IBRAM)
- A paleta institucional (azul-petróleo + ouro)
- As 5 camadas de produto
- O modelo de monetização (5 receitas empilhadas)
- A regra "mineradora não paga, fornecedor paga"
- A North Star Metric: GMV

---

## 📞 Contato

**Alex Sallum**
Founder · DeCarbonMine
Belo Horizonte, MG, Brasil

---

*Última atualização do protótipo: Maio 2026*
*Versão: MVP visual 0.1 · Para validação com parceiro técnico*
