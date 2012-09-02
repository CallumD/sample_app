$(document).ready(function(){
/**
 * Character Counter for inputs and text areas
 */
$('.word_count').each(function(){
        
        // get current number of characters
        var length = 140 - $(this).val().length,
        text = ' characters remaining';
        // get current number of words
        //var length = $(this).val().split(/\b[\s,\.-:;]*/).length;
        // update characters
        $(this).parent().find('.counter').html( length + text);
        // bind on key up event
        $(this).keyup(function(){
                // get new length of characters
                var new_length = 140 - $(this).val().length;
                $(this).parent().find('.counter').html( new_length + text);

                if (new_length < 0){
		  $(this).parent().find('.post').attr("disabled", true);
		  $(this).parent().find('.counter').css('color', 'red');
                } else {
		  $(this).parent().find('.post').attr("disabled", false);
		  $(this).parent().find('.counter').css('color','');
                }
        });
    });
});
