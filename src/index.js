// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

$(document).ready(function () {
  var $welcome, $header, $background;

  function attachListeners() {
    $welcome.on("click", function () {
      toggleWelcome();
    });

    $("#site-title").on("click", function () {
      toggleWelcome();
    });

    $(window).on("hashchange", function () {
      navigatePage(window.location.hash);
    });
  }

  function toggleWelcome() {
    if ($welcome.hasClass("down")) {
      $welcome.removeClass("down");
      $header.removeClass("down");
      $background.stop().fadeIn(2000);
      window.location.hash = "#about";
    } else {
      $welcome.addClass("down");
      $header.addClass("down");
      $background.stop().fadeOut(500);
      deactivateTabs();
    //   App.Albums.animateAlbums();
      window.location.hash = "";
    }
  }

  function navigatePage(page) {
    var hash = window.location.hash;
    if (hash !== "#" && hash !== "") {
      deactivateTabs();
      $(page + "-container").addClass("active");
      $(page + "-nav").addClass("active");
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      if ($welcome.hasClass("down")) {
        $welcome.removeClass("down");
        $header.removeClass("down");
        $background.stop().fadeIn(2000);
      }
    }
  }

  function deactivateTabs() {
    $(".content-container.active").removeClass("active");
    $(".tab-nav a.active").removeClass("active");
  }

  function checkHash() {
    var hash = window.location.hash;
    navigatePage(hash);
  }
  
  $welcome = $(".welcome-content");
  $header = $("header");
  $background = $(".content-background");

  attachListeners();
  checkHash();
});

const clientTabs = document.querySelectorAll('.client-tab')
const clientContent = document.querySelectorAll('.client-content')
clientTabs.forEach(
    item => item.addEventListener('click', e => {
        console.log('e!', e);
        clientTabs.forEach(tab => {
            console.log('tab!', tab);
            tab === item ? tab.classList.add('active') : tab.classList.remove('active');
        })
        clientContent.forEach(content => {
            console.log('content!', content);
            content.classList.contains(item.dataset.content) ? content.classList.add('active') : content.classList.remove('active');
        })
    }
));
// clientTabs.addEventListener("click", e => console.log('e!', JSON.stringify(e)));
