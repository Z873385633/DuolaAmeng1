// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"DLAmeng.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n *{box-sizing: border-box;}\n *{margin: 0;padding: 0;}\n *::before,*::after{box-sizing: border-box;}\n .skin{position: relative;\n     background:rgb(1, 159, 232);min-height: 50vh;\n     z-index:-2;\n    }\n .nose{\n     border: 8px solid black;\n     position: relative;\n     width: 80px;\n     height: 80px;\n     left: 50%;\n     top:110px;\n     margin-left:-40px;\n     border-radius:50%;\n     background:red;\n     z-index: 5;\n }\n @media(min-width:375px){\n    .nose{\n        position:absolute;\n        top:190px;\n    }\n }\n .nose::before{\n     content:'';\n     border:1px solid red;\n     width:30px;\n     height:30px;\n     border-radius:50%;\n     background:rgb(255,255,255);\n     position:absolute;\n     margin-left:8px;\n     top:2px;\n     z-index:5;\n }\n\n @media(min-width:375px){\n    .eye{\n        top:160px;\n    }\n }\n .eye{\n     border: 8px solid black;\n     background: rgb(255, 255, 255);\n     position:absolute;\n     width: 150px;\n     height: 150px;\n     border-radius:50%;\n     left:50%;\n     margin-left:-75px;\n     margin-top:-60px;\n }\n .yuan3{\n     position:absolute;\n     width:25px;\n     height:40px;\n     left:30px;\n     margin-left:-25px;\n     bottom:52px;\n     border-radius:50%;\n     background:black;\n }\n .yuan4{\n    position:absolute;\n    width:25px;\n    height:40px;\n    right:5px;\n    margin-left:-25px;\n    bottom:52px;\n    border-radius:50%;\n    background:black;\n }\n .yuan3::before{\n    content: '';\n    border:1px solid black;\n    display: block;\n    width: 12px;\n    height: 16px;\n    position: absolute;\n    border-radius:50%;\n    left:8px;\n    margin-left:-6px;\n    bottom:14px;\n    background: white;\n}\n.yuan4::before{\n    content: '';\n    border:1px solid black;\n    display: block;\n    width: 12px;\n    height: 16px;\n    position: absolute;\n    border-radius:50%;\n    left:8px;\n    margin-left:-6px;\n    bottom:14px;\n    background: white;\n}\n .eye.left{\n    transform:translateX(75px);\n }\n .eye.right{\n     transform:translateX(-75px);\n }\n .up{\n     position: absolute;\n     width:8px;\n     height:80px;\n     left:50%;\n     margin-left:-4px;\n     bottom:75px;\n     background:black;\n }\n @media(min-width:375px){\n    .up{\n     position:absolute;\n     bottom:115px;\n    }\n }\n .Lian{\n    display:block;\n    position:absolute;\n    width:1000px;\n    height:1000px;\n    left:50%;\n    margin-left:-500px;\n    margin-top:10px;\n    border-radius:50%;\n    background:white;\n    z-index:-1;\n }\n @media(min-width:375px){\n    .Lian{\n        top:160px;\n    }\n }\n .down1{\n     position:absolute;\n     border:8px solid black;\n     border-color:transparent black black black;\n     width:160px;\n     height:80px;\n     border-radius:50%;\n     top:28px;\n }\n.down1>.Hideen1{\n    content:'';\n    position:relative;\n    width:15px;\n    height:32px;\n    left:7px;\n    margin-left:-7px;\n    background:white;\n    z-index:2;\n}\n.down2{\n    position:absolute;\n    border:8px solid black;\n    border-color:transparent black black black;\n    width:160px;\n    height:80px;\n    border-radius:50%;\n    transform:translateX(-152px);\n    top:28px;\n    z-index:1;\n}\n.down2>.Hideen2{\n   content:'';\n   position:relative;\n   width:15px;\n   height:32px;\n   left:100%;\n   margin-left:-15px;\n   background:white;\n   z-index:2;\n}\n.x1{\n    width:80px;\n    height:8px;\n    left:50px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(30deg);\n    bottom:165px;\n    background:black;\n}\n.x2{\n    width:80px;\n    height:8px;\n    left:50px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(20deg);\n    bottom:135px;\n    background:black;\n}\n.x3{\n    width:70px;\n    height:8px;\n    left:60px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(10deg);\n    bottom:115px;\n    background:black;\n}\n.x4{\n    width:80px;\n    height:8px;\n    right:15px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-30deg);\n    bottom:165px;\n    background:black;\n}\n.x5{\n    width:80px;\n    height:8px;\n    right:10px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-20deg);\n    bottom:135px;\n    background:black;\n}\n.x6{\n    width:70px;\n    height:8px;\n    right:10px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-10deg);\n    bottom:115px;\n    background:black;\n}\n@media(min-width:375px){\n    .x1{\n        left:50%;\n        margin-left:-180px;\n        bottom:220px;\n    }\n    .x2{\n        left:50%;\n        margin-left:-180px;\n        bottom:195px;\n    }\n    .x3{\n        left:50%;\n        margin-left:-180px;\n        bottom:165px;\n    }\n    .x4{\n        left:50%;\n        margin-left:100px;\n        bottom:220px;\n    }\n    .x5{\n        left:50%;\n        margin-left:100px;\n        bottom:195px;\n    }\n    .x6{\n        left:50%;\n        margin-left:100px;\n        bottom:165px;\n    }\n }\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _DLAmeng = _interopRequireDefault(require("./DLAmeng.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _DLAmeng.default.substr(0, n);
demo2.innerHTML = _DLAmeng.default.substr(0, n);
var time = 200;

var run = function run() {
  n += 1;

  if (n > _DLAmeng.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _DLAmeng.default.substr(0, n);
  demo2.innerHTML = _DLAmeng.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  time = 100;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./DLAmeng.js":"DLAmeng.js"}],"C:/Users/87338/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53080" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/87338/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map