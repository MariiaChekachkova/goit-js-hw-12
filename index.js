import{a as u,S as p,i as a}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="56293806-02168ee71cd5fd65309551948";async function f(s){return(await u.get("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(){c.innerHTML=""}function y(){l.classList.remove("is-hidden")}function g(){l.classList.add("is-hidden")}function b(s){const o=s.map(t=>`
        <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <div class="info">
  <p><b>Likes</b><span>${t.likes}</span></p>
  <p><b>Views</b><span>${t.views}</span></p>
  <p><b>Comments</b><span>${t.comments}</span></p>
  <p><b>Downloads</b><span>${t.downloads}</span></p>
</div>
        </li>
        `).join("");c.innerHTML=o,m.refresh()}const L=document.querySelector(".form");L.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.show({message:"Please enter a search query.",position:"topRight",color:"red"});return}h(),y(),f(o).then(t=>{if(t.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",color:"red"});return}b(t.hits)}).catch(t=>{console.error("Error fetching images:",t)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
