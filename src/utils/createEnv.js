const fs = require('fs');

fs.writeFileSync('./.env', `URL_API_TWITTER=${process.env.URL_API_TWITTER}\n`);
fs.writeFileSync('./.env', `TOKEN=${process.env.TOKEN}\n`);
fs.writeFileSync('./.env', `PER_PAGE=${process.env.PER_PAGE}\n`);
fs.writeFileSync('./.env', `URL_GET_TWEET=${process.env.URL_GET_TWEET}\n`);
