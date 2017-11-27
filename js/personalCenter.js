$(document).ready(function () {
  function getUrlRequest() {
    //获取url中"?"符后的字串
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      if (str.indexOf("&") != -1) {
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      } else {
        theRequest[str.split("=")[0]] = unescape(str.split("=")[1]);
      }
    }
    return theRequest;
  }

  var particularIndex = getUrlRequest().index;
  var imgArr = [
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1432134302,674176113&fm=27&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511762664031&di=2ccd3aba3cf5a2a3f75d05e5366d101c&imgtype=0&src=http%3A%2F%2Fauto.eastday.com%2Fauto%2F08auto%2Fnode17413%2Fnode18286%2Fimages%2F00099421.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3748104919,4225404315&fm=27&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511762703810&di=59241f4100e6631e441742da151d1dad&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F7dd98d1001e93901b24f585472ec54e736d1960f.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1460683396,2875168655&fm=27&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3137764866,987483825&fm=27&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=124739891,4117872418&fm=27&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=293359388,4041433891&fm=11&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1884938577,2163939794&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2009420797,1537131051&fm=27&gp=0.jpg"
  ];
  var imgUrl;
  imgUrl = imgArr[particularIndex];
  $(".personalHeaderContainer .header .headerRight .rightLoginImg img").attr("src", imgUrl);
  $(".personalContainer .personalContainerLeft .personalHeaderImg").attr("src", imgUrl);
  $(".personalContainer .personalContainerRight .datum .personalDatumContainer .datumHeaderImg img").attr("src", imgUrl);

  $(".personalContainer .personalContainerLeft ul li .datumBlock").click(function () {
    $(".personalContainer .personalContainerRight .datum").css("display", "block");
    $(".personalContainer .personalContainerRight .datum .personalDatumContainer .datumHeaderImg img").attr("src", imgUrl);
    $(".personalContainer .personalContainerRight .messages").css("display", "none");
    $(".personalContainer .personalContainerRight .awaitMessages").css("display", "none");

  });

  $(".personalContainer .personalContainerLeft ul li .messagesBlock").click(function () {
    $(".personalContainer .personalContainerRight .datum").css("display", "none");
    $(".personalContainer .personalContainerRight .messages").css("display", "block");
    $(".personalContainer .personalContainerRight .awaitMessages").css("display", "none");
  });

  $(".personalContainer .personalContainerLeft ul li .awaitBlock").click(function () {
    $(".personalContainer .personalContainerRight .datum").css("display", "none");
    $(".personalContainer .personalContainerRight .messages").css("display", "none");
    $(".personalContainer .personalContainerRight .awaitMessages").css("display", "block");
  });

  $(".personalContainer .personalContainerLeft ul li.toMyColumn").click(function () {
    window.location.href = "myColumn.html?" + "index=" + particularIndex;
  });

  $(".personalContainer .personalContainerLeft ul li a").click(function () {
    window.location.href = "myColumn.html?" + "index=" + particularIndex;
  })





});