# Projeto API Netflix - Módulo 4



#### Nesse projeto iremos utilizar um framework para back-end que auxilia no desenvolvimento de aplicações eficientes, o NestJs.

O NestJs utiliza como padrão TypeScript e possui sintaxe parecida com o Angular. E falando nisso, o NestJs também utiliza o Express por "debaixo dos panos."

Para dar início no projeto, precisamos instalar o NestJs no nosso projeto, com o seguinte comando:

``npm i -g @nestjs/cli``

Feito isso, vamos criar nosso projeto, usando o comando: ``nest new nome-do-projeto``

Em nosso projeto usamos o seguinte: ``nest new mod4-projeto1-filmes``

Para salvar os dados utilizamos o banco de dados PostgreSql e como meio de comunicação foi usado o Prisma.

O comando utilizado para a instalação do Prisma é: ``npm install prisma --save-dev``

Utilizar a configuração básica do Prisma: ``npx prisma init``

Devemos realizar o comando a seguir para a criação do Prisma Client e assim pode acessar e utilizar suas funcionalidades:

``npm install @prisma/client``

Feito isso, será criado a pasta prisma>schema.prisma, local onde será criado nosso modelo de nosso cadastro no banco de dados, onde constam os campos e tipos de dados a serem recebidos, bem como a indicação de link entre os schemas (one to many).

![schema](C:\Users\wsr2k\Desktop\schema.png)

O schema utilizado em nosso projeto, foi conforme a imagem acima.

Após a criação do schema, devemos realizar os seguintes comando, para a criação no PostgreSql:

``npx prisma db push``

``npx prisma generate``

##### Obs.: Lembrando que sempre que algo no schema for alterado, devemos realizar os comandos acima novamente, para que nossas tabelas estejam sempre atualizadas e em funcionamento.

Criar uma pasta lib e dentro dessa, realizar os seguintes comandos no terminal:

``mkdir lib`` criação da pasta lib.

``touch lib/prisma.ts`` para usuários de Mac ou Linux esse comando criará o arquivo ``prisma.ts`` na pasta lib, no windows devemos criar esse arquivo manualmente e inserir o seguinte código:

```javascript
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```

Agora, sempre que precisar acessar seu banco de dados, você pode importar a instância do prisma para o arquivo onde for necessária.



Criando nossos recursos utilizando a praticidade do NestJs.

Para criar um recurso novo, podemos utilizar um comando muito legal do NestJs, onde quando é criado o novo recurso já são criados as pastas estruturais do recurso, classes DTO e o CRUD pronto para utilização.

Utilize o comando: ``nest g resource nome_do_recurso``

Em nosso projeto usamos: ``nest g resource filmes``  , ``nest g resource genero`` , ``nest g resource participante``

Após as alterações nas dependências e rotas dos CRUDs nosso projeto está pronto para testarmos.

Iremos utilizar nesse primeiro momento o ``Prisma Studio`` para realizarmos os primeiros testes de cadastros.

Comando a ser realizado: ``npx prisma studio`` 

Deverá abrir uma janela em seu navegador igual a esta:

![](D:\mod4-projeto1-filmes\img\prisma.png)

Para realizar o primeiro cadastro de filme, antes devemos cadastrar o gênero, conforme a imagem abaixo:

* Clicar em: ``Add record``
* Id é gerado automaticamente
* Definir o ``gênero`` do filme (exemplo: Animação)
* Clicar em ``SAVE 1 CHANGE.``

![](https://github.com/wsr2k2/mod4-projeto1-filmes/blob/master/img/prisma%20studio.png)

Agora com o gênero cadastrado podemos cadastrar nosso primeiro filme, na aba ``FILME``. Conforme imagem abaixo:

* Id gerado automaticamente.
* Preencher os campos a seguir: ``nome`` , ``url imagem``, ``data de lançamento`` , ``duração do filme``, escolher o ``gênero`` na lista 
* Clicar em ``Save 1 change``

![](D:\mod4-projeto1-filmes\img\cadastro filme.png)

Após o cadastro, a tela ficará assim:

![](D:\mod4-projeto1-filmes\img\filme cadastrado.png)

Logo após o cadastro do filme, caso o usuário desejar, pode cadastrar quem estrelou ou co-estrelou o filme, bastando apenas inserir na aba ``participante``, com os seguintes dados:

* Id gerado automaticamente
* Nome
* Url da imagem
* Nascimento
* Escolher o filme a qual participou

Para deletar um registro, caso o filmes tenha um ``participante`` relacionado, o usuário primeiramente deve excluir o ``participante`` e após isso excluir o ``filme`` selecionado. Para isso basta selecionar o item e clicar em ``Delete 1 record`` em seguida ``Save 1 change``

Nesse aplicativo também temos como realizar todos esses passos diretamente em um API Client, por exemplo: Postman, Thunder Client, Insominia, dentre outros.

Utilizado aqui o Thunder Client pela facilidade de estar diretamente atrelado ao Vs Code.

Para inicializar nossa aplicação no Vs Code, devemos realizar o seguinte comando: ``npm run start:dev`` 

Disponibilizado uma collection com os comandos dos CRUDs das rotas: ``filmes`` , ``genero`` , ``participante``	

Na imagem abaixo, mostrado a estrutura em Json, dados a serem inseridos e tipos dos dados esperados.

![](D:\mod4-projeto1-filmes\img\thunder.png)

No quadro a esquerda, usando a estrutura Json, o usuário deverá inserir os seguintes campos e tipos esperados:

* ``nome`` inserir o nome do filme { tipo de dado: String }

* ``imagem`` inserir a url da imagem desejada { tipo de dado: String }

* ``data_lacamento`` inserir a data de lançamento do filme { tipo de dado: String }

* ``tempo_duracao`` inserir a duração do filme { tipo de dado: String }

* ``generoid`` inserir o ID do gênero do filme { tipo de dado: Number }

* ``particpanteid`` inserir o ID do participante do filme { tipo de dado: Number }

  |   Rotas    |         Rota Filmes          |         Rota Genero          |         Rota Participante          |   Retorno Esperado    |
  | :--------: | :--------------------------: | :--------------------------: | :--------------------------------: | :-------------------: |
  |  ``GET``   |  ``localhost:3000/filmes``   |  ``localhost:3000/genero``   |  ``localhost:3000/participante``   |    ``Lista todos``    |
  |  ``GET``   | ``localhost:3000/filmes/id`` | ``localhost:3000/genero/id`` | ``localhost:3000/participante/id`` | ``Lista um cadastro`` |
  |  ``POST``  |  ``localhost:3000/filmes/``  |  ``localhost:3000/genero/``  |  ``localhost:3000/participante/``  |   ``Cadastra novo``   |
  | ``PATCH``  | ``localhost:3000/filmes/id`` | ``localhost:3000/genero/id`` | ``localhost:3000/participante/id`` |  ``Altera cadastro``  |
  | ``DELETE`` | ``localhost:3000/filmes/id`` | ``localhost:3000/genero/id`` | ``localhost:3000/participante/id`` |  ``Exclui cadastro``  |

  
