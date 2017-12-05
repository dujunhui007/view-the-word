$(document).ready(function () {
  $(".contributeContainer .contributeContainerCenter .contributeBtn button").click(function () {
    window.location.href = "publishArticle.html"
  });

  $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick1").click(function () {
    $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "block");
    $(".contributeContainer .contributeContainerCenter .columnBlockChain a").click(function () {

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick1").empty().append($(this).text());

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick2").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick3").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "none");
    });
  });


  $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick2").click(function () {
    $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "block");
    $(".contributeContainer .contributeContainerCenter .columnBlockChain a").click(function () {

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick2").empty().append($(this).text());

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick1").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick3").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "none");
    });
  });

  $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick3").click(function () {
    $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "block");
    $(".contributeContainer .contributeContainerCenter .columnBlockChain a").click(function () {

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick3").empty().append($(this).text());

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick1").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .contributeDetails ul li div span.columnClick2").empty().append("专栏");

      $(".contributeContainer .contributeContainerCenter .columnBlockChain").css("display", "none");
    });
  });

});