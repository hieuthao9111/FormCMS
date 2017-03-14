$("#btnAddFile").click(function() {
					var URLFile = $("#URLFile").val();
						$.ajax({
				            dataType: "json",
				            type: 'POST',
				            data:
				            JSON.stringify({
				                pathUrl: URLFile
				            }),
				            contentType : "application/json",
				            url: "/ManagementUI-BE/addForm",
				            success: function (data) {
				            	alert("ok")
				            },
				            error: function (data) {

				            }
				            
				        });
});