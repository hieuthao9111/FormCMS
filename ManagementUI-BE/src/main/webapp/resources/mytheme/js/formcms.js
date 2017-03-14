$(document).ready(
		function() {
			var listUser = [];
			function formatList(list) {
				$.each(list, function(i, value) {
					value.index = i + 1;
				});
				
			}

						/*$.getJSON( "listData/22", function( data ) {
							var items = [];
							$.each( data, function( key, val ) {
								var obj = JSON.stringify(data);
								var jsonObj = JSON.parse(obj);
//								for (var i = 0; i < jsonObj.length; i++) {
								if(jsonObj.contains("text")){
								    alert("String Found");
								}
								if(obj.indexOf(".")>=0){
									alert("dfsd");
								}
//									for (var j=0;j<str.length;j++){
//										var o = str[j].type;
//										items.push("<li><textarea id=>"+o+"</textarea></li>");
//									}
//									
////									items.push("<li><textarea id=12233>123321</textarea></li>");
//								}
								//var obj2 = $.parseJSON(obj);
								
								//alert(obj);
								//var obj2 = JSON.parse(obj);
								//var arr = $.makeArray( obj );
								//items.push( "<li id='" + key + "'>" + obj + "</li>" );
							});
							
							$( "<ul/>", {
								"class": "my-new-list",
								html: items.join( "" )
							}).appendTo( "body" );
							});*/

			

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
			function myFunction() {
			    alert(id);
			};

			function action() {
				$("#btnAddForm").click(function() {
					var role = $("#userRole").val();
					var nameForm= $("#nameform").val();
					var userId = ($("#idUser").val());
					var userUse = ($("#userUse").val());
					if(role == 0){
						alert("You not is Admin")
					}else if(nameForm == null || nameForm== ''){
						$('#myModal1').modal('show');
					}
					else{
						var formdata=$('.h-droped-list');
						formdata.wrap('<span class="formData"></span>');
						var form=$('.formData').html();
						$.ajax({
				            dataType: "json",
				            type: 'POST',
				            data:
				            JSON.stringify({
				            	userId :userId,
				                nameForm: nameForm,
				                userUseForm: userUse,
				                content: form
				            }),
				            contentType : "application/json",
				            url: "/ManagementUI-BE/addForm",
				            success: function (data) {
				            	$('#myModal').modal('show')
				            	reload();
				            },
				            error: function (data) {

				            }
				            
				        });
						
					}
					});	
			$(".btnDeleteForm").click(function() {
				var role = $("#userRole").val();
				var id = $(this).data("id");
				// console.log("staffId:" +staffId);
				// console.log("projectId:" +projectId);
				if(role == 0){
					$('#myModalAdmin').modal('show')
				}
				else {
					var dele =confirm("delete?");
				if (dele == true) 
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

						},
						
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
	                            	//var fields = [];
	                            	var user = $('#user').val();
	                            	var textArea = $("#editFormDialog").find('#txtTextArea').val();
	                            	var textInput = $("#editFormDialog").find('#txtText').val();
	                            	var password = $("#editFormDialog").find('#txtPassword').val();
	                            	var checkBox = $("#editFormDialog").find('#txtCheckBox').val();
	                            	var radio = $("#editFormDialog").find('#txtRadio').val();
	                            	var lable = $("#editFormDialog").find('#txtLable').text();
	                            	var checkBook = $("input[type='checkbox']").val()
	                            	var idForm = $("#editFormDialog").find('#txtIdForm').val();
	                            		var items = $("#noidung1 input").map(function(index, elm) {
	                            		    return {type:elm.type};
	                            		});
	                            		var arr = [];
	                            		$.each(items, function(i, d){
	                            			arr.push(d);
	                            		});
	                            	var array = JSON.stringify(arr);
	                                $.ajax({
	                                    dataType: "json",
	                                    type: 'POST',
	                                    data:
	                                    JSON.stringify({
	                                        formId : idForm,
	                                        account : user,
	                                        lable : lable,
	                                    	arrValue  : array,
	                                        textInput : textInput,
	                                        textArea : textArea,
	                                        password : password,
	                                        checkBox : checkBox,
	                                        radio : radio
	                                    }),
	                                    contentType : "application/json",
	                                    url: "/ManagementUI-BE/saveData",
	                                    success: function (data) {
	                                        $( "#editFormDialog" ).dialog( "close" );
	                                        $('#myModal').modal('show')
	                                        reload();
	                                    },
	                                    error: function (data) {

	                                    }
	                                });
	                            	
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
	                url: "/ManagementUI-BE/detailData/" + id,
	                contentType : "application/json",
	                success: function (data) {
//	                	var items = $.map(data,function(index, elm) {
//	                		
//                		return [index.textInput , index.password, index.checkBox, index.textArea];
//	                		
//                		});
//	                	Array.prototype.clean = function(items) {
//	                		  for (var i = 0; i < this.length; i++) {
//	                		    if (this[i] == deleteValue) {         
//	                		      this.splice(i, 1);
//	                		      i--;
//	                		    }
//	                		  }
//	                		  return this;
//	                		};
//	                	var text = "";
//	                	var j;
//	                	
//	                	for(j =0; j<items.lenght; j++){
//	                		text += items[j];
//	                		
//	                	}
//	                	$('#detailDataFormDialog').append(text);
	                	var obj3 = JSON.stringify(data);
//	                	 alert(data);*/
	                	//alert(items);	
	                   
	                    var template = $('#detailDataFormTpl').html();
	                    var html = Mustache.render(template, data);
	                    //$('#detailDataFormDialog').html(html);
	                    var user = $('#user').val();
	                    $.each(data, function(key, value) {
	                    	if(value.account == user && value.textInput !=null && value.textArea !=null && value.password !=null && value.checkBox !=null){
	                        $("#detailDataFormDialog").append('<lable> ID: ' + value.id + '</lable>'+'<br>' ,
	                        	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput +'"' + '>'+ '</lable>',
	                        	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>',
	                        	'<lable> CheckBox' +'<input class="form-control" type="checkbox" value=' + value.checkBox + '>'+ '</lable>',
	                        	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>');
	                    }else if(value.account == user && value.textInput !=null && value.textArea !=null && value.password !=null){
	                    	$("#detailDataFormDialog").append('<lable> ID: ' + value.id + '</lable>'+'<br>' ,
	                    	'<lable> Text' +'<input class="form-control" type="text" + value=' + value.textInput + '>'+'</lable>',
                        	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>',
                        	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>');
	                    }else if(value.account == user && value.textInput !=null && value.textArea !=null){
	                    	$("#detailDataFormDialog").append('<lable> ID: ' + value.id + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + value.textInput + '>'+ '</lable>',
	                            	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>');
	    	                    }
	                    else if(value.account == user && value.textInput !=null && value.checkBox != null){
	                    	$("#detailDataFormDialog").append('<lable> ID: ' + value.id + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>',
	    	                    	'<lable> CheckBox' +'<input class="form-control" type="checkbox" value=' + value.checkBox + '>'+ '</lable>');
	    	                    }	
	                    else if(value.account == user && value.textInput !=null && value.password !=null){
	                    	$("#detailDataFormDialog").append('<lable> ID: ' + value.id + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + value.textInput + '>'+ '</lable>',
	                            	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>');
	    	                    }
	                    	
	                    else if(value.account == user && value.textInput !=null){
	                    	$("#detailDataFormDialog").append('<lable>' + value.id + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>');
	    	                    }	
	                    });
	                    //$('#detailDataFormDialog').append(obj3);
	                    $("#detailDataFormDialog li:empty" )
	                    .text( "" )
	                    .css( "background", "rgb(#fff)" );
	                    //alert(data[i]);
	                  
	                    //for(i = 0; i<data.length; i++){
	                    //}
//	                    var d = $('#noidung');
//	    			    d.html(d.text());
	                   
	                	 
	    				
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
			
/*			var inputBox = document.getElementById('chatinput');

			inputBox.onkeyup = function(){
			    document.getElementById('printchatbox').innerHTML = inputBox.value;
			}
			var defaultText = '"Input Lable"';*/
			//edit lable form
			function endEdit(e) {
			    var input = $(e.target),
			        label = input && input.prev();

			    label.text(input.val() === '' ? defaultText : input.val());
			    input.hide();
			    label.show();
			}

			$('.clickedit').hide()
			.focusout(endEdit)
			.keyup(function (e) {
			    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			        endEdit(e);
			        return false;
			    } else {
			        return true;
			    }
			})
			.prev().click(function () {
			    $(this).hide();
			    $(this).next().show().focus();
			});
			//paging
			jQuery(function($) {
                var items = $("#content tbody tr");
                var numItems = items.length;
                var perPage = 5;
                // Only show the first 2 (or first `per_page`) items initially.
                items.slice(perPage).hide();
                // Now setup the pagination using the `#pagination` div.
                $("#pagination").pagination({
                    items: numItems,
                    itemsOnPage: perPage,
                    cssStyle: "light-theme",
                    // This is the actual page changing functionality.
                    onPageClick: function(pageNumber) {
                        // We need to show and hide `tr`s appropriately.
                        var showFrom = perPage * (pageNumber - 1);
                        var showTo = showFrom + perPage;
                        // We'll first hide everything...
                        items.hide()
                             // ... and then only show the appropriate rows.
                             .slice(showFrom, showTo).show();
                    }
                });
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


