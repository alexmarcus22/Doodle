/**
 * @preserve
 * EightBitColorPicker Library
 *
 * Released under the MIT License
 * https://github.com/bilalq/eight-bit-color-picker/blob/master/LICENSE
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t())
    : (e.EightBitColorPicker = t());
})(this, function () {
  "use strict";
  function EightBitColorPicker(e) {
    (this.el = t(e.el) ? e.el : document.getElementById(e.el)),
      (this.palette = e.palette || o),
      (this.color = parseInt(e.color || this.el.dataset.color || f(), 10)),
      this.validate(),
      r.call(this);
  }
  var e = "eight-bit-color-picker",
    t = function (e) {
      return e && e.nodeType && e.tagName;
    },
    f = function () {
      return Math.floor(256 * Math.random());
    },
    c = function (e) {
      return "number" == typeof e && Math.floor(e) === e && e >= 0 && 255 >= e;
    },
    o = [
      "#400000",
      "#400000",
      "#400900",
      "#234000",
      "#004000",
      "#004000",
      "#004000",
      "#000d40",
      "#000040",
      "#000040",
      "#000040",
      "#000040",
      "#280040",
      "#400003",
      "#400000",
      "#000000",
      "#540000",
      "#540000",
      "#541d00",
      "#375400",
      "#005400",
      "#005400",
      "#005402",
      "#002154",
      "#000054",
      "#000054",
      "#000054",
      "#000054",
      "#3c0054",
      "#540017",
      "#540000",
      "#0d0d0d",
      "#680000",
      "#680000",
      "#683100",
      "#4b6800",
      "#006800",
      "#006800",
      "#006816",
      "#003568",
      "#001168",
      "#000068",
      "#000068",
      "#000068",
      "#500068",
      "#68002b",
      "#680000",
      "#212121",
      "#7c0000",
      "#7c0000",
      "#7c4500",
      "#5f7c00",
      "#0b7c00",
      "#007c00",
      "#007c2a",
      "#00497c",
      "#00257c",
      "#00007c",
      "#00007c",
      "#10007c",
      "#64007c",
      "#7c003f",
      "#7c0000",
      "#353535",
      "#900000",
      "#900400",
      "#905900",
      "#739000",
      "#1f9000",
      "#009000",
      "#00903e",
      "#005d90",
      "#003990",
      "#000090",
      "#000090",
      "#240090",
      "#780090",
      "#900053",
      "#900000",
      "#494949",
      "#a40000",
      "#a41800",
      "#a46d00",
      "#87a400",
      "#33a400",
      "#00a400",
      "#00a452",
      "#0071a4",
      "#004da4",
      "#0000a4",
      "#0000a4",
      "#3800a4",
      "#8c00a4",
      "#a40067",
      "#a40013",
      "#5d5d5d",
      "#b80000",
      "#b82c00",
      "#b88100",
      "#9bb800",
      "#47b800",
      "#00b800",
      "#00b866",
      "#0085b8",
      "#0061b8",
      "#000db8",
      "#0000b8",
      "#4c00b8",
      "#a000b8",
      "#b8007b",
      "#b80027",
      "#717171",
      "#cc0000",
      "#cc4000",
      "#cc9500",
      "#afcc00",
      "#5bcc00",
      "#06cc00",
      "#00cc7a",
      "#0099cc",
      "#0075cc",
      "#0021cc",
      "#0c00cc",
      "#6000cc",
      "#b400cc",
      "#cc008f",
      "#cc003b",
      "#858585",
      "#e00000",
      "#e05400",
      "#e0a900",
      "#c3e000",
      "#6fe000",
      "#1ae000",
      "#00e08e",
      "#00ade0",
      "#0089e0",
      "#0035e0",
      "#2000e0",
      "#7400e0",
      "#c800e0",
      "#e000a3",
      "#e0004f",
      "#999999",
      "#f41414",
      "#f46814",
      "#f4bd14",
      "#d7f414",
      "#83f414",
      "#2ef414",
      "#14f4a2",
      "#14c1f4",
      "#149df4",
      "#1449f4",
      "#3414f4",
      "#8814f4",
      "#dc14f4",
      "#f414b7",
      "#f41463",
      "#adadad",
      "#ff2828",
      "#ff7c28",
      "#ffd128",
      "#ebff28",
      "#97ff28",
      "#42ff28",
      "#28ffb6",
      "#28d5ff",
      "#28b1ff",
      "#285dff",
      "#4828ff",
      "#9c28ff",
      "#f028ff",
      "#ff28cb",
      "#ff2877",
      "#c1c1c1",
      "#ff3c3c",
      "#ff903c",
      "#ffe53c",
      "#ffff3c",
      "#abff3c",
      "#56ff3c",
      "#3cffca",
      "#3ce9ff",
      "#3cc5ff",
      "#3c71ff",
      "#5c3cff",
      "#b03cff",
      "#ff3cff",
      "#ff3cdf",
      "#ff3c8b",
      "#d5d5d5",
      "#ff5050",
      "#ffa450",
      "#fff950",
      "#ffff50",
      "#bfff50",
      "#6aff50",
      "#50ffde",
      "#50fdff",
      "#50d9ff",
      "#5085ff",
      "#7050ff",
      "#c450ff",
      "#ff50ff",
      "#ff50f3",
      "#ff509f",
      "#e9e9e9",
      "#ff6464",
      "#ffb864",
      "#ffff64",
      "#ffff64",
      "#d3ff64",
      "#7eff64",
      "#64fff2",
      "#64ffff",
      "#64edff",
      "#6499ff",
      "#8464ff",
      "#d864ff",
      "#ff64ff",
      "#ff64ff",
      "#ff64b3",
      "#fdfdfd",
      "#ff7878",
      "#ffcc78",
      "#ffff78",
      "#ffff78",
      "#e7ff78",
      "#92ff78",
      "#78ffff",
      "#78ffff",
      "#78ffff",
      "#78adff",
      "#9878ff",
      "#ec78ff",
      "#ff78ff",
      "#ff78ff",
      "#ff78c7",
      "#ffffff",
      "#ff8c8c",
      "#ffe08c",
      "#ffff8c",
      "#ffff8c",
      "#fbff8c",
      "#a6ff8c",
      "#8cffff",
      "#8cffff",
      "#8cffff",
      "#8cc1ff",
      "#ac8cff",
      "#ff8cff",
      "#ff8cff",
      "#ff8cff",
      "#ff8cdb",
      "#ffffff",
    ],
    i = EightBitColorPicker.prototype,
    r = function () {
      this.el.classList.add(e), l.call(this), a.call(this);
      var t;
      this.el.addEventListener(
        "click",
        function () {
          this.show(),
            t ||
              ((t = function (e) {
                this.el.contains(e.target) ||
                  (this.hide(),
                  window.removeEventListener("click", t),
                  (t = null));
              }.bind(this)),
              window.addEventListener("click", t));
        }.bind(this)
      );
    },
    l = function () {
      this.el.innerHTML =
        '<div class="ebcp-selection" style="background: ' +
        this.getHexColor() +
        ';">&nbsp;</div><div class="ebcp-selector"><div class="ebcp-palette"></div><div class="ebcp-preview-values"><div class="ebcp-text-container"><input class="ebcp-text ebcp-8bit-color" type="text" value="' +
        this.get8BitColor() +
        '"><input readonly type="text" class="ebcp-text ebcp-hex-color" value="' +
        this.getHexColor() +
        '"></div><div class="ebcp-color-preview" style="background: ' +
        this.getHexColor() +
        ';">&nbsp;</div></div></div>';
    };
  (i.addEventListener = function (e, t, f) {
    this.el.addEventListener(e, t, f);
  }),
    (i.removeEventListener = function (e, t, f) {
      this.el.removeEventListener(e, t, f);
    }),
    (i.updateColor = function (e, t) {
      var f = parseInt(e, 10),
        o = f.toString(),
        i = this.loadSelectors();
      if (e && o.length && !(o.length > 3) && c(f) && f !== this.color) {
        var r = this.palette[f];
        if (!t) {
          var l = new CustomEvent("colorChange", {
            detail: { oldColor: this.color, newColor: f, picker: this },
          });
          (this.color = f),
            (i.selectedColor.style.background = r),
            this.el.dispatchEvent(l);
        }
        (i.eightBitText.value = f),
          (i.hexText.value = r),
          (i.previewColor.style.background = r);
      }
    }),
    (i.restoreColor = function () {
      var e = this.loadSelectors();
      (e.previewColor.style.background = this.getHexColor()),
        (e.hexText.value = this.getHexColor()),
        (e.eightBitText.value = this.get8BitColor());
    }),
    (i.updatePalette = function (e) {
      if (!EightBitColorPicker.isValidPalette(e)) return !1;
      var t = this.color;
      return (
        (this.color = void 0),
        (this.palette = e),
        n.call(this),
        this.updateColor(t),
        !0
      );
    }),
    (i.loadSelectors = function () {
      return this.selectors
        ? this.selectors
        : ((this.selectors = {
            selectionUI: this.el.querySelector(".ebcp-selector"),
            selectedColor: this.el.querySelector(".ebcp-selection"),
            palette: this.el.querySelector(".ebcp-palette"),
            eightBitText: this.el.querySelector(".ebcp-8bit-color"),
            hexText: this.el.querySelector(".ebcp-hex-color"),
            previewColor: this.el.querySelector(".ebcp-color-preview"),
          }),
          this.selectors);
    });
  var n = function () {
      var e = this.loadSelectors(),
        t = document.createDocumentFragment(),
        f = document.createElement("div"),
        c = 0;
      this.palette.forEach(function (e, o) {
        var i = document.createElement("div");
        (i.dataset.eightBitColor = o),
          (i.style.background = e),
          f.appendChild(i),
          (c += 1),
          c % 16 === 0 &&
            (f.classList.add("ebcp-palette-row"),
            t.appendChild(f),
            (f = document.createElement("div")));
      }),
        (e.palette.innerHTML = ""),
        e.palette.appendChild(t);
    },
    a = function () {
      var e = this,
        t = this.loadSelectors();
      n.call(this),
        t.palette.addEventListener("mouseover", function (t) {
          var f = t.target.dataset.eightBitColor;
          e.updateColor(f, !0);
        }),
        t.palette.addEventListener("mouseleave", e.restoreColor.bind(e)),
        t.palette.addEventListener("click", function (t) {
          e.updateColor(t.target.dataset.eightBitColor);
        }),
        t.eightBitText.addEventListener("keyup", function (t) {
          return t.keyCode >= 33 && t.keyCode <= 40
            ? !0
            : void e.updateColor(this.value);
        }),
        t.eightBitText.addEventListener("blur", e.restoreColor.bind(e));
    };
  return (
    (EightBitColorPicker.getDefaultPalette = function () {
      return o.slice(0);
    }),
    (EightBitColorPicker.isValidPalette = function (e) {
      var t = RegExp.prototype.test.bind(/^#[a-f0-9]{6}$/);
      return (
        Array.isArray(e) &&
        256 === e.length &&
        e.map(t).reduce(function (e, t) {
          return e && t;
        }, !0)
      );
    }),
    (EightBitColorPicker.detect = function () {
      var t = document.getElementsByClassName(e);
      return Array.prototype.map.call(t, function (e) {
        return new EightBitColorPicker({ el: e });
      });
    }),
    (i.validate = function () {
      var e;
      if (
        (this.el || (e = "Element for color picker not found"),
        c(this.color) || (e = "Color outside the range of 0-255"),
        (this.palette && 256 === this.palette.length) ||
          (e = "Invalid color map set"),
        e)
      )
        throw new Error(e);
    }),
    (i.show = function () {
      var e = this.loadSelectors().selectionUI,
        t = this.el.offsetLeft,
        f = this.el.offsetTop;
      (e.style.left = t + 40 + "px"),
        (e.style.top = f + 40 + "px"),
        e.classList.add("ebcp-shown-selector");
    }),
    (i.hide = function () {
      var e = this.loadSelectors().selectionUI;
      e.classList.remove("ebcp-shown-selector");
    }),
    (i.getElement = function () {
      return this.el;
    }),
    (i.get8BitColor = function () {
      return this.color;
    }),
    (i.getHexColor = function () {
      return this.palette[this.color];
    }),
    (i.getRGBColor = function () {
      var e = this.getHexColor();
      return {
        r: parseInt(e.slice(1, 3), 16),
        g: parseInt(e.slice(3, 5), 16),
        b: parseInt(e.slice(5, 7), 16),
      };
    }),
    (i.getForegroundEscapeSequence = function () {
      return "\\x1b[38;5;" + this.get8BitColor() + "m";
    }),
    (i.getBackgroundEscapeSequence = function () {
      return "\\x1b[48;5;" + this.get8BitColor() + "m";
    }),
    EightBitColorPicker
  );
});
