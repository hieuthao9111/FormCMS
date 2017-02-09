$(document).ready(function() {
	var listUser = [];
	function formatList(list) {
		$.each(list, function(i, value) {
			value.index = i + 1;
		});
		
	}

	function action() {
		$("#btnAddUser").click(function(){
            $(".datepicker").datepicker({
                dateFormat: 'yy-mm-dd'
            }); 
            $( "#addUserDialog" ).dialog({
            	title: "Add User",
                show: {
                    effect: "blind",
                    duration: 1000
                },
                height: 500,
                width: 750,
                modal: true,
                buttons: {
                    "Add User": function() {
                        var name = $("#addUserDialog").find("#txtname").val();
                        var account = $("#addUserDialog").find("#txtaccount").val();
                        var password = $("#addUserDialog").find("#txtpassword").val();
                        var rule = $("#addUserDialog").find("#txtrule").val();
                        $.ajax({
                            dataType: "json",
                            type: 'POST',
                            data:
                            JSON.stringify({
                                name: name,
                                account: account,
                                password: password,
                                rule: rule
                            }),
                            contentType : "application/json",
                            url: "/ManagementUI-BE/add",
                            success: function (data) {
                                $( "#addProjectDialog" ).dialog( "close" );
                                alert("Create project successfull");
                                reload();
                            },
                            error: function (data) {

                            }
                        });
                        
                    },
                    Cancel: function() {
                        $( "#addUserDialog" ).dialog( "close" );
                    }
                },
                hide: {
                    effect: "explode",
                    duration: 1000
                }
            });
        });
		$(".btnDelete").click(function() {
			var id = $(this).data("id");
			// console.log("staffId:" +staffId);
			// console.log("projectId:" +projectId);
			if (confirm("do you want to remove this user to project?")) {
				$.ajax({
					dataType : "json",
					type : 'DELETE',
					data : JSON.stringify({
						"id" : id,
					}),
					contentType : "application/json",
					url : "/ManagementUI-BE/delete/"+id,
					success : function(data) {
						reload();
					},
					error : function(data) {

					}
				});
			}

		});
		$(".btnEditUser").click(function() {
            var user = $(this).data('id');
            $.ajax({
                dataType: "json",
                type: 'GET',
                contentType : "application/json",
                url: "/ManagementUI-BE/user/" + user,
                success: function (data) {
                    var template = $('#editUserTpl').html();
                    var html = Mustache.render(template, data);
                    $('#editUserDialog').html(html);
                    $( "#editUserDialog" ).dialog({
                        title: "Edit User",
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        height: "auto",
                        width: 850,
                        modal: true,
                        buttons: {
                            "Save User": function() {
                                var name = $("#editUserDialog").find('#txtName').val();
                                var account = $("#editUserDialog").find('#txtAccount').val();
                                var password = $("#editUserDialog").find('#txtPassword').val();
                                var rule = $("#editUserDialog").find('#txtRule').val();
                                $.ajax({
                                    dataType: "json",
                                    type: 'PUT',
                                    data:
                                    JSON.stringify({
                                    	id : user,
                                        name  : name,
                                        account : account,
                                        password : password,
                                        rule : rule
                                    }),
                                    contentType : "application/json",
                                    url: "/ManagementUI-BE/edit",
                                    success: function (data) {
                                        $( "#editUserDialog" ).dialog( "close" );
                                        alert("Save user successfull");
                                        reload(0, 0, "");
                                    },
                                    error: function (data) {

                                    }
                                });
                            },
                            Cancel: function() {
                                $( "#editUserDialog" ).dialog( "close" );
                            }
                        },
                        hide: {
                            effect: "explode",
                            duration: 1000
                        }
                    });
                    
                },
                error: function (data) {
                		x
                }
            });
        });
		$(".btnDetail").click(function(){
            var user = $(this).data("id");
            $.ajax({
                dataType: "json",
                type: 'GET',
                url: "/ManagementUI-BE/user/" + user,
                contentType : "application/json",
                success: function (data) {
                    var template = $('#detailUserTpl').html();
                    var html = Mustache.render(template, data);
                    $('#detailUserDialog').html(html);
                    $("#detailUserDialog" ).dialog({
                    	title: "Detail user",
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        height: 500,
                        width: 750,
                        modal: true,
                        buttons: {
                            
                            Cancel: function() {
                                $( "#detailUserDialog" ).dialog( "close" );
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
		
	}
	function table(){
		  $('#myTable').dataTable();
	}
	function reload() {
		$.ajax({
			dataType : "json",
			type : 'GET',
			url : "/ManagementUI-BE/list",
			contentType : "application/json",
			success : function(data) {
				formatList(data.list);
				var template = $('#tplList').html();
				var html = Mustache.render(template, data);
				$('#listProject').html(html);
				action();
			},
			error : function(data) {
			}
		});
	}
	reload();
});




