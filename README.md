
# Projeto MVC e SOLID

Este projeto demonstra o uso da arquitetura MVC e dos princípios SOLID em uma aplicação Node.js. Inclui rotas para obter um token de acesso e enviar dados usando esses tokens.

## Estruturação do Projeto

```
.
├── controllers
│   ├── authController.js
│   ├── dataController.js
├── models
│   └── dataModel.js
├── routes
│   ├── authRoutes.js
│   ├── dataRoutes.js
├── services
│   ├── authService.js
│   ├── dataService.js
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── node_modules
```

## Setup

1. Clone do repositorio:
   ```bash
   git clone https://github.com/MatheusDourado/mvc-solid-api-novacap.git
   cd mvc-solid-api-novacap
   ```

2. Instalação de dependências:
   ```bash
   npm install
   ```

3. Criação do arquivo `.env` e suas variável de ambiente:
   ```env
   CLIENT_ID=your_client_id
   CLIENT_SECRET=your_client_secret
   TOKEN_URL=https://devs.seteservicos.com.br/ords/infra/oauth/token
   DATA_URL=https://devs.seteservicos.com.br/ords/infra/webservice/services
   ```

4. Start da aplicação:
   ```bash
   node app.js
   ```

## Rotas

### Pegar Token

- **Endpoint:** `/auth/get-token`
- **Método:** `POST`
- **Descrição:** Recupera um token de acesso.

### Enviar Dados

- **Endpoint:** `/data/send-data`
- **Método:** `POST`
- **Descrição:** Envia dados usando o token de acesso.

## Licença

Este projeto está licenciado sob a licença MIT.
