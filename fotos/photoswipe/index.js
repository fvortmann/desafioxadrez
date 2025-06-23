import PhotoSwipeLightbox from 'https://fotos.desafioxadrez.com.br/fotos/photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('https://fotos.desafioxadrez.com.br/fotos/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
