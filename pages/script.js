$( ".remove-item" ).click(function() {
  $(this).parent().remove();
});

$( ".add-item" ).click(function() {
    new_event=$('.new-event').val();
  $(this).parent().after( '<div class="list-group-item list-group-item-action list-group-item-primary"><span class="item-botton remove-item">&nbsp;-&nbsp;</span>'+new_event+'</div>' );
});