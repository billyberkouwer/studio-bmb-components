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

const Button = () => {
    return (jsx("button", {}));
};

export { Button, NextImage, TextBox, VideoComponent };
//# sourceMappingURL=index.js.map
