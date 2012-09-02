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
                // get new length of words
                //var new_length = $(this).val().split(/\b[\s,\.-:;]*/).length;
                // update
                $(this).parent().find('.counter').html( new_length + ' characters');
        });
    });
});
