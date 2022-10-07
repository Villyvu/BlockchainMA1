const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));



router.get("/listwallets", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"list all wallets","method":"listwallets","params":[]}`;
    var options = {
      url: `http://${USER}:${PASS}@127.0.0.1:18443/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data)
      }
    };
    request(options, callback);
  });

  router.get("/getinfo/:wallet", (req, res) => {
    var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "getwalletinfo", "params": []}`;
    var options = {
      url: `http://${USER}:${PASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    console.log(options.url)
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data)
      }
      
    };
    request(options, callback);
  });

  router.get("/getnewaddress/:wallet", (req, res) => {
    var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "getnewaddress", "params": []}`;
    var options = {
      url: `http://${USER}:${PASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    console.log(options.url)
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data)
      }
      
    };
    request(options, callback);
  });

  router.get("/send/:wallet/:amount/:address", (req, res) => {
    var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "sendtoaddress", "params": ["${req.params.address}", ${req.params.amount}]}`;
    var options = {
      url: `http://${USER}:${PASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    console.log(options.url)
    console.log(dataString)
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data)
      }
      
    };
    request(options, callback);
  });

  router.get("/listunspent/:wallet", (req, res) => {
    var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": [0]}`;
    var options = {
      url: `http://${USER}:${PASS}@127.0.0.1:18443/wallet/${req.params.wallet}`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    console.log(options.url)
    console.log(dataString)
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data)
      }
      
    };
    request(options, callback);
  });
module.exports = router;