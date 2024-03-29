"use client";
import { ParallaxProvider } from "react-scroll-parallax";

export default function ClientProvider(props: any) {
  return <ParallaxProvider>{props.children}</ParallaxProvider>;
}
