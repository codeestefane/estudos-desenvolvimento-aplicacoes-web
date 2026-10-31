# Aplicação educacional

Aplicação web desenvolvida com React e Vite para apoiar o acesso de alunos e professores a roteiros educacionais. O usuário escolhe seu perfil, realiza o login e navega por opções de consulta ou solicitação de roteiros.

## Funcionalidades

- Seleção de perfil: aluno ou professor.
- Login com usuários armazenados localmente.
- Fluxos separados para alunos e professores.
- Consulta de roteiros por ano escolar e disciplina.
- Consulta de roteiros ou solicitação de novos roteiros pelo menu de professor.
- Solicitação de roteiros por fluxo de credencial, especificação e prazo.
- Componentes reutilizáveis para cabeçalho, campos, seletores e botões.

## Tecnologias

- React 19
- React Router
- Vite
- JavaScript
- CSS
- ESLint
- Axios e Day.js

## Pré-requisitos

- Node.js 20.19 ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/codeestefane/estudos-desenvolvimento-aplicacoes-web.git
cd estudos-desenvolvimento-aplicacoes-web/ap2/app
npm install
```

## Como executar

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção na pasta dist/
npm run preview  # serve o build localmente
npm run lint     # verifica o código com ESLint
```

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── Forms/
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Select/
│   └── Header/
├── data/
│   └── users.json
├── pages/
│   ├── Inicio/
│   ├── Login/
│   ├── MenuRoteiro/
│   ├── MenuProfessor/
│   └── SolicitarRoteiro/
├── App.jsx
├── index.css
└── main.jsx
```

## Rotas

| Rota | Finalidade |
|---|---|
| `/` | Seleção do perfil |
| `/login` | Autenticação |
| `/menu-roteiro` | Seleção de ano escolar e disciplina |
| `/roteiros` | Consulta dos roteiros disponíveis |
| `/menu-professor` | Menu de professor |
| `/solicitar-roteiro-credencial` | Informações de credencial da solicitação |
| `/solicitar-roteiro-info` | Especificação do roteiro |
| `/solicitar-roteiro-prazo` | Prazo de entrega |

## Dados de demonstração

Os usuários disponíveis para demonstração estão em [`src/data/users.json`](./src/data/users.json). A autenticação é apenas local e não deve ser usada para armazenar credenciais reais ou proteger dados sensíveis.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados são gerados na pasta `dist/`.

## Licença

Projeto desenvolvido para fins acadêmicos.
