# API Node.js com MongoDB

Este projeto consiste em uma API desenvolvida em Node.js utilizando o framework Express, com integração ao banco de dados não relacional MongoDB Atlas. A API segue o padrão MVC (Model-View-Controller) e oferece operações CRUD (Create, Read, Update, Delete) para manipulação de categorias e produtos.

## Estrutura de Pastas

API_Node_MongoDB : Pasta raiz do projeto.  
├── src : Pasta contendo os arquivos fonte da aplicação.  
│   ├── config : Arquivos de configuração.  
│   │   └── dbconnect.js : Conexão com o MongoDB.  
│   ├── controllers : Controladores da API.  
│   │   ├── categoryController.js : Operações relacionadas a categorias.  
│   │   └── productsController.js : Operações relacionadas a produtos.  
│   ├── models : Modelos de dados.  
│   │   ├── categoryModel.js : Modelo de dados para categorias.  
│   │   └── productModel.js : Modelo de dados para produtos.  
│   ├── routes : Definições de rotas da API.  
│   │   ├── categoriesRoutes.js : Rotas relacionadas a categorias.  
│   │   ├── productsRoutes.js : Rotas relacionadas a produtos.  
│   │   └── index.js  Arquivo principal de roteamento.  
│   └── app.js : Arquivo principal da aplicação.  
├── .gitignore : Arquivo para especificar quais arquivos e diretórios devem ser ignorados pelo Git.  
├── package-lock.json : Contém as versões exatas das dependências instaladas.  
├── package.json : Arquivo de manifesto do projeto Node.js, com informações sobre o projeto e suas dependências.  
└── server.js : Arquivo para inicialização do servidor.  

## Dependências

As dependências do projeto são listadas no arquivo `package.json` e podem ser instaladas usando o npm. Execute o seguinte comando para instalar as dependências:

        npm install

As principais dependências são:

- `express`: Framework web para Node.js.
- `mongodb`: Driver oficial do MongoDB para Node.js.
- `mongoose`: Biblioteca ODM (Object-Document Mapping) para modelagem de dados do MongoDB.

## Execução

Para executar a aplicação, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Clone este repositório para o seu ambiente local.
3. Navegue até o diretório do projeto e instale as dependências utilizando o comando `npm install`.
4. Inicie o servidor com o comando `npm run dev`.
5. O servidor estará em execução em `http://localhost:3000`.
6. Crie uma conta na versão cloud do MongoDB.
7. Configure uma nova database com usuário e senha gerando uma nova string de conexão.
8. Libere o seu IP local para poder conectar no banco de dados.

## Uso da API

A API oferece endpoints para manipulação de categorias e produtos. Os principais endpoints são:

- **GET /category**: Retorna todas as categorias cadastradas.
- **GET /category/:id**: Retorna uma categoria específica pelo ID.
- **POST /category**: Cria uma nova categoria.
- **PUT /category/:id**: Atualiza uma categoria existente.
- **DELETE /category/:id**: Remove uma categoria existente.
- **GET /product**: Retorna todos os produtos cadastrados.
- **GET /product/busca?product_name={nome}**: Retorna um produto pelo nome.
- **GET /product/:id**: Retorna um produto específico pelo ID.
- **POST /product**: Cria um novo produto.
- **PUT /product/:id**: Atualiza um produto existente.
- **DELETE /product/:id**: Remove um produto existente.

Este readme.md fornece uma visão geral do projeto, sua estrutura de pastas, descrição das dependências e instruções para execução e uso da API.

