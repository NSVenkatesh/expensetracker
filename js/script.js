$(document).ready(function () {
  var invalidChars = ["-", "e", "+", "E"];
  $("input[type='number']").on("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  $("#btn1").click(function () {
    var today = new Date().toISOString();
    var currentVal = $("#bal").html();
    var btnName = $("#btn1").html();
    var value = $("#input").val();
    if (value == "") {
      alert("value cannot be empty");
      return false;
    }
    var balance = parseInt(currentVal) + parseInt(value);
    $("#bal").html(balance);
    var tableData =
      "<tr><td>" +
      today +
      "</td><td>" +
      value +
      "</td><td>" +
      btnName +
      "ed" +
      "</td></tr>";
    $(".table tbody").append(tableData);
    $("#input").val("");
    localStorage.setItem("tbody", "tbody");
  });
  $("#btn2").click(function () {
    var today = new Date().toISOString();
    var currentVal = $("#bal").html();
    var btnName = $("#btn2").html();
    var value = $("#input").val();
    if (value == "") {
      alert("value cannot be empty");
      return false;
    }
    var balance = parseInt(currentVal) - parseInt(value);
    $("#bal").html(balance);
    var tableData =
      "<tr><td>" +
      today +
      "</td><td>" +
      value +
      "</td><td>" +
      btnName +
      "d" +
      "</td></tr>";
    $(".table tbody").append(tableData);
    $("#input").val("");
    localStorage.setItem("tbody", "tbody");
  });
});
