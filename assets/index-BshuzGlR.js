(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i={formElem:document.querySelector(".js-binance-form"),divElem:document.querySelector(".js-binance-info")};i.formElem.addEventListener("submit",n=>{n.preventDefault();const t=n.target.elements.query.value;if(t===""){alert("Введите название валюты");return}a(t).then(o=>{l(o)}),i.formElem.reset()});function a(n){const t="https://binance43.p.rapidapi.com",o="/ticker/price",c=new URLSearchParams({symbol:n.toUpperCase()}),e={"x-rapidapi-key":"f87a2c4187msh7ebdee87a014a97p104b47jsnad90f2d4d008","x-rapidapi-host":"binance43.p.rapidapi.com"},r=`${t}${o}?${c}`;return fetch(r,{headers:e}).then(s=>{if(!s.ok){alert("Не верное название валюты !!!");return}return s.json()})}function l({symbol:n,price:t}){const c=`<img
          class="coin-logo"
          src="https://assets.coincap.io/assets/icons/${n.toLowerCase().replace("btc","")}@2x.png"
        />
        <p class="coin-title">${n}</p>
        <p class="coin-price">${t}</p>`;return i.divElem.innerHTML=c}