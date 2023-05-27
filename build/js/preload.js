!(function () {
  "use strict";
  function e(e) {
    try {
      if ("undefined" == typeof console) return;
      "error" in console ? console.error(e) : console.log(e);
    } catch (e) {}
  }
  function t(e) {
    return (
      (d.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>'),
      d.childNodes[0].getAttribute("href") || ""
    );
  }
  function r(e, t) {
    var r = e.substr(t, 2);
    return parseInt(r, 16);
  }
  function n(n, c) {
    for (var o = "", a = r(n, c), i = c + 2; i < n.length; i += 2) {
      var l = r(n, i) ^ a;
      o += String.fromCharCode(l);
    }
    try {
      o = decodeURIComponent(escape(o));
    } catch (u) {
      e(u);
    }
    return t(o);
  }
  function c(t) {
    for (var r = t.querySelectorAll("a"), c = 0; c < r.length; c++)
      try {
        var o = r[c],
          a = o.href.indexOf(l);
        a > -1 && (o.href = "mailto:" + n(o.href, a + l.length));
      } catch (i) {
        e(i);
      }
  }
  function o(t) {
    for (var r = t.querySelectorAll(u), c = 0; c < r.length; c++)
      try {
        var o = r[c],
          a = o.parentNode,
          i = o.getAttribute(f);
        if (i) {
          var l = n(i, 0),
            d = document.createTextNode(l);
          a.replaceChild(d, o);
        }
      } catch (h) {
        e(h);
      }
  }
  function a(t) {
    for (var r = t.querySelectorAll("template"), n = 0; n < r.length; n++)
      try {
        i(r[n].content);
      } catch (c) {
        e(c);
      }
  }
  function i(t) {
    try {
      c(t), o(t), a(t);
    } catch (r) {
      e(r);
    }
  }
  var l = "/cdn-cgi/l/email-protection#",
    u = ".__cf_email__",
    f = "data-cfemail",
    d = document.createElement("div");
  i(document),
    (function () {
      var e =
        document.currentScript || document.scripts[document.scripts.length - 1];
      e.parentNode.removeChild(e);
    })();
})();
(function () {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
})();
