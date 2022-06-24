$(document).ready(function () {
    // submit form
    $("#userForm").submit(function (event) {
        // preventing the form submitting via the browser
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        // preapare form data
        var formData = {
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val()
        }

        //Do post
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "api/users/save",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (user) {
                $("#postResultDiv").html("" + "post Sucessfully" + "-->" + user.firstname + "" + user.lastname + "");

            },
            error: function (e) {
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

        // Restting form data after posting
        resetData();

    }

    function resetData() {
        $("#firstname").val("");
        $("#lastname").val("");
    }
})