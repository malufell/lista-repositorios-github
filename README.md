### Lista repositórios do GitHub:

Aplicação em React que implementa `react-router-dom` e `axios` para conectar na API do GitHub.

- na página principal, recebe um usuário do github
- com o axios, busca na api do github os respositórios disponíveis
- se usuário não existir, exibe mensagem de erro
- se usuário existir, salva os dados no localStorage e encaminha para página /repositories com o `useHistory`
- em /repositories, recupera os dados do localStorage para exibir em lista e depois limpa os dados do localStorage
- se não houver repositório para exibir, direciona o usuário de volta para página inicial com o `useHistory`

**Como executar o projeto:**
- clonar o repositório: ` git clone https://github.com/malufell/lista-repositorios-github.git`
- entrar na pasta do projeto: `cd lista-repositorios-github`
- instalar as dependências: `npm install`
- iniciar a aplicação: `npm start`
- acessar `http://localhost:3000/`
