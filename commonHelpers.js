import{a as p,S as m,i as l}from"./assets/vendor-13ce9c37.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){const o="https://pixabay.com/api/",n={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(o,{params:n}).then(e=>e.data)}function d(){l.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function g(){l.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function y(r){l.warning({title:"Caution",message:`Error: ${r}`,position:"topRight"})}function h(r){return r.hits.map(({webformatURL:o,largeImageURL:i,tags:n,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
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
  <p><b>Views</b> ${t}</p>
  <p><b>Comments</b> ${a}</p>
  <p><b>Downloads</b> ${u}</p>
 </div>
</li>`).join(`
`)}function b(r){const o=h(r);s.galleryEl.innerHTML=o}let c=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const s={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.loader.style.display="none";s.formEl.addEventListener("submit",E);function E(r){r.preventDefault();const o=r.target.elements.text.value.trim();if(s.loader.style.display="block",!o){d();return}f(o).then(i=>{i.hits.length===0?(g(),s.galleryEl.innerHTML=""):(b(i),c.on("show.simplelightbox"),c.refresh()),s.loader.style.display="none"}).catch(i=>y(i)),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
