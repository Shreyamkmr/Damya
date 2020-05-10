(function() {
    if ("loading" in HTMLImageElement.prototype) {
      var lazyEls = document.querySelectorAll("[loading=lazy]");
      lazyEls.forEach(function(lazyEl) {
        lazyEl.setAttribute(
          "src",
          lazyEl.getAttribute("data-src")
        );
      });
    } else {
      // Dynamically include a lazy loading library of your choice
      // Here including vanilla-lazyload
      var script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js";
      window.lazyLoadOptions = {
        elements_selector: "[loading=lazy]"
        //eventually more options here
      };
      document.body.appendChild(script);
    }
  })();