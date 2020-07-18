#### Project Friend
This project is builded top of React and Fastify(NodeJS).

##### Backend
in backend folder RestApi structure is found, he have two endpoints above:
    - /persons [GET, POST, PUT, DELETE]
    - /persons/playgame - Sort players and send email.

to [PUT, DELETE] and `/persons/playgame` endpoints the return is http 204 (No Content).

Lib used in product: `mongoose`, `mongodb`, `mailgun`, `fastify`.

###### Install and run
```bash
    git clone https://github.com/lpj145/ad-2019
    cd ad-2019/backend
    npm install
    npm run serve
```

###### Envvars
create .env file on backend root folder, with structure above:
```env
SERVER_HOST=127.0.0.1
SERVER_PORT=9080
SERVER_CORS=http://localhost:3000

# Database Env Vars
DATABASE_DSN=mongodb://teste:teste@localhost:27017/company-test

# Mailgun
MAILGUN_DOMAIN=<-MAILGUN_DOMAIN->
MAILGUN_API_KEY=<-MAILGUN_API_KEY->
MAILGUN_FROM_EMAIL=<-MAILGUN_SELF_EMAIL->

```

##### Frontend
in frontend folder you can find everything about frontend (ReactApp)
```bash
    git clone https://github.com/lpj145/ad-2019
    cd ad-2019/frontend
    npm install
    npm run start
```

##### Tests
This project don't implement tests because i have little time to finish, please, i appreciate you comprehension.