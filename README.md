# Vox Frontend Test

## Visão Geral

Este projeto é uma aplicação frontend desenvolvida em Angular para gerenciar solicitações de empresas. Ele permite listar, visualizar detalhes, cadastrar/editar e deletar empresas, utilizando um mock de API para simulação de backend.

---

## Estrutura do Projeto

```
vox-frontend-test/
├── angular.json                # Configuração do Angular
├── package.json                # Dependências e scripts
├── mocks/
│   └── db.json                 # Mock de dados para o json-server
├── public/
│   └── assets/                 # Imagens e ícones
├── src/
│   ├── app/
│   │   ├── app.component.*     # Componente raiz
│   │   ├── app.routes.ts       # Rotas principais
│   │   ├── shared/
│   │   │   ├── components/     # Componentes reutilizáveis (UI, layout)
│   │   │   ├── models/         # Modelos de dados (Company, Lists)
│   │   │   └── services/       # Serviços (API, empresas, listas, utilitários)
│   │   └── views/
│   │       └── solicitations/  # Telas de solicitações (listar, detalhes, formulário)
│   ├── environments/           # Configurações de ambiente
│   └── styles.css              # Estilos globais
└── ...
```

---

## Principais Funcionalidades

- **Listagem de Empresas:** Exibe todas as empresas cadastradas.
- **Detalhes da Empresa:** Mostra informações detalhadas da empresa selecionada.
- **Cadastro/Edição:** Permite criar ou editar empresas via formulário validado.
- **Exclusão de Empresas:** Permite deletar uma empresa selecionada diretamente pela tela de detalhes, com atualização automática da lista e feedback visual.
- **Mock API:** Utiliza `json-server` para simular operações de backend.

---

## Principais Arquivos e Funções

### Rotas (`src/app/app.routes.ts`)

- `/pedidos` — Lista de empresas (componente `SolicitationsComponent`)
- `/pedidos/novo` — Cadastro de nova empresa (componente `SolicitationFormComponent`)
- `/pedidos/editar/:id` — Edição de empresa existente (reutiliza o componente `SolicitationFormComponent` )

### Componentes

- **SolicitationsComponent:** Lista empresas, permite selecionar para ver detalhes e realizar a exclusão.
- **SolicitationFormComponent:** Formulário reativo para cadastro/edição de empresas.
- **CompanyCardComponent:** Card individual de empresa na listagem.
- **CompanyDetailComponent:** Exibe detalhes completos da empresa selecionada, com botões para editar e deletar.

### Serviços

- **CompanyService:** Gerencia o formulário, busca/lista empresas, envia dados para a API.
- **ApiService:** Abstrai requisições HTTP (GET, POST, PUT, DELETE).
- **ListsService:** Busca listas auxiliares (UFs, entidades de registro).
- **UtilsService:** Utilitários para exibir diálogos e toasts de feedback.

### Modelos

- **Company:** Estrutura de dados de uma empresa e solicitante.
- **UF, RegistrationEntity:** Modelos para estados e entidades de registro.

### Mock de Dados

- **mocks/db.json:** Contém empresas e entidades de registro para simulação.

---

## Como Executar o Projeto

1. **Pré-requisitos:**

   - Node.js (recomendado v18+)
   - npm

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o mock da API:**

   ```bash
   npm run mock
   ```

   O mock estará disponível em http://localhost:3000

4. **Inicie o frontend Angular:**
   ```bash
   npm run start
   ```
   O app estará disponível em http://localhost:4200

> **Dica:** Rode ambos os comandos em terminais separados para manter o frontend e o mock backend ativos.

---

## Observações Importantes

- O projeto utiliza Angular 19, Bootstrap 5 e SweetAlert2 para UI/UX.
- O formulário é validado e exibe mensagens de erro amigáveis.
- O mock de dados pode ser editado em `mocks/db.json`.
- Para adicionar novas entidades de registro, edite o array `entidade-registro` no mock.
- O código está modularizado para facilitar manutenção e expansão.

---

## Scripts Disponíveis

- `npm run start` — Inicia o servidor de desenvolvimento Angular.
- `npm run mock` — Inicia o mock de API com json-server.
- `npm run build` — Gera build de produção.
- `npm run test` — Executa os testes unitários.

---

## O que não fiz

Eu percebi que o spinner em alguns momentos sumia antes do momento correto.
Mas como são requisições super rápidas são mais difíceis de testar se realmente deixei melhor.
Em um projeto com mais dados seria mais fácil testar.

Então como eu iria ter que simular muitas situações que achei que não valiam o tempo, deixei isso de lado.
O spinner está funcionando perfeitamente só tem essa questão de por serem requisições rápida então ele passa despercebido.
