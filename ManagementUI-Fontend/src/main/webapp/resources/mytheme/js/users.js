$( document ).ready(function() {
    function selectOpportunities(list) {
        $("#txtDTVRequest").val(list[0].dtvRequest);
        $("#txtSkill").val(list[0].skill);
        $("#txtRequestDate").val(list[0].requestDated);
        $("#txtTotalRequest").val(list[0].totalOfrequest);
        $( "#listOpp" ).change(function(el) {
            $.each( list, function( key, value ) {
                var selectId = parseInt($(el.target).val());
                var id = parseInt(value.id);
                if ( selectId == id) {
                    $("#txtDTVRequest").val(value.dtvRequest);
                    $("#txtSkill").val(value.skill);
                    $("#txtRequestDate").val(value.requestDated);
                    $("#txtTotalRequest").val(value.totalOfrequest);
                }
            });
        });
    }
    function selectTrainingCourse(list) {
        $("#txtTrainer").val(list[0].trainer);
        $("#txtEnd").val(list[0].end);
        $("#txtStatus").val(list[0].status === '0' ? 'Open' : 'Closed');
        $( "#listTrainingCourses" ).change(function(el) {
            
            $.each( list, function( key, value ) {
                var selectId = parseInt($(el.target).val());
                var id = parseInt(value.id);
                if ( selectId == id) {
                    $("#txtTrainer").val(value.trainer);
                    $("#txtEnd").val(value.end);
                    $("#txtStatus").val(value.status === '0' ? 'Open' : 'Closed');
                }
            });
        });
        
    }
    function renderTrainingDialog(data) {
        $.each( data.listTraining, function( i, value ) {
            value.index = i + 1;
        });
        var template = $('#listTrainingTpl').html();
        var html = Mustache.to_html(template, data);
        $('#listTrainingDialog').html(html);
        selectTrainingCourse(data.listAllTraining);
        $(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd'
        }); 
        $( "#listTrainingDialog" ).dialog({
            show: {
                effect: "blind",
                duration: 1000
            },
            height: 500,
            width: 750,
            modal: true,
                        
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
        
    }
    function createListStateStatus() {
        $.ajax({
            dataType: "json",
            type: 'GET',
            data:
            {
            },
            url: "/HR-backend/staff/listState",
            success: function (data) {
                $.each( data.list, function( key, value ) {
                    $('#txtstate').append($('<option>', {
                        value: parseInt(value.stateId),
                        text: value.name
                    }));
                });
                $( "#txtstate" ).change(function(el) {
                    $('#txtstatus').empty();
                    var selectId = parseInt($(el.target).val());
                    $.ajax({
                        dataType: "json",
                        type: 'GET',
                        data:
                        {
                        },
                        url: "/HR-backend/staff/listStatusByState/"+selectId,
                        success: function (data) {
                            $.each( data.list, function( key, value ) {
                                $('#txtstatus').append($('<option>', {
                                    value: parseInt(value.id.statusId),
                                    text: value.name
                                }));
                            });
                        },
                        error: function (data) {

                        }
                    });
                });
            },
            error: function (data) {

            }
        });
    }
    function createListStateStatusForEdit(stateId, statusId) {
        $.ajax({
            dataType: "json",
            type: 'GET',
            data:
            {
            },
            url: "/HR-backend/staff/listState",
            success: function (data) {
                //-----------------------for edit----------------------------------
                $.each( data.list, function( key, value ) {
                    $('#changeStateStatusDialog').find('#txtEditstate').append($('<option>', {
                        value: parseInt(value.stateId),
                        text: value.name
                    }));
                });
                $.ajax({
                    dataType: "json",
                    type: 'GET',
                    data:
                    {
                    },
                    url: "/HR-backend/staff/listStatusByState/"+stateId,
                    success: function (data) {
                        $.each( data.list, function( key, value ) {
                            $("#changeStateStatusDialog").find('#txtEditstatus').append($('<option>', {
                                value: parseInt(value.id.statusId),
                                text: value.name
                            }));
                        });
                        $("#changeStateStatusDialog").find("#txtEditstate").val(stateId);
                        $("#changeStateStatusDialog").find("#txtEditstatus").val(statusId);
                    },
                    error: function (data) {

                    }
                });
                $("#changeStateStatusDialog").find( "#txtEditstate" ).change(function(el) {
                    var selectId = parseInt($(el.target).val());
                    $.ajax({
                        dataType: "json",
                        type: 'GET',
                        data:
                        {
                        },
                        url: "/HR-backend/staff/listStatusByState/"+selectId,
                        success: function (data) {
                            $("#changeStateStatusDialog").find('#txtEditstatus').empty();
                            $.each( data.list, function( key, value ) {
                                $("#changeStateStatusDialog").find('#txtEditstatus').append($('<option>', {
                                    value: parseInt(value.id.statusId),
                                    text: value.name
                                }));
                            });
                        },
                        error: function (data) {

                        }
                    });
                });
            },
            error: function (data) {

            }
        });
        
    }
    function validateAddUsers() {
        var fullName = $("#addUserDialog").find('#txtfullname').val();
        var staffCode = $('#txtstaffcode').val();
        var yearOfExperience = $('#txtyearofexperience').val();
        var jobRank = $('#txtjobrank').val();
        var englishLevel = $('#txtenglishlevel').val();
        var z8EntryDate = $('#txtz8entrydate').val();
        var skillForProject = $('#txtskillForProject').val();
        var statusId = $('#txtstatus').val();
        var stateId = $('#txtstate').val();
        //------------------check null---------------- 
        if (fullName === '' || fullName == null) {
            $("#addUserDialog").find('#errortxtfullname').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtfullname').text("");
        }
        if (staffCode === '' || staffCode == null) {
            $("#addUserDialog").find('#errortxtstaffcode').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtstaffcode').text("");
        }
        if (skillForProject === '' || skillForProject == null) {
            $("#addUserDialog").find('#errortxtskillForProject').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtskillForProject').text("");
        }
        if (yearOfExperience === '' || yearOfExperience == null) {
            $("#addUserDialog").find('#errortxtyearofexperience').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtyearofexperience').text("");
        }
        if (jobRank === '' || jobRank == null) {
            $("#addUserDialog").find('#errortxtjobrank').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtjobrank').text("");
        }
        if (englishLevel === '' || englishLevel == null) {
            $("#addUserDialog").find('#errortxtenglishlevel').text("Required Field");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtenglishlevel').text("");
        }
        
        
        //-------------check is number----------------
        if (!$.isNumeric(englishLevel)) {
            $("#addUserDialog").find('#errortxtenglishlevel').text("");
            $("#addUserDialog").find('#errortxtenglishlevel').text("Required field is a number");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtenglishlevel').text("");
        }
        if (!$.isNumeric(jobRank) ) {
            $("#addUserDialog").find('#errortxtjobrank').text("");
            $("#addUserDialog").find('#errortxtjobrank').text("Required field is a number");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtjobrank').text("");
        }
        if (!$.isNumeric(yearOfExperience) ) {
            $("#addUserDialog").find('#errortxtyearofexperience').text("");
            $("#addUserDialog").find('#errortxtyearofexperience').text("Required field is a number");
            return false;
        } else {
            $("#addUserDialog").find('#errortxtyearofexperience').text("");
        }
        return true;
    }
    function formatDetailUser(data) {
        $.each( data.listStaffStatus, function( i, value ) {
            value.index = i + 1;
        });
        $.each( data.listStaffState, function( i, value ) {
            value.index = i + 1;
        });
    }
    function action () {
        
        $("#btnAddUser").click(function() {
            $(".datepicker").datepicker({
                dateFormat: 'yy-mm-dd'
            }); 
            createListStateStatus();
            $( "#addUserDialog" ).dialog({
                show: {
                    effect: "blind",
                    duration: 1000
                },
                height: 500,
                width: 750,
                modal: true,
                buttons: {
                    "Add User": function() {
                        if (!validateAddUsers()) {
                            
                        } else {
                            var fullName = $("#addUserDialog").find('#txtfullname').val();
                            var staffCode = $('#txtstaffcode').val();
                            var yearOfExperience = $('#txtyearofexperience').val();
                            var jobRank = $('#txtjobrank').val();
                            var englishLevel = $('#txtenglishlevel').val();
                            var z8EntryDate = $('#txtz8entrydate').val();
                            var skillForProject = $('#txtskillForProject').val();
                            var statusId = $('#txtstatus').val();
                            var stateId = $('#txtstate').val();
                            var dateState = $('#txtdatestate').val();
                            var dateStatus = $('#txtdatestatus').val();
                            $.ajax({
                                dataType: "json",
                                type: 'POST',
                                data:
                                JSON.stringify({
                                    fullName : fullName,
                                    staffCode : staffCode,
                                    skillForProject: skillForProject,
                                    yearOfExperience: yearOfExperience,
                                    jobRank: jobRank,
                                    englishLevel: englishLevel,
                                    fptAssessment: "",
                                    statusId: statusId,
                                    stateId: stateId,
                                    currentState: stateId,
                                    currentStatus:statusId,
                                    dateState: dateState, 
                                    dateStatus: dateStatus,
                                    z8EntryDate: z8EntryDate
                                }),
                                contentType : "application/json",
                                url: "/HR-backend/staff/add",
                                success: function (data) {
                                    $( "#addUserDialog" ).dialog( "close" );
                                    alert("Create user successfull");
                                    reload(0 , 0);
                                },
                                error: function (data) {

                                }
                            });
                        }
                        
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
        $(".btnDetail").click(function() {
            var staffId = $(this).data('id');
            $.ajax({
                dataType: "json",
                type: 'GET',
                contentType : "application/json",
                url: "/HR-backend/staff/StaffDetail/"+staffId,
                success: function (data) {
                    formatDetailUser(data);
                    var template = $('#detailUserTpl').html();
                    var html = Mustache.render(template, data);
                    $('#detailUserDialog').html(html);
                    $( "#detailUserDialog" ).dialog({
                        title: "User Detail",
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        height: "auto",
                        width: 850,
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
        $(".btnEditUser").click(function() {
            var user = $(this).data('id');
            $.ajax({
                dataType: "json",
                type: 'GET',
                contentType : "application/json",
                url: "/ManagementUI-BE/user/"+user,
                success: function (data) {
                    formatDetailUser(data);
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
                                var fullName = $("#editUserDialog").find('#txtEditfullname').val();
                                var staffCode = $("#editUserDialog").find('#txtEditstaffcode').val();
                                var yearOfExperience = $("#editUserDialog").find('#txtEdityearofexperience').val();
                                var jobRank = $("#editUserDialog").find('#txtEditjobrank').val();
                                var englishLevel = $("#editUserDialog").find('#txtEditenglishlevel').val();
                                var z8EntryDate = $("#editUserDialog").find('#txtEditz8entrydate').val();
                                var skillForProject = $("#editUserDialog").find('#txtEditskillForProject').val();
                                var statusId = $("#editUserDialog").find('#txtEditstatus').val();
                                var stateId = $("#editUserDialog").find('#txtEditstate').val();
                                var dateState = $("#editUserDialog").find('#txtEditdatestate').val();
                                var dateStatus = $("#editUserDialog").find('#txtEditdatestatus').val();
                                
                                $.ajax({
                                    dataType: "json",
                                    type: 'POST',
                                    data:
                                    JSON.stringify({
                                        staffId  :staffId,
                                        fullName : fullName,
                                        staffCode : staffCode,
                                        skillForProject: skillForProject,
                                        yearOfExperience: yearOfExperience,
                                        jobRank: jobRank,
                                        englishLevel: englishLevel,
                                        z8EntryDate: z8EntryDate,
                                        currentState: stateId,
                                        currentStatus:statusId,
                                        statusId: statusId,
                                        dateState: dateState,
                                        dateStatus: dateStatus,
                                        stateId: stateId
                                    }),
                                    contentType : "application/json",
                                    url: "/HR-backend/staff/edit",
                                    success: function (data) {
                                        $( "#editUserDialog" ).dialog( "close" );
                                        alert("Save user successfull");
                                        reload(0, 0 ,"" );
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
                    actionInEditUser(data.listStaffStatus[data.listStaffStatus.length-1].status.id.stateId, 
                        data.listStaffStatus[data.listStaffStatus.length-1].status.id.statusId);
                    
                },
                error: function (data) {

                }
            });
        });
    }
    function actionInEditUser(lastState, lastStatus) {
        $("#editUserDialog").find("#btnChangeStateStatus").click(function() {
            var staffId = $(this).data("id"); 
            createListStateStatusForEdit(lastState, lastStatus);
            $(".datepicker").datepicker({
                dateFormat: 'yy-mm-dd'
            });
            $( "#changeStateStatusDialog" ).dialog({
                title: "Change State And Status User",
                show: {
                    effect: "blind",
                    duration: 1000
                },
                height: "auto",
                width: 850,
                modal: true,
                buttons: {
                    Cancel: function() {
                        $( "#changeStateStatusDialog" ).dialog( "close" );
                    }, 
                    "Save": function() {
                        var fullName = $("#editUserDialog").find('#txtEditfullname').val();
                        var staffCode = $("#editUserDialog").find('#txtEditstaffcode').val();
                        var yearOfExperience = $("#editUserDialog").find('#txtEdityearofexperience').val();
                        var jobRank = $("#editUserDialog").find('#txtEditjobrank').val();
                        var englishLevel = $("#editUserDialog").find('#txtEditenglishlevel').val();
                        var z8EntryDate = $("#editUserDialog").find('#txtEditz8entrydate').val();
                        var skillForProject = $("#editUserDialog").find('#txtEditskillForProject').val();
                        var statusId = $("#changeStateStatusDialog").find('#txtEditstatus').val();
                        var stateId = $("#changeStateStatusDialog").find('#txtEditstate').val();
                        var dateState = $("#changeStateStatusDialog").find('#txtEditdatestate').val();
                        var dateStatus = $("#changeStateStatusDialog").find('#txtEditdatestatus').val();
                                
                        $.ajax({
                            dataType: "json",
                            type: 'POST',
                            data:
                            JSON.stringify({
                                staffId  :staffId,
                                fullName : fullName,
                                staffCode : staffCode,
                                skillForProject: skillForProject,
                                yearOfExperience: yearOfExperience,
                                jobRank: jobRank,
                                englishLevel: englishLevel,
                                z8EntryDate: z8EntryDate,
                                currentState: stateId,
                                currentStatus:statusId,
                                statusId: statusId,
                                dateState: dateState,
                                dateStatus: dateStatus,
                                stateId: stateId
                            }),
                            contentType : "application/json",
                            url: "/HR-backend/staff/edit",
                            success: function (data) {
                                $( "#changeStateStatusDialog" ).dialog( "close" );
                                alert("Save user successfull");
                                reload(0, 0, "");
                            },
                            error: function (data) {

                            }
                        });
                        $( "#changeStateStatusDialog" ).dialog( "close" );
                    } 
                },
                hide: {
                    effect: "explode",
                    duration: 1000
                }
            });
            
        });
    }
    function setUserType(userType) {
        
        
    }
    function formatList(list) {
        $.each( list, function( i, value ) {
            value.index = i + 1;
        //            var date = new Date(value.requestDated);
        //            value.requestDated = date.getDate() + "/" +date.getMonth() + "/" + date.getFullYear();
        //            value.isPooler = value.status.id === 6 ? true : false;
        });
    }
    function loadStatusList() {
        $( "#listUserType" ).change(function(el) {
            var stateId = parseInt($(el.target).val());
            $.ajax({
                dataType: "json",
                type: 'GET',
                data:
                {
                },
                url: "/HR-backend/staff/listStatusByState/"+stateId,
                success: function (data) {
                    $('#listUserStatus').empty();
                    $('#listUserStatus').append($('<option>', {
                        value: 0,
                        text: "All"
                    }));
                    $.each( data.list, function( key, value ) {
                        $('#listUserStatus').append($('<option>', {
                            value: parseInt(value.id.statusId),
                            text: value.name
                        }));
                    });
                },
                error: function (data) {

                }
            });
        });
        
    }
    function filterUsers() {
        $( "#listUserType" ).change(function(el) {
            $('#listUserStatus').empty();
            $('#listUserStatus').append($('<option>', {
                value: 0,
                text: "All"
            }));
            var stateId = parseInt($(el.target).val());
            loadStatusList(stateId);
        });
        $("#btnsearch").click(function() {
            var stateId =  $( "#listUserType" ).val();
            var statusId = $( "#listUserStatus" ).val();
            var fullName = $( "#txtsearchFullName" ).val();
            reload(stateId , statusId, fullName);
        });
    }
    function reload(stateId , statusId, fullName) {
        $.ajax({
            dataType: "json",
            type: 'POST',
            data:
            JSON.stringify({
                stateId: stateId, 
                statusId: statusId, 
                fullName: fullName
            }),
            url: "/HR-backend/staff/list/",
            contentType : "application/json",
            success: function (data) {
                formatList(data.list);
                var template = $('#tplList').html();
                var html = Mustache.render(template, data);
                $('#listUsers').html(html);
                action();
                filterUsers();
                    
            },
            error: function (data) {
    
            }
        });
    }
    reload(0, 0, "");
});