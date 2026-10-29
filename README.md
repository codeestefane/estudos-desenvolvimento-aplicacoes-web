# Aplicação educacional

Aplicação web desenvolvida com React e Vite para a seleção de perfil, autenticação de usuários e consulta de roteiros conforme a disciplina e o ano escolar.

## Funcionalidades

- Seleção entre perfil de aluno ou professor.
- Login com validação dos dados cadastrados localmente.
- Seleção de ano escolar e disciplina.
- Navegação para a página de roteiros disponíveis.
- Componentes reutilizáveis de formulário e cabeçalho.

## Tecnologias utilizadas

- React 19
- React Router
- Vite
- Axios
- JavaScript
- CSS
- ESLint

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

No diretório do projeto, instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` por padrão. Endereço e porta podem ser confirmados na saída do terminal.

## Scripts disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera o build de produção
npm run preview  # serve o build gerado localmente
npm run lint     # executa o ESLint
```

## Estrutura do projeto

```text
src/
├── assets/                 # Imagens e ícones da interface
├── components/             # Componentes compartilhados
│   ├── Forms/              # Botão, campo de texto e seleção
│   └── Header/             # Cabeçalho com navegação
├── data/                   # Dados locais, incluindo usuários
├── pages/                  # Páginas da aplicação
│   ├── Inicio/             # Seleção de perfil
│   ├── Login/              # Autenticação
│   ├── MenuInicial/        # Seleção de ano escolar e disciplina
│   └── Roteiros/           # Consulta de roteiros
├── App.jsx                 # Definição das rotas
├── index.css               # Estilos globais
└── main.jsx                # Ponto de entrada da aplicação
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Seleção de perfil |
| `/login` | Login |
| `/menuroteiro` | Seleção de ano escolar e disciplina |
| `/roteiros` | Exibição dos roteiros |

## Dados de acesso

Os usuários de demonstração são definidos em `src/data/users.json`. Como os dados são armazenados localmente, esse arquivo não deve ser usado para autenticação real ou informações sensíveis.

## Build de produção

Para gerar os arquivos otimizados da aplicação:

```bash
npm run build
```

Os arquivos serão disponibilizados na pasta `dist/`.

## Licença

Este projeto foi desenvolvido para fins acadêmicos.
