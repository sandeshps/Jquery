/**
 * Created with JetBrains WebStorm.
 * User: sandesh
 * Date: 6/10/13
 * Time: 11:34 AM
 * To change this template use File | Settings | File Templates.
 */



$(document).ready(function () {
    $("#txtInput").keydown(function () {
        var msg = $("#txtInput").text();
        $(".display-box").append($("#txtInput").val());
    });
});




