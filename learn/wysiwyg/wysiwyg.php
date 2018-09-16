<?php

/* =============================================
 * WYSIWYG Input
 * 
 * @type WebRock Input
 * ============================================= */

class WRWYSIWYG implements WebRockInput {
    /* ===
     * Type
     * 
     * @role main object identifier
     * === */

    public $type = 'wysiwyg';

    /* ===
     * Config
     * 
     * @role returns the object config
     *       as an array
     * === */

    function config() {
        return array(
            'styles' => array(
                'wysiwyg-style' => inputs_url() . 'wysiwyg/wysiwyg.css'
            ),
            'scripts' => array(
                'wysiwyg-plugin' => inputs_url() . 'wysiwyg/wysiwyg.plugin.js',
                'wysiwyg-script' => inputs_url() . 'wysiwyg/wysiwyg.js'
            )
        );
    }

    /* ===
     * Generate
     * 
     * @role function used to generate
     *       the actual object html
     * 
     * @atts {array}
     * @content {string}
     * 
     * @return {string}
     * === */

    function create($name, $values = null, $default = null) {
        $html = '<textarea '
                . 'rows="5" '
                . 'class="form-control" '
                . 'name="' . $name . '" '
                . '>'
                . ($default != null ? $default : '')
                . '</textarea>';
        return $html;
    }

}

/* =============================================
 * Add to WebRock 
 * 
 * @role adds the object config and shortcode to
 *       the WebRock framework
 * ============================================= */
if (defined('WEBROCK')) {
    $input = new WRWYSIWYG();
    $webrock->add_input($input);
}
