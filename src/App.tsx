import { Router } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

// Exercício: Album do JSONPlaceholder
// agora vamos fazer um exercício para treinarmos tudo que vimos até agora, então vamos treinar rotas, requisições, organização do próprio projeto.
// o projeto vai usar a biblioteca, a fake API JSONPlaceholder, estamos lendo ela e usando ela.
// temos 3 páginas nesse projeto.
// quando entramos no projeto, ele carrega e le os albuns de foto que tem la no nosso JSON Placeholder, e monta uma estrutura, e no link abaixo no canto inferior esquerdo do navegador, quando vamos passando o mouse nos albuns ele vai exibindo qual album é, album/1, album/3, etc, dai quando clicamos em um album, ele vai carregar as informações do album, como o nome dele, e as fotos daquele album também. Assim ele carrega o album que clicamos. Dai vamos carregar as informações do album, as fotos também, e vamos mostrar todas elas na pagina daquele album dai, se clicarmos em algum item do album, dai vamos abrir o item do album, dai ele atualiza a url para /photo/103, 103 que é o id da foto que clicamos, dai ele mostra o titulo da foto e a própria foto, dai se voltarmos ele volta para o album que estávamos, dai se voltarmos do album ele volta para a lista de album que temos.
// temos que fazer essas 3 telas.
// como criamos o projeto por cra não precisamos fazer isso, mas se tivessemos criado o projeto por vite usaríamos os seguintes comandos: npm init vite react-album --template react-ts e npm install para instalar todas as bibliotecas.
// o que precisamos fazer é instalar as 2 bibliotecas que vamos precisar para o projeto, ambas já tem suporte ao typescript, então não precisamos instalar os types delas para nada, que é a biblioteca axios e react-router-dom: npm install axios react-router-dom.
// nesse exercício temos que usar a api do json placeholder, abaixo estão todos os links que vamos precisar.
// API:
// url para carregar os albuns
// https://jsonplaceholder.typicode.com/albums
// esse endereço carrega as informações de um album em específico
// https://jsonplaceholder.typicode.com/albums/1
// esse endereço carrega as fotos daquele album em específico
// https://jsonplaceholder.typicode.com/albums/1/photos
// esse endereço carrega uma foto específica
// https://jsonplaceholder.typicode.com/photos/1
// são esses 4 itens que vamos precisar para montar esse projeto.
// Temos que usar o axios nesse projeto, não o fetch.
// Temos que usar o baseURL certinho no axios para esse projeto.
// temos que usar rotas e temos que criar as rotas em um componente com as rotas em forma de objeto.
// qualquer coisa podemos voltar nas aulas para relembrar algum conteúdo e continuar fazendo o projeto.
// link do projeto feito pelo professor do b7Web na aula do exercício do album do JSONPlaceholder.
// nesse projeto não foi focado em layout, para focarmos de fato nas funcionalidades do projeto.

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
