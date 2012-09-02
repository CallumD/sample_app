$(document).ready(function(){
/**
 * Character Counter for inputs and text areas
 */
$('.word_count').each(function(){
        // get current number of characters
        var length = 140 - $(this).val().length;
        // get current number of words
        //var length = $(this).val().split(/\b[\s,\.-:;]*/).length;
        // update characters
        $(this).parent().find('.counter').html( length + ' characters');
        // bind on key up event
        $(this).keyup(function(){
                // get new length of characters
                var new_length = 140 - $(this).val().length;
                $(this).parent().find('.counter').html( new_length + ' characters');

                if (new_length < 0){
		  $(this).parent().find('.post').attr("disabled", true);
                } else {
		  $(this).parent().find('.post').attr("disabled", false);
                }
        });
    });
});
