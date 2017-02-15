$(document).ready(
		function() {

			/* jQuery Droppable */
			$(function() {
				$(".mn-items .rp-draggable li").draggable({
					appendTo : "body",
					revert: "invalid",
					helper : "clone"
				});
				$(".header-favorites ul").droppable({
					activeClass : "ui-state-default",
					hoverClass : "ui-state-hover",
					accept : ":not(.ui-sortable-helper)",
					drop : function(event, ui) {
						$( this ).find( ".placeholder" ).remove();
						$(ui.draggable).clone().appendTo(this);
					}
				}).sortable({
					items : "li:not(.placeholder)",
					sort : function() {
						$(this).removeClass("ui-state-default");
					}
				});
			});

			/* Click Star Icon to Add to Drop Here Container */
			$('ul.rp-draggable li .fa-star-o').click(function() {
				$(this).closest('li').clone().appendTo('.h-droped-list');
				$(this).closest('li').toggleClass('addedToFav');
			});

			/* Click Close Icon to Remove from Drop Here Container */
			$('.header-favorites').on('click',
					"ul.h-droped-list li .fa-star-o", function() {
						$(this).closest('li').remove();
					});
			
			$("button").click(function() {
				  var table = $(".h-droped-list").html();
				  $(".result").html(table);
				  
				});
			
			

				$("#save").click(function() {
					var nameForm= $("#nameform").val();
					var a=$('.h-droped-list');
					a.wrap('<span class="ab"></span>');
					var form=($('.ab').html());
					$.ajax({
                        dataType: "json",
                        type: 'POST',
                        data:
                        JSON.stringify({
                            nameForm: nameForm,
                            content: form
                        }),
                        contentType : "application/json",
                        url: "/ManagementUI-BE/addForm",
                        success: function (data) {
                        	var  a =data;
                            alert("Create project successfull");
                        },
                        error: function (data) {

                        }
                    });
					
					
					
					/*var a=$('.result');
					a.wrap('<span class="ab"></span>');
					alert($('.ab').html());
					
					$('.result').text(JSON.stringify({ 
				        data:$('.ab').html() 
				    }));*/
					});
			function render(){
				$("#234").click(function(){
					var a=$('.result');
					a.wrap('<span class="ab"></span>');
					var b=($('.ab').html());
				    $("#123").append(b);
				});
			}

		});