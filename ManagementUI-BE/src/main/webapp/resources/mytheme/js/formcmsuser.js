$(document).ready(
		function() {
			var listUser = [];
			function formatList(list) {
				$.each(list, function(i, value) {
					value.index = i + 1;
				});
				
			}
			function action() {
			$(".btnEditForm").click(function(){
	            var id = $(this).data("id");
	            $.ajax({
	                dataType: "json",
	                type: 'GET',
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
	                	var obj3 = JSON.stringify(data);
	                    var template = $('#detailDataFormTpl').html();
	                    var html = Mustache.render(template, data);
	                    var user = $('#user').val();
	                    $.each(data, function(key, value) {
	                    	if(value.account == user && value.textInput !=null && value.textArea !=null && value.password !=null && value.checkBox !=null){
	                        $("#detailDataFormDialog #listData").append('<tr><td>'+'<lable> ID: ' + value.lable + '</lable>'+'<br>' ,
	                        	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput +'"' + '>'+ '</lable>',
	                        	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>',
	                        	'<lable> CheckBox' +'<input class="form-control" type="checkbox" value=' + value.checkBox + '>'+ '</lable>',
	                        	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>'+'</td></tr>');
	                    }else if(value.account == user && value.textInput !=null && value.textArea !=null && value.password !=null){
	                    	$("#detailDataFormDialog #listData").append('<tr><td>'+'<lable> ID: ' + value.lable + '</lable>'+'<br>' ,
	                    	'<lable> Text' +'<input class="form-control" type="text" + value=' + '"' + value.textInput + '"' + '>'+'</lable>',
                        	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>',
                        	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>'+'</td></tr>');
	                    }else if(value.account == user && value.textInput !=null && value.textArea !=null){
	                    	$("#detailDataFormDialog #listData").append('<tr><td>'+'<lable> ID: ' + value.lable + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>',
	                            	'<lable> TextArea' +'<input class="form-control" type="text" value=' + value.textArea + '>'+ '</lable>'+'</td></tr>');
	    	                    }
	                    else if(value.account == user && value.textInput !=null && value.checkBox != null){
	                    	$("#detailDataFormDialog #listData").append('<tr><td>'+'<lable> ID: ' + value.lable + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>',
	    	                    	'<lable> CheckBox' +'<input class="form-control" type="checkbox" value=' + value.checkBox + '>'+ '</lable>'+'</td></tr>');
	    	                    }	
	                    else if(value.account == user && value.textInput !=null && value.password !=null){
	                    	$("#detailDataFormDialog #listData").append('<tr><td>'+'<lable> ID: ' + value.lable + '</lable>'+'<br>' +
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>'+
	                            	'<lable> Password' +'<input class="form-control" type="text" value=' + value.password + '>'+ '</lable>'+'</td></tr>');
	    	                    }
	                    	
	                    else if(value.account == user && value.textInput !=null){
	                    	$("#detailDataFormDialog #listData").append('<tr><td>'+'<lable>' + value.lable + '</lable>'+'<br>' ,
	    	                    	'<lable> Text' +'<input class="form-control" type="text" value=' + '"' + value.textInput + '"' + '>'+ '</lable>'+'</td></tr>');
	    	                    }	
	                    });
	                },
	                error: function (data) {
	    
	                }
	            });
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
			
			}
			function reloadForm() {
				$.ajax({
					dataType : "json",
					type : 'GET',
					url : "/ManagementUI-BE/FormUser",
					contentType : "application/json",
					success : function(data) {
						formatList(data.listForm);
						var template = $('#tplListUser').html();
						var html = Mustache.render(template, data);
						$('#listFormUser').html(html);
						action();
					},
					error : function(data) {
					}
				});
			}
			reloadForm();
		});


