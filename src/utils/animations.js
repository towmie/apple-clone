import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTl = (
  tl,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  tl.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  tl.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  tl.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");
};
