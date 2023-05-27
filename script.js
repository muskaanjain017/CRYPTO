async function loadCrypto(){
    
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

    const cryptos = await response.json();

    return cryptos;

}
async function loadCrypto(){
    
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

    const cryptos = await response.json();

    return cryptos;

}


document.addEventListener("DOMContentLoaded", async() =>{
    let cryptos=[];

    try{
        cryptos = await loadCrypto();
    }
    catch(e){
        console.log(e);
    }

    console.log(cryptos);
    let tablerow='';
    const table=cryptos.map(element => tablerow+`<tr>
    <td><image src=${element.image} width=20px height=20px></td>
    <td>${element.name}</td>
    <td>${element.symbol}</td>
    <td>${element.current_price}</td>
    <td>${element.fully_diluted_valuation}</td>
    <td>${(element.price_change_percentage_24h * 100).toFixed(2) }</td>
    <td>Mkt cap:${element.market_cap}</td>
    </tr>`);

    document.getElementById('table').innerHTML=table;
});
