import Image from "next/image"
import React from "react";
export default function NextImage({src}: {src: string}) {
    return (
        <Image src={src} width={100} height={200} alt="" />
    )
}