$(document).ready(function(){
    
    /* jQuery Droppable */
    $(function() {
        $( ".mn-items .rp-draggable li" ).draggable({
            appendTo: "body",
            helper: "clone"
        });
        $( ".header-favorites ul" ).droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            accept: ":not(.ui-sortable-helper)",
            drop: function( event, ui ) {
                //$( this ).find( ".placeholder" ).remove();
                $(ui.draggable).clone().appendTo(this);
            }
        }).sortable({
            items: "li:not(.placeholder)",
            sort: function() {
                $( this ).removeClass( "ui-state-default" );
            }
        });
    });
    
    
    /* Click Star Icon to Add to Drop Here Container */
    $('ul.rp-draggable li .fa-star-o').click(function(){
        $(this).closest('li').clone().appendTo('.h-droped-list');
        $(this).closest('li').toggleClass('addedToFav');
    });
    
    /* Click Close Icon to Remove from Drop Here Container */
    $('.header-favorites').on('click',"ul.h-droped-list li .fa-star-o",function(){
   $(this).closest('li').remove();
});
    
});