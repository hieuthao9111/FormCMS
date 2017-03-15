$(document).ready(
		function() {
$("#btnAddFile").click(function() {
					var URLFile = $("#URLFile").val();
					var nameFile = $("#nameFile").val();
						$.ajax({
				            dataType: "json",
				            type: 'POST',
				            data:
				            JSON.stringify({
				                pathUrl: URLFile,
				                namefile : nameFile
				            }),
				            contentType : "application/json",
				            url: "/ManagementUI-BE/addFile",
				            success: function (data) {
				            	alert("ok")
				            },
				            error: function (data) {

				            }
				            
				        });
});
$("#btnShowPicture").click(function() {
	$('#gallery').css("background-image", "src='D:\Work\FormCMS\ManagementUI-BE\src\main\webapp\resources\mytheme\css\images\test.jpg'");
		$.ajax({
            dataType: "json",
            type: 'Get',
            url: "/ManagementUI-BE/showFile",
            contentType : "application/json",
            success: function (data) {
            	var template = $('#uploadFileTpl').html();
                var html = Mustache.render(template, data);
                $('#loadPicture').html(html);
            	//$("#loadPicture").append('<img src=' + '"' + URLFile +'"' + '>')
            	//alert("ok")
            },
            error: function (data) {

            }
            
        });
});
});