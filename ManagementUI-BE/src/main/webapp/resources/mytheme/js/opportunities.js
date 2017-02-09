$( document ).ready(function() {
    function action() {
        $(".btnlistCandidates").click(function() {
            var oppId = $(this).data('id');
            $.ajax({
                dataType: "json",
                type: 'GET',
                data:
                {
                },
                url: "/HR-backend/users/userlistByOppId/" + oppId,
                success: function (data) {
                    $.each( data.listUser, function( i, value ) {
                        value.index = i + 1;
                    });
                    var template = $('#listUserTpl').html();
                    var html = Mustache.to_html(template, data);
                    $('#listUsersDialog').html(html);
                    
                    $( "#listUsersDialog" ).dialog({
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        height: 500,
                        width: 750,
                        modal: true,
                        //                buttons: {
                        //                    Cancel: function() {
                        //                        $( "#addOppDialog" ).dialog( "close" );
                        //                    }
                        //                },
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
    function formatList(list) {
        $.each( list, function( i, value ) {
            value.index = i + 1;
            var date = new Date(value.requestDated);
            value.requestDated = date.getDate() + "/" +date.getMonth() + "/" + date.getFullYear();
        });
    }
    function reload() {
        $.ajax({
            dataType: "json",
            type: 'GET',
            data:
            {
            },
            url: "/HR-backend/opportunities/list/",
            success: function (data) {
                formatList(data.list);
                var template = $('#tplList').html();
                var html = Mustache.to_html(template, data);
                $('#listOpportunities').html(html);
                
                action();
            },
            error: function (data) {

            }
        });
    }
    reload();
});