$(document).ready(function () {
  $(".loginCenter .loginTo .loginToHome .loginBtn").click(function () {
    var password = $("#inputPassword").val();
    // alert(password);
    window.location.href = "index.html?" + "id=" + password;
    // window.location.href = "myColumn.html";
  })
});