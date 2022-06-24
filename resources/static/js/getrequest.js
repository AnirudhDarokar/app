$(document).ready(function () {

    // GET Request

    $("#allUsers").click(function (event) {
        event.preventDefault();
        ajaxGet();
    });

    // Do GET
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: "/api/users/all",
            success: function (result) {
                $('#getResultDiv ul').empty();
                $.each(result, function (i, user) {
                    $('#getResultDiv .list-group').append(user.firstname + " " + user.lastname + "<br>")
                }),
                    console.log("success : ", result);
            },
            error: function (e) {
                $('#getResultDiv').html("<strong>Error</strong>");
                console.log("ERROR : ", e);
            }
        })
    }

})