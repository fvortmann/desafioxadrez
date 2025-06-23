alert(123) 

var lightbox = new PhotoSwipeLightbox({
gallery: '#my-gallery',
children: 'a',
// dynamic import is not supported in UMD version
pswpModule: PhotoSwipe 
});
lightbox.init();