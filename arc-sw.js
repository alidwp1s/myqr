!function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {i: n, l: false, exports: {}};
    return e[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
  }
  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {enumerable: true, get: n});
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: true});
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {enumerable: true, value: e}), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 100);
}({100: function (e, t, r) {
  "use strict";
  r.r(t);
  var n = r(3);
  if ("undefined" != typeof ServiceWorkerGlobalScope) {
    var o = "https://arc.io" + n.k;
    importScripts(o);
  } else if ("undefined" != typeof SharedWorkerGlobalScope) {
    var c = "https://arc.io" + n.i;
    importScripts(c);
  } else if ("undefined" != typeof DedicatedWorkerGlobalScope) {
    var i = "https://arc.io" + n.b;
    importScripts(i);
  }
}, 3: function (e, t, r) {
  "use strict";
  r.d(t, "a", function () {
    return n;
  }), r.d(t, "f", function () {
    return c;
  }), r.d(t, "j", function () {
    return i;
  }), r.d(t, "i", function () {
    return a;
  }), r.d(t, "b", function () {
    return d;
  }), r.d(t, "k", function () {
    return f;
  }), r.d(t, "c", function () {
    return p;
  }), r.d(t, "d", function () {
    return s;
  }), r.d(t, "e", function () {
    return l;
  }), r.d(t, "g", function () {
    return m;
  }), r.d(t, "h", function () {
    return v;
  });
  var n = {images: ["bmp", "jpeg", "jpg", "ttf", "pict", "svg", "webp", "eps", "svgz", "gif", "png", "ico", "tif", "tiff", "bpg"], video: ["mp4", "3gp", "webm", "mkv", "flv", "f4v", "f4p", "f4bogv", "drc", "avi", "mov", "qt", "wmv", "amv", "mpg", "mp2", "mpeg", "mpe", "m2v", "m4v", "3g2", "gifv", "mpv"], audio: ["mid", "midi", "aac", "aiff", "flac", "m4a", "m4p", "mp3", "ogg", "oga", "mogg", "opus", "ra", "rm", "wav", "webm", "f4a", "pat"], documents: ["pdf", "ps", "doc", "docx", "ppt", "pptx", "xls", "otf", "xlsx"], other: ["swf"]}, o = "arc:", c = {COMLINK_INIT: "".concat(o, "comlink:init"), NODE_ID: "".concat(o, ":nodeId"), CDN_CONFIG: "".concat(o, "cdn:config"), P2P_CLIENT_READY: "".concat(o, "cdn:ready"), STORED_FIDS: "".concat(o, "cdn:storedFids"), SW_HEALTH_CHECK: "".concat(o, "cdn:healthCheck"), WIDGET_CONFIG: "".concat(o, "widget:config"), WIDGET_INIT: "".concat(o, "widget:init"), WIDGET_UI_LOAD: "".concat(o, "widget:load"), BROKER_LOAD: "".concat(o, "broker:load"), RENDER_FILE: "".concat(o, "inlay:renderFile"), FILE_RENDERED: "".concat(o, "inlay:fileRendered")}, i = "serviceWorker", a = "/".concat("shared-worker", ".js"), d = "/".concat("dedicated-worker", ".js"), f = "/".concat("arc-sw-core", ".js"), u = "".concat("arc-sw", ".js"), p = ("/".concat(u), "/".concat("arc-sw"), "arc-db"), s = "key-val-store", l = 131072, m = "".concat("https://overmind.arc.io", "/api/propertySession"), v = "".concat("https://warden.arc.io", "/mailbox/propertySession");
}});
