# Plataforma de roteiros educacionais

Aplicação web desenvolvida com React e Vite para auxiliar alunos e professores no acesso, criação e revisão de roteiros de estudo. A interface oferece fluxos específicos para cada perfil, dados locais de demonstração e conteúdo complementar consultado na Wikipédia.

## Funcionalidades

- Escolha entre os perfis de aluno e professor.
- Login com usuários cadastrados em arquivo local.
- Filtragem de roteiros por ano escolar e disciplina.
- Visualização da explicação, tema, duração, professor responsável e revisão pedagógica.
- Consulta de texto de apoio pela API da Wikipédia, com estados de carregamento, erro e tentativa novamente.
- Questionários com alternativas, correção e justificativas.
- Menu exclusivo para professor consultar roteiros ou solicitar novos conteúdos.
- Solicitação de roteiros em etapas: credencial, especificação e prazo de entrega.

## Tecnologias

- React 19
- React Router
- Vite
- JavaScript e JSX
- CSS
- ESLint

## Pré-requisitos

- Node.js 20.19 ou versão superior
- npm

## Instalação

Na raiz deste projeto, instale as dependências:

```bash
npm install
```

## Como executar

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Cria o build de produção em `dist/`. |
| `npm run preview` | Serve localmente o build de produção. |
| `npm run lint` | Executa a análise estática com ESLint. |

## Estrutura do projeto

```text
src/
├── components/
│   ├── CardRoteiro/
│   ├── Forms/
│   ├── Header/
│   ├── Questionario/
│   ├── RevisaoProfessor/
│   └── TextoApoio/
├── data/
│   ├── professores.json
│   ├── roteiros.json
│   └── users.json
├── pages/
│   ├── Inicio/
│   ├── Login/
│   ├── MenuProfessor/
│   ├── MenuRoteiro/
│   ├── Roteiro/
│   ├── Roteiros/
│   └── SolicitarRoteiro/
├── App.jsx
├── index.css
└── main.jsx
```

## Rotas principais

| Rota | Finalidade |
|---|---|
| `/` | Seleção do perfil do usuário. |
| `/login` | Autenticação local. |
| `/menu-roteiro` | Seleção de ano escolar e disciplina. |
| `/roteiros` | Lista dos roteiros encontrados. |
| `/roteiros/:id` | Conteúdo detalhado de um roteiro. |
| `/menu-professor` | Menu de professor. |
| `/solicitar-roteiro-credencial` | Credenciais da solicitação. |
| `/solicitar-roteiro-info` | Especificações do roteiro. |
| `/solicitar-roteiro-prazo` | Prazo de entrega. |

## Dados de demonstração

Os usuários estão definidos em [`src/data/users.json`](./src/data/users.json), os professores em [`src/data/professores.json`](./src/data/professores.json) e os roteiros em [`src/data/roteiros.json`](./src/data/roteiros.json).

A autenticação e os dados são simulados apenas em arquivos locais. Esse projeto não deve ser usado para autenticação real ou armazenamento de credenciais em ambiente de produção.

## Build de produção

```bash
npm run build
npm run preview
```

## Licença

Projeto desenvolvido para fins acadêmicos.
