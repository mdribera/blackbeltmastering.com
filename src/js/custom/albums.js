/* eslint-disable no-undef */
(function($, window, document) {
  App.Albums = (function() {
    var random = shuffle([0, 1, 2, 3, 4, 5, 6, 8, 9]),
      gridIndex = 0,
      $albumData = [],
      rotateInterval,
      enteranceInterval;

    function init() {
      var welcomeNavBtn = $("#site-title");

      if (window.location.hash === "#" || window.location.hash === "") {
        loadAlbumData();
      }

      welcomeNavBtn.on("click", function() {
        if (!$albumData.length) {
          loadAlbumData();
        }
      });
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
          $img.one("load", imageLoaded);
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
      gridIndex >= 9 ? (gridIndex = 0) : gridIndex++;
      return $index;
    }

    function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
      return a;
    }

    return {
      init: init,
      animateAlbums: animateAlbums,
    };
  })();
})(jQuery, this, this.document);
