jQuery(window).load(function($) {

	function show_lazy_images() {
    		jQuery('.wp-block img.lazy').each(function() {
    			jQuery(this).attr('src',jQuery(this).attr('data-src'));
    		});
	}

	show_lazy_images();

	setTimeout(
	function() 
	{
	  show_lazy_images();
	}, 5000);

	jQuery('.edit-post-header__settings .editor-post-publish-button').click(function() {
		show_lazy_images();
	});

});
