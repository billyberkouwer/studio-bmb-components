import { jsx } from 'react/jsx-runtime';
import Image from 'next/image';
import ReactPlayer from 'react-player';

function NextImage({ src }) {
    return (jsx(Image, { src: src, width: 100, height: 200, alt: "" }));
}

const TextBox = ({ children }) => {
    return (jsx("div", { children: jsx("p", { children: children }) }));
};

function VideoComponent({ src }) {
    return (jsx(ReactPlayer, { url: src }));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ":root {\r\n    --dark: #000000;\r\n    --light: #FFFFFF;\r\n}";
styleInject(css_248z$1);

var css_248z = ".bmb-button {\r\n    background-color: var(--dark);\r\n    color: var(--light)\r\n}";
styleInject(css_248z);

const Button = ({ children = "Button", }) => {
    return jsx("button", { className: "bmb-button", children: children });
};

export { Button, NextImage, TextBox, VideoComponent };
//# sourceMappingURL=index.js.map
