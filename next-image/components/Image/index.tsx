// utils/image.js

import React from "react";

export const Image = ({ src, ...props }: any) => {
  try {
  //@ts-ignore
    return React.createElement(require.resolve("next/image").default, {
      src: typeof src === "string" ? src : src.src,
      ...props
    });
  } catch {
    console.log("Not using Next.js");
    return React.createElement("img", { src, ...props });
  }
};
