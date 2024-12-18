import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

declare function NextImage({ src }: {
    src: string;
}): react_jsx_runtime.JSX.Element;

declare const TextBox: ({ children }: {
    children: ReactNode | ReactNode[];
}) => react_jsx_runtime.JSX.Element;

declare function VideoComponent({ src }: {
    src: string;
}): react_jsx_runtime.JSX.Element;

declare const Button: ({ children, }: {
    children: React.ReactNode | React.ReactNode[];
}) => react_jsx_runtime.JSX.Element;

export { Button, NextImage, TextBox, VideoComponent };
