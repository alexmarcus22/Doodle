import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Knob, Pointer, Value, Arc, Scale } from "rc-knob";
import Picker from "vanilla-picker";

export function CanvasPage() {
  const canvas = useRef();
  let ctx = null;

  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [color, setColor] = useState("#888888");
  const [lineColor, setLineColor] = useState("#000000");

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    ctx = canvasEle.getContext("2d");
    ctx.moveTo(lastX, lastY);
    var backgroundColor = document.querySelector("#backgroundColor");
    var lineColor = document.querySelector("#lineColor");
    var picker = new Picker(backgroundColor);
    var pickerLine = new Picker(lineColor);

    picker.onChange = function (color) {
      setColor(color.rgbString);
    };

    picker.onDone = function (color) {
      setColor(color.rgbString);
    };

    pickerLine.onChange = function (color) {
      setLineColor(color.rgbString);
    };

    pickerLine.onDone = function (color) {
      setLineColor(color.rgbString);
    };
  });

  useEffect(() => {
    ctx.lineTo(countX, countY);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  const saveImage = () => {
    var canvasEle = canvas.current;
    window.open(canvasEle.toDataURL("image/jpg"));
  };

  const handleValueX = (value) => {
    setCountX(value);
    setLastX(countX);
  };

  const handleValueY = (value) => {
    setCountY(value);
    setLastY(countY);
  };

  const setValueKnob1 = (ev) => {
    var knob = document.getElementById("knob1");
    knob.setAttribute("data-value", ev);
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type == "attributes") {
          handleValueX(parseInt(mutation.target.getAttribute("data-value")));
        }
      });
    });

    observer.observe(knob, {
      attributes: true,
    });
  };

  const setValueKnob2 = (ev) => {
    var knob = document.getElementById("knob2");
    knob.setAttribute("data-value", ev);
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type == "attributes") {
          handleValueY(parseInt(mutation.target.getAttribute("data-value")));
        }
      });
    });

    observer.observe(knob, {
      attributes: true,
    });
  };

  return (
    <div>
      <section className="home-component">
        <div className="hero-component d-flex justify-content-center align-items-center w-100 flex-row">
          <div className="options-component">
            <div className="form-group">
              <button className="btn btn-primary" onClick={saveImage}>
                Save Image
              </button>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" id="backgroundColor">
                Change background color
              </button>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" id="lineColor">
                Change line color
              </button>
            </div>
          </div>
          <canvas
            style={{ backgroundColor: color }}
            width="600"
            height="600"
            id="canvas"
            ref={canvas}
          ></canvas>
          <div className="options-component">
            <div id="knob1">
              {countX}
              <Knob
                size={100}
                angleOffset={220}
                angleRange={280}
                steps={10}
                min={0}
                max={600}
                onChange={(value) => setValueKnob1(value)}
              >
                <Scale tickWidth={2} tickHeight={2} radius={45} />
                <circle r="35" cx="50" cy="50" fill="#ffffff" />,
                <Pointer
                  width={2}
                  height={35}
                  radius={10}
                  type="rect"
                  color="#ffffff"
                />
              </Knob>
            </div>
            <div id="knob2">
              {countY}
              <Knob
                size={100}
                angleOffset={220}
                angleRange={280}
                steps={10}
                min={0}
                max={600}
                onChange={(value) => setValueKnob2(value)}
              >
                <Scale tickWidth={2} tickHeight={2} radius={45} />
                <circle r="35" cx="50" cy="50" fill="#ffffff" />,
                <Pointer
                  width={2}
                  height={35}
                  radius={10}
                  type="rect"
                  color="#ffffff"
                />
              </Knob>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
