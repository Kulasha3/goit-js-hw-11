import{a as f,S as p,i as c}from"./assets/vendor-2304a7e8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(t){const o="https://pixabay.com/api/",n={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(o,{params:n}).then(e=>e.data)}const s={galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.loader.style.display="none";let m=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(){s.loader.style.display="block"}function l(){s.loader.style.display="none"}function y(){s.galleryEl.innerHTML=""}function h(t){return t.hits.map(({webformatURL:o,largeImageURL:i,tags:n,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${n}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${e}</p>
  <p><b>Views</b> ${r}</p>
  <p><b>Comments</b> ${a}</p>
  <p><b>Downloads</b> ${u}</p>
 </div>
</li>`).join(`
`)}function b(t){const o=h(t);s.galleryEl.innerHTML=o,m.refresh()}function L(){c.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function E(){c.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(t){c.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"})}const S={formEl:document.querySelector(".form")};l();S.formEl.addEventListener("submit",$);function $(t){t.preventDefault();const o=t.target.elements.text.value.trim();if(!o){L();return}g(),y(),d(o).then(i=>{i.hits.length===0?E():b(i),l(),t.target.reset()}).catch(i=>{P(i),l(),t.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
