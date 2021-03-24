var firstClick = false;
$("button").on("click", function () {
  $("section").css({
    backgroundColor: "black",
  });
  $("h1, h2, h3, p, h4, h5").css("color", "white");
});
