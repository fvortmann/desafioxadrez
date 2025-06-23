var lightbox = new PhotoSwipeLightbox({
	gallery: '#my-gallery',
	children: 'a',
	// dynamic import is not supported in UMD version
	pswpModule: PhotoSwipe,
	spacing: 0.5, // 50% of viewport width
	maxWidthToAnimate: 1200,
	
	showHideAnimationType: 'zoom',
	showHideAnimationType: 'fade', //showHideAnimationType: 'none',

	// optionally disable zoom transition,
	// to create more consistent experience
	zoomAnimationDuration: false,
	
	//initialZoomLevel: 'fit', 
	//secondaryZoomLevel: 'fit', 
	//imageClickAction: 'close',
	//tapAction: 'close',

  // tap delay is removed if set to false
  doubleTapAction: false,
});

lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'download-button', order: 8, isButton: true, tagName: 'a',

    // SVG with outline
    html: {
      isCustomSVG: true,
      inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
      outlineID: 'pswp__icn-download'
    },

    // Or provide full svg:
    // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

    // Or provide any other markup:
    // html: '<i class="fa-solid fa-download"></i>' 

    onInit: (el, pswp) => {
      el.setAttribute('download', '');
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');

      pswp.on('change', () => {
        console.log('change');
        el.href = pswp.currSlide.data.src;
      });
    }
  });
});

lightbox.init();