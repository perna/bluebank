#BlueBank

Demonstração da aplicação [aqui](https://bluebank-anderson.herokuapp.com/#/user/1)

Para instalar a aplicação no sistema em ambiente local são necessários:

* NodeJS versão 6.x;
* npm versão 3.x;
* docker (para instalação do Postgres), podendo ser substituida por uma instalação local do banco;
* docker-compose.

Executar no diretório do projeto o seguinte comando no terminal para instalação:
```
npm install
```
Para executar a aplicação execute o comando abaixo no terminal:
```
npm run dev
```

A aplicação pode ser aberta no browser de sua preferência utilizando a seguinte url:
```
http://localhost:3000
```

Para criar o container com a imagem do Postgresql digite o seguinte comando:
```
docker-compose up -d
```


É necessário consumir a API para inserção dos dados básicos

###Endpoints disponiveis:

*GET /api/clients*
Retorna lista todos os clientes cadastrados.

*GET /api/clients/id*
Retorna cliente segundo id especificado.

*POST /api/clients/*
Cria um novo cliente.
formato para envio: JSON.
Exemplo: 
```
{
	cpf: 10743341830
}
```
Retorna o novo cliente


*POST /api/agency/*
Cria um nova agencia.
Não há parametros de envio.
Obs.: Por motivo do desafio não exigir como critério a criação de agencias, a aplicação cria automaticamente uma agencia a cada solicitação


*POST /api/accounts/*
Cria um nova conta bancária.
formato para envio: JSON.
Exemplo: 
```
{
	agency: 1, //id da agencia no qual será vinculada a conta
	client: 1, //id do cliente que será o titular da conta
	balance: 1000.00 // saldo inicial da conta
}
```

*POST /api/accounts/transfer*
Realiza a transferência entre contas.
formato para envio: JSON.
Exemplo: 
```
{
	emmiter: 1, //id do cliente que realizará a transferencia
	agency: 0002, //numero da agencia de destino do valor a ser transferido
	account: 000000002, // numero da conta de destino do valor a ser transferido
	value: 100.00 //valor a ser transferido
}
```

*GET /api/history/id*
Retorna o histórico de transações segundo id especificado.


###Navegação via web:

A titulo de avaliação do teste, o acesso aos dados do usuário de forma local é feito através da url:
```
http://localhost:3000/#/user/1
```
O mesmo acesso pode ser feito a aplicação de teste hospedada no Heroku através da url:

```
https://bluebank-anderson.herokuapp.com/#/user/1
```

Como não há uma interface administrativa o acesso a outros usuários pode ser feito simplesmente alterando o parametro da url indicada acima para um outro valor, por exemplo:
```
http://localhost:3000/#/user/2
```
Ou

```
https://bluebank-anderson.herokuapp.com/#/user/2
```