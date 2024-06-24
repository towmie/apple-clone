import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-center justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film <img className="ml-2" src={watchImg} />
            </p>
            <p className="link">
              Watch the event <img className="ml-2" src={rightImg} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
