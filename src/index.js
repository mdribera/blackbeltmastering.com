/* eslint-disable no-undef */
// JS Goes here - ES6 supported

import "./css/main.css";

$(document).ready(function() {
  let gridIndex = 0;
  let rotateInterval;
  let enteranceInterval;

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  };

  const $albumData = [];
  const random = shuffle([0, 1, 2, 3, 4, 5, 6, 8, 9]);

  const $siteTitle = $("#site-title");
  const $welcome = $(".welcome-content");
  const $header = $("header");
  const $navbarToggle = $(".navbar-toggle");
  const $background = $(".content-background");

  function attachListeners() {
    $welcome.on("click", (e) => {
      e.stopPropagation();
      toggleWelcome();
    });

    $(window).on("hashchange", (e) => {
      navigatePage(window.location.hash);
    });

    $navbarToggle.on("click", (e) => {
      e.stopPropagation();
      toggleNav();
    });

    $siteTitle.on("click", (e) => {
      e.stopPropagation();
      toggleWelcome();
    });
  }

  function toggleWelcome() {
    if (!$albumData.length) {
      loadAlbumData();
    }

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
      animateAlbums();
      window.location.hash = "";
    }
  }

  function toggleNav() {
    $header.collapse("toggle");
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

      if ($header.hasClass("in")) {
        $header.collapse("hide");
      }
    }
  }

  function deactivateTabs() {
    $(".content-container.active").removeClass("active");
    $(".navwrapper a.active").removeClass("active");
  }

  function checkHash() {
    var hash = window.location.hash;
    navigatePage(hash);
  }

  function loadAlbumData() {
    var imgs = $(".album-data img");

    imgs.each(function(i) {
      var $img = $(this);
      var source = $img.data("src");
      this.src = source;

      if (this.complete) {
        imageLoaded.call(this);
      } else {
        $img.on("load", imageLoaded);
      }
    });
  }

  function imageLoaded() {
    $albumData.push(this);
    if ($albumData.length === 9) setupInitialAlbums();
  }

  function setupInitialAlbums() {
    var nextAlbum;
    for (var i = 0; i <= 8; i++) {
      nextAlbum = getNextAlbum();
      insertAlbumToIndex(nextAlbum);
    }

    animateAlbums();
  }

  function getNextAlbum() {
    var album = $albumData.pop();
    $albumData.unshift(album);
    return $(album).clone();
  }

  function animateAlbums() {
    clearInterval(rotateInterval);
    clearInterval(enteranceInterval);

    var albums = $("#album-grid .item");
    albums.removeClass("down");

    var i = 0;
    enteranceInterval = setInterval(function() {
      var $item = $(albums[i]);

      $item.addClass("down");
      i++;

      if (i > 9) {
        clearInterval(enteranceInterval);
        attachRotationInterval();
      }
    }, 300);
  }

  function attachRotationInterval() {
    var newAlbum;

    rotateInterval = setInterval(function() {
      newAlbum = getNextAlbum();
      newAlbum.css({ display: "none" });

      transitionToNewAlbum(newAlbum);
    }, 2000);
  }

  function transitionToNewAlbum(album) {
    var $index = insertAlbumToIndex(album);
    var oldAlbum = $index.find("img")[0];
    var newAlbum = $index.find("img")[1];

    $(oldAlbum).fadeOut(500, function() {
      $(oldAlbum).remove();
      $(newAlbum).fadeIn(500);
    });
  }

  function insertAlbumToIndex(album) {
    var $index = $(".index-" + random[gridIndex] + " .art");

    $index.append(album);
    gridIndex = gridIndex >= 9 ? 0 : gridIndex + 1;
    return $index;
  }

  if (window.location.hash === "#" || window.location.hash === "") {
    loadAlbumData();
  }

  attachListeners();
  checkHash();
});
