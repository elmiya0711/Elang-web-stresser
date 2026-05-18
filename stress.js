// stress.js
const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const { HttpsProxyAgent } = require('https-proxy-agent');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const proxies = fs.readFileSync('proxy.txt', 'utf8')
  .split('\n')
  .filter(Boolean)
  .filter(p => p.match(/^\d+\.\d+\.\d+\.\d+:\d+$/)); // format IP:PORT

rl.question('Enter GET URL: ', (urlGet) => {
  rl.question('Enter POST URL: ', (urlPost) => {
    rl.question('Duration (seconds): ', (durasi) => {
      rl.question('Requests per second: ', (reqPerSec) => {
        const dataPost = { key1: 'value1', key2: 'value2' };
        const endTime = Date.now() + parseInt(durasi) * 1000;

        const interval = setInterval(() => {
          if (Date.now() >= endTime) clearInterval(interval);

          const randomReq = Math.random() < 0.5;
          const selectedProxy = proxies[Math.floor(Math.random() * proxies.length)];
          const agent = new HttpsProxyAgent('http:                     
          const config = { httpsAgent: agent };

          if (randomReq) {
            axios.get(urlGet, config)
              .then(() => console.log(`GET sent via ${selectedProxy}`))
              .catch(e => console.error('//' + selectedProxy);
          const config = { httpsAgent: agent };

          if (randomReq) {
            axios.get(urlGet, config)
              .then(() => console.log(`GET sent via ${selectedProxy}`))
              .catch(e => console.error('Error:', e.message, 'via', selectedProxy))
          } else {
            axios.post(urlPost, dataPost, config)
              .then(() => console.log(`POST sent via ${selectedProxy}`))
              .catch(e => console.error('Error:', e.message, 'via', selectedProxy))
          }
        }, 1000 / parseInt(reqPerSec));
      });
    });
  });
});
