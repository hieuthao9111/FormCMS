$( document ).ready(function() {
    function formatList(list) {
        $.each( list, function( i, value ) {
            value.index = i + 1;
            var date = new Date(value.requestDated);
            value.requestDated = date.getDate() + "/" +date.getMonth() + "/" + date.getFullYear();
            value.isPooler = value.status.id === 6 ? true : false;
        });
    }
    function reload() {
        $.ajax({
            dataType: "json",
            type: 'GET',
            data:
            {
                
            },
            url: "/HR-backend/users/listfiter/" + userType + "/" + userStatus,
            success: function (data) {
                formatList(data.list);
                var template = $('#listTrainingTpl').html();
                var html = Mustache.render(template, data);
                $('#listTraining').html(html);
                action();
                
            },
            error: function (data) {

            }
        });
    } 
    reload();
});