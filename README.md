# wp_gutenberg_acf_lazy_images_fix
This jQuery script shows lazy loading images using lazy.js in Gutenberg if you use ACF Pro to create custom blocks.

But this code in the function.php of your WordPress Theme:

function lazy_enqueue_custom_admin_style() {
        wp_enqueue_script( 'admin_lazy', get_template_directory_uri() . '/assets/js/admin_lazy.js', array(),false,true);
}
add_action( 'admin_enqueue_scripts', 'lazy_enqueue_custom_admin_style' );


But the admin_lazy.js file in the wp-content/themes/your-theme/assets/js/ folder of your WordPress installation.


What does the script do?

It puts the image url from the data-src attribute to the src attribute. This happens after the whole window is loaded and again after 5 seconds - just to be sure.

When you change the content of a block, the images will hide. Because of this, the script will show the images again when the update button is clicked.
