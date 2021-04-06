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
})({"lcJR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n *{box-sizing: border-box;}\n *{margin: 0;padding: 0;}\n *::before,*::after{box-sizing: border-box;}\n .skin{position: relative;\n     background:rgb(1, 159, 232);min-height: 50vh;\n     z-index:-2;\n    }\n .nose{\n     border: 8px solid black;\n     position: relative;\n     width: 80px;\n     height: 80px;\n     left: 50%;\n     top:110px;\n     margin-left:-40px;\n     border-radius:50%;\n     background:red;\n     z-index: 5;\n }\n @media(min-width:500px){\n    .nose{\n        top:190px;\n    }\n }\n .nose::before{\n     content:'';\n     border:1px solid red;\n     width:30px;\n     height:30px;\n     border-radius:50%;\n     background:rgb(255,255,255);\n     position:absolute;\n     margin-left:8px;\n     top:2px;\n     z-index:5;\n }\n\n @media(min-width:500px){\n    .eye{\n        top:160px;\n    }\n }\n .eye{\n     border: 8px solid black;\n     background: rgb(255, 255, 255);\n     position:absolute;\n     width: 150px;\n     height: 150px;\n     border-radius:50%;\n     left:50%;\n     margin-left:-75px;\n     margin-top:-60px;\n }\n .yuan3{\n     position:absolute;\n     width:25px;\n     height:40px;\n     left:30px;\n     margin-left:-25px;\n     bottom:52px;\n     border-radius:50%;\n     background:black;\n }\n .yuan4{\n    position:absolute;\n    width:25px;\n    height:40px;\n    right:5px;\n    margin-left:-25px;\n    bottom:52px;\n    border-radius:50%;\n    background:black;\n }\n .yuan3::before{\n    content: '';\n    border:1px solid black;\n    display: block;\n    width: 12px;\n    height: 16px;\n    position: absolute;\n    border-radius:50%;\n    left:8px;\n    margin-left:-6px;\n    bottom:14px;\n    background: white;\n}\n.yuan4::before{\n    content: '';\n    border:1px solid black;\n    display: block;\n    width: 12px;\n    height: 16px;\n    position: absolute;\n    border-radius:50%;\n    left:8px;\n    margin-left:-6px;\n    bottom:14px;\n    background: white;\n}\n .eye.left{\n    transform:translateX(75px);\n }\n .eye.right{\n     transform:translateX(-75px);\n }\n .up{\n     position: absolute;\n     width:8px;\n     height:80px;\n     left:50%;\n     margin-left:-4px;\n     bottom:70px;\n     background:black;\n }\n .Lian{\n    display:block;\n    position:absolute;\n    width:1000px;\n    height:1000px;\n    left:50%;\n    margin-left:-500px;\n    margin-top:10px;\n    border-radius:50%;\n    background:white;\n    z-index:-1;\n }\n @media(min-width:500px){\n    .Lian{\n        top:160px;\n    }\n }\n .down1{\n     position:absolute;\n     border:8px solid black;\n     border-color:transparent black black black;\n     width:160px;\n     height:80px;\n     border-radius:50%;\n     top:28px;\n }\n.down1>.Hideen1{\n    content:'';\n    position:relative;\n    width:15px;\n    height:32px;\n    left:7px;\n    margin-left:-7px;\n    background:white;\n    z-index:2;\n}\n.down2{\n    position:absolute;\n    border:8px solid black;\n    border-color:transparent black black black;\n    width:160px;\n    height:80px;\n    border-radius:50%;\n    transform:translateX(-152px);\n    top:28px;\n    z-index:1;\n}\n.down2>.Hideen2{\n   content:'';\n   position:relative;\n   width:15px;\n   height:32px;\n   left:100%;\n   margin-left:-15px;\n   background:white;\n   z-index:2;\n}\n.x1{\n    width:80px;\n    height:8px;\n    left:50px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(30deg);\n    bottom:170px;\n    background:black;\n}\n.x2{\n    width:80px;\n    height:8px;\n    left:50px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(20deg);\n    bottom:145px;\n    background:black;\n}\n.x3{\n    width:70px;\n    height:8px;\n    left:60px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(10deg);\n    bottom:115px;\n    background:black;\n}\n.x4{\n    width:80px;\n    height:8px;\n    right:15px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-30deg);\n    bottom:170px;\n    background:black;\n}\n.x5{\n    width:80px;\n    height:8px;\n    right:10px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-20deg);\n    bottom:145px;\n    background:black;\n}\n.x6{\n    width:70px;\n    height:8px;\n    right:10px;\n    margin-left:-40px;\n    border-radius:6px;\n    position:absolute;\n    transform:rotate(-10deg);\n    bottom:115px;\n    background:black;\n}\n@media(min-width:500px){\n    .x1{\n        left:50%;\n        margin-left:-180px;\n    }\n    .x2{\n        left:50%;\n        margin-left:-180px;\n    }\n    .x3{\n        left:50%;\n        margin-left:-180px;\n    }\n    .x4{\n        left:50%;\n        margin-left:100px;\n    }\n    .x5{\n        left:50%;\n        margin-left:100px;\n    }\n    .x6{\n        left:50%;\n        margin-left:100px;\n    }\n }\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _DLAmeng = _interopRequireDefault(require("./DLAmeng.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _DLAmeng.default.substr(0, n);
demo2.innerHTML = _DLAmeng.default.substr(0, n);
var time = 0;

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
},{"./DLAmeng.js":"lcJR"}]},{},["HdJB"], null)
//# sourceMappingURL=test.f5dbd2a0.js.map