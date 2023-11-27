$("document").ready(function () {
  $("#sample").waypoint(
    function () {
      $("#sample").addClass("animate__animated animate__bounceInRight");
    },
    {
      offset: "20%",
    }
  );
});
