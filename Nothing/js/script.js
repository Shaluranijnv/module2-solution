window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById("appstore-icon").style.display = "block";

      document.getElementById("playstore-icon").style.display = "block";
    } else {
      document.getElementById("appstore-icon").style.display = "none";
      document.getElementById("playstore-icon").style.display = "none";
    }
  }

  $(document).ready(function () {
    $(".list-group > a").on("click", function () {
      var letter = $(this).text();
      $(".searchable tr td:nth-child(4)").each(function () {
        $(this).parent().show();

        if (
          $(this).text().toLowerCase() != letter.toLowerCase() &&
          letter !== "Categories"
        ) {
          $(this).parent().hide();
        }
      });
    });
  });
  $(document).ready(function () {
    $(".navbar-nav > li > a").on("click", function () {
      var letter = $(this).text();
      $(".searchable tr td:nth-child(4)").each(function () {
        $(this).parent().show();

        if (
          $(this).text().toLowerCase() != letter.toLowerCase() &&
          letter !== "Categories"
        ) {
          $(this).parent().hide();
        }
      });
    });
  });