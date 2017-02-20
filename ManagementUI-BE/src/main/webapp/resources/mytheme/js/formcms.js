$(document).ready(
		function() {
			var listUser = [];
			function formatList(list) {
				$.each(list, function(i, value) {
					value.index = i + 1;
				});
				
			}

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
			
			/*$("button").click(function() {
				  var table = $(".h-droped-list").html();
				  $(".result").html(table);
				  
				});*/

			function action() {
			$(".btnDeleteForm").click(function() {
				var id = $(this).data("id");
				// console.log("staffId:" +staffId);
				// console.log("projectId:" +projectId);
				if (confirm("do you want to remove this form?")) {
					$.ajax({
						dataType : "json",
						type : 'DELETE',
						data : JSON.stringify({
							"id" : id,
						}),
						contentType : "application/json",
						url : "/ManagementUI-BE/deleteForm/"+id,
						success : function(data) {
							location.reload()
						},
						error : function(data) {

						}
						
					});
					
				}
				
			});
			
			$(".btnEditForm").click(function(){
	            var id = $(this).data("id");
	            $.ajax({
	                dataType: "json",
	                type: 'GET',
	                /*data : JSON.stringify({
						"id" : id,
					}),*/
	                url: "/ManagementUI-BE/detailForm/" + id,
	                contentType : "application/json",
	                success: function (data) {
	                    var template = $('#editFormTpl').html();
	                    var html = Mustache.render(template, data);
	                    $('#editFormDialog').html(html);
	                    var noidung = $('#noidung1');
	    			    noidung.html(noidung.text());
	    			    $( "#editFormDialog" ).dialog({
	                        title: "Edit Form",
	                        show: {
	                            effect: "blind",
	                            duration: 1000
	                        },
	                        height: "auto",
	                        width: 850,
	                        modal: true,
	                        buttons: {
	                            "Save Data": function() {
	                            	var fields = [];
	                            	$('#editFormDialog').each(function() {
	                            		var type = $("#editFormDialog : type");
	                            		//var type = $this.find('type').val();
	                            		var textInput = $("#editFormDialog").find('#txtText').val();
		                                /*var textArea = $("#editFormDialog").find('#txtTextArea').val();
		                                var password = $("#editFormDialog").find('#txtPassword').val();
		                                var checkBox = $("#editFormDialog").find('#txtCheckBox').val();
		                                var radio = $("#editFormDialog").find('#txtRadio').val();*/
	                            	},
	                            	fields.push({
	                                    textArea: type,
	                                    textInput: textInput
	                                }),
	                                $.ajax({
	                                    dataType: "json",
	                                    type: 'POST',
	                                    data:
	                                    JSON.stringify({
	                                        password  : fields
	                                        /*textArea : textArea,
	                                        password : password,
	                                        checkBox : checkBox,
	                                        radio : radio*/
	                                    }),
	                                    contentType : "application/json",
	                                    url: "/ManagementUI-BE/saveData",
	                                    success: function (data) {
	                                        $( "#editFormDialog" ).dialog( "close" );
	                                        alert("Save Data successfull");
	                                        reload(0, 0, "");
	                                    },
	                                    error: function (data) {

	                                    }
	                                }));
	                            	
	                            },
	                            Cancel: function() {
	                                $( "#editFormDialog" ).dialog( "close" );
	                                location.reload()
	                            }
	                        },
	                        hide: {
	                            effect: "explode",
	                            duration: 1000
	                        }
	                    });
	                            	

	                    
	    				
	    				/*$('#detailFormDialog').text(JSON.stringify({ 
	    			        data:$('.ab').html() 
	    			    }));*/
	    				/*$("#234").click(function(){
	    					var a=$('#detailFormDialog');
	    					a.wrap('<span class="ab"></span>');
	    					var b=($('.ab').html());
	    				    $("#123").append(b);
	    				});*/
	                   /* $("#detailFormDialog" ).dialog({
	                    	title: "Detail Form",
	                        show: {
	                            effect: "blind",
	                            duration: 1000
	                        },
	                        height: 500,
	                        width: 750,
	                        modal: true,
	                        buttons: {
	                            
	                            Cancel: function() {
	                                $( "#detailFormDialog" ).dialog( "close" );
	                            }
	                        },
	                        hide: {
	                            effect: "explode",
	                            duration: 1000
	                        }
	                    });*/
	                },
	                error: function (data) {
	    
	                }
	            });
	        });
			$(".btnDetailForm").click(function(){
	            var id = $(this).data("id");
	            $.ajax({
	                dataType: "json",
	                type: 'GET',
	                /*data : JSON.stringify({
						"id" : id,
					}),*/
	                url: "/ManagementUI-BE/detailForm/" + id,
	                contentType : "application/json",
	                success: function (data) {
	                    var template = $('#detailFormTpl').html();
	                    var html = Mustache.render(template, data);
	                    $('#detailFormDialog').html(html);
	                    var d = $('#noidung');
	    			    d.html(d.text());
	                    
	    				
	    				/*$('#detailFormDialog').text(JSON.stringify({ 
	    			        data:$('.ab').html() 
	    			    }));*/
	    				/*$("#234").click(function(){
	    					var a=$('#detailFormDialog');
	    					a.wrap('<span class="ab"></span>');
	    					var b=($('.ab').html());
	    				    $("#123").append(b);
	    				});*/
	                   /* $("#detailFormDialog" ).dialog({
	                    	title: "Detail Form",
	                        show: {
	                            effect: "blind",
	                            duration: 1000
	                        },
	                        height: 500,
	                        width: 750,
	                        modal: true,
	                        buttons: {
	                            
	                            Cancel: function() {
	                                $( "#detailFormDialog" ).dialog( "close" );
	                            }
	                        },
	                        hide: {
	                            effect: "explode",
	                            duration: 1000
	                        }
	                    });*/
	                },
	                error: function (data) {
	    
	                }
	            });
	        });
				$("#234").click(function(){
					/*a.wrap('<span class="abc"></span>');
					var b=($('.abc').html());*/
					var a=$('#noidung');
    				a.wrap('<span class="ab"></span>');
    				var b=$('.ab').html();
    				$("#123").append(b).html();
    				/*var d = $('#noidung');
    			    d.html(d.text());*/

				});
			}
			function reload() {
				$.ajax({
					dataType : "json",
					type : 'GET',
					url : "/ManagementUI-BE/listForm",
					contentType : "application/json",
					success : function(data) {
						formatList(data.listForm);
						var template = $('#tplList').html();
						var html = Mustache.render(template, data);
						$('#listForm').html(html);
						action();
					},
					error : function(data) {
					}
				});
			}
			reload();
		});
$("#btnAddForm").click(function() {
	
	var nameForm= $("#nameform").val();
	if(nameForm == null || nameForm== ''){
		//alert("Input name form !");
		$('#myModal1').modal('show');
		//$('#myModal').modal('toggle');
	}else{
		var formdata=$('.h-droped-list');
		formdata.wrap('<span class="formData"></span>');
		var form=$('.formData').html();
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
            	if($('#myModal').modal('show')){
            		setTimeout(function() {
            			 location.reload()
            			  },1000);
            	}else{alert("112");}
            	//reload();
            },
            error: function (data) {

            }
            
        });
		
	}
	
	/*var a=$('.result');
	a.wrap('<span class="ab"></span>');
	alert($('.ab').html());
	
	$('.result').text(JSON.stringify({ 
        data:$('.ab').html() 
    }));*/
	});