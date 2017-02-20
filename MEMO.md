* Iniciei o desenvolvimento pelo Front-End para ter visão das informações a serem disponibilizadas pela API;

* Fiz um esboço rápido da interface e depois fui trabalhar no desenvolvimento da API;

* Optei pela utilização do AngularJS devido à experiências anteriores que tive com o framework;

* Escolhi o Postgresql pois tenho usado este banco em outros projetos e o heroku possui suporte ao mesmo;

* Tentei a utilizar migrations mas a documentação do SequelizeJS é bastante pobre nesse sentido, então optei por utilizar a forma padrão que cria as tabelas do banco na inicialização da aplicação;

* Fiz o deploy no heroku mas na primeira vez me tomou um pouco de tempo devido à configuração de conexão do banco com o Sequelize, mas depois ocorreu tudo bem;

* Na minha opinião, faltou minificar os arquivos JavaScript da aplicação para gerar um bundle diminuindo assim o número de requisições;

* O projeto tem "cara" de MVP, sendo necessário várias refatorações no futuro para melhorar a arquitetura.

