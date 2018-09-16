/* =============================================
 * Add WYSIWYG Input
 * 
 * addInput(id, getValue, setValue, initInput);
 * ============================================= */
webrock.addInput(
        /* =============================================
         * Input Identifier
         * ============================================= */
        'wysiwyg',
        function($field) {
            /* =============================================
             * Input GetValue
             * 
             * @used for getting input type value
             * ============================================= */
            var value;
            var id = $('textarea', $field).attr('id');
            var editor = tinymce.get(id);

            if (editor)
                value = editor.getContent();
            else
                value = $('textarea', $field).val();

            return value;
        },
        function($field, value) {
            /* =============================================
             * Input SetValue
             * 
             * @used for setting input value on object
             *       edit action
             * ============================================= */
            $('textarea', $field).val(value);
        },
        function($field) {
            /* =============================================
             * Input Init
             * 
             * @used for initializing the input on object          
             *       edit or add actions
             * ============================================= */
            $('textarea', $field).attr('id', getRandomID('wysiwyg'));
            var self = this;
            var id = '#' + $('textarea', $field).attr('id');
            tinymce.init({
                selector: id,
                skin: 'light',
                plugins : ['link image code'],
                setup: function(editor) {
                    editor.on('change', function(e) {
                        self.updateObject();
                    });
                },
                extended_valid_elements : "span[!class]"
            });
        }

)
