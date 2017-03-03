function action() {
        $("#btnAddProject").click(function(){
            $(".datepicker").datepicker({
                dateFormat: 'yy-mm-dd'
            }); 
            $( "#addProjectDialog" ).dialog({
                show: {
                    effect: "blind",
                    duration: 1000
                },
                height: 500,
                width: 750,
                modal: true,
                buttons: {
                    "Add Project": function() {
                        var projectName = $("#addProjectDialog").find("#txtprojectname").val();
                        var startDate = $("#addProjectDialog").find("#txtstartdate").val();
                        var directManager = $("#addProjectDialog").find("#txtdirectmanager").val();
                        var seniorManager = $("#addProjectDialog").find("#txtseniormanager").val();
                        $.ajax({
                            dataType: "json",
                            type: 'POST',
                            data:
                            JSON.stringify({
                                projectName: projectName,
                                startDate: startDate,
                                directManager: directManager,
                                seniorManager: seniorManager
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
                        $( "#addProjectDialog" ).dialog( "close" );
                    }
                },
                hide: {
                    effect: "explode",
                    duration: 1000
                }
            });
        });
    }