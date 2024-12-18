import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, HTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

declare function NextImage({ src }: {
    src: string;
}): react_jsx_runtime.JSX.Element;

declare const TextBox: ({ children }: {
    children: ReactNode | ReactNode[];
}) => react_jsx_runtime.JSX.Element;

declare function VideoComponent({ src }: {
    src: string;
}): react_jsx_runtime.JSX.Element;

interface Button extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode | React.ReactNode[];
    size?: "small" | "medium" | "large";
    link?: LinkProps | null | undefined;
    externalLink?: HTMLAttributes<HTMLAnchorElement> | null | undefined;
}
declare const Button: ({ children, size, link, externalLink, ...props }: Button) => react_jsx_runtime.JSX.Element;

export { Button, NextImage, TextBox, VideoComponent };
