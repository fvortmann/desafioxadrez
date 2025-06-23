import PhotoSwipeLightbox from '/fotos/photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/fotos/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
