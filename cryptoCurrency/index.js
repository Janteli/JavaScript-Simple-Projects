var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var d0ge = document.getElementById('dogecoin');



var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20ethereum%2C%20dogecoin&vs_currencies=usd",
    "header": {}
}

$.ajax(setting).done(function (respose){
    btc.innerHTML = respose.bitcoin.usd;
    eth.innerHTML = respose.ethereum.usd;
    doge.innerHTML = respose.dogecoin.usd;

})

