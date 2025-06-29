import{a as p,S as m,i as l}from"./assets/vendor-13ce9c37.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(t){const o="https://pixabay.com/api/",s={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(o,{params:s}).then(e=>e.data)}function f(){l.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function g(){l.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function y(t){l.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"})}function h(t){return t.hits.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${s}"
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
`)}function b(t){const o=h(t);n.galleryEl.innerHTML=o}let c=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.loader.style.display="none";n.formEl.addEventListener("submit",E);function E(t){t.preventDefault();const o=t.target.elements.text.value.trim();if(!o){f();return}n.loader.style.display="block",n.galleryEl.innerHTML="",d(o).then(i=>{i.hits.length===0?g():(b(i),c.on("show.simplelightbox"),c.refresh()),n.loader.style.display="none",t.target.reset()}).catch(i=>{y(i),n.loader.style.display="none",t.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
