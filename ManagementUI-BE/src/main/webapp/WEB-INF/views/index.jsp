<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:import url="header1.jsp" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Droppable - Simple photo manager</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/mytheme/css/style.css">
  <style>
  #gallery { float: left; width: 0; min-height: 12em; margin: 10px}
  .gallery.custom-state-active { background: red; }
  .gallery li { float: left; width: 96px; padding: 0.4em; margin: 0 0.4em 0.4em 0; text-align: center; }
  .gallery li h5 { margin: 0 0 0.4em; cursor: move; }
  .gallery li a { float: right; }
  .gallery li a.ui-icon-zoomin { float: left; }
  .gallery li img { width: 100%; cursor: move; }
 
  #trash { float: right; width: 50%; min-height: 18em; padding: 1%; margin: 10px }
  #trash h4 { line-height: 16px; margin: 0 0 0.4em; }
  #trash h4 .ui-icon { float: left; }
  #trash .gallery h5 { display: none; }
  </style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
 
    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
      $trash = $( "#trash" );
 
      
    $( "li", $gallery ).draggable({

	
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
      
    }

);
   
    
    /* $( "#gallery" ).sortable({
        revert: true
      });
      $( "#draggable" ).draggable({
        connectToSortable: "#gallery",
        helper: "clone",
        revert: "invalid"
      });
      $( "ul, li" ).disableSelection(); */
 
    // Let the trash be droppable, accepting the gallery items
    $trash.droppable({
      accept: "#gallery > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      
      drop: function( event, ui ) {
    	  if ($(ui.draggable).hasClass('new')) {
              $('.new').draggable({
                  revert: true
              });
          } else {
              $(this).append($(ui.draggable).clone().draggable({
                  helper: "original"
              }).addClass('new'));
          }
      },
      out: function (event, ui) {
          $(ui.draggable).fadeOut(1000, function () {
              $(this).remove();
          });
      }
    });
 
    // Let the gallery be droppable as well, accepting items from the trash
    /* $gallery.droppable({
      accept: "#trash li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
    }); */
    $('li.list-group-item list-group-item-success').click(function(){
    	  $(this).remove();
    	});
 //make sure your DOM is ready
    	$("li.list-group-item").click(function(){ // bind click on every div that has the class box
    	    $(this).fadeOut(300, function(){ $(this).remove() }); //remove the clicked element from the dom
    	});
 
 
     /*  $( "#gallery" ).draggable({
        connectToSortable: "#trash",
        helper: "clone",
        revert: "invalid"
      }); */
 
    /* // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
 
        $item.find( "a.ui-icon-trash" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "500px" })
            .find( "img" )
              .animate({ height: "100px" });
        });
      });
    }
 
    // Image recycle function
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "500px")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "100px" )
          .end()
          .appendTo( $gallery )
          .fadeIn();
      });
    } */
 
    // Image preview function, demonstrating the ui.dialog used as a modal window
    /* function viewLargerImage( $link ) {
      var src = $link.attr( "href" ),
        title = $link.siblings( "img" ).attr( "alt" ),
        $modal = $( "img[src$='" + src + "']" );
 
      if ( $modal.length ) {
        $modal.dialog( "open" );
      } else {
        var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
          .attr( "src", src ).appendTo( "body" );
        setTimeout(function() {
          img.dialog({
            title: title,
            width: 400,
            modal: true
          });
        }, 1 );
      }
    } */
 
    /* // Resolve the icons behavior with event delegation
    $( "ul.gallery > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-trash" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }
 
      return false;
    }); */
  } );
  </script>
</head>
<body>


<div style="background-color: white; width: 100%;">
<div class="ui-widget ui-helper-clearfix">
<ul id="gallery" class="gallery ui-helper-reset ui-helper-clearfix" >
        <li style="width:500px; text-align: left" class="list-group-item list-group-item-success"><label>Choice:<input type="text" class="choice-label"></label></li>
        <li style="width:500px; text-align: left" class="list-group-item list-group-item-success"><label>Text area<textarea class="form-control" rows="3"></textarea></label></li>
        <li style="width:500px; text-align: left" class="list-group-item list-group-item-success"><label>Check box <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></label></li>
</ul>


<div id="trash" class="ui-widget-content ui-state-default">
  <h4 class="ui-widget-header"><span class="ui-icon ui-icon-trash">Form</span> Form</h4>
</div>
 
</div>
</div>
</body>
</html>