import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var classes1 = [
    ".landing-h2-1",
    ".landing-h2-2",
    ".landing-h2-3",
    ".landing-h2-4",
    ".landing-h2-5"
  ];

  LoopMultiple(classes1, TextProps);
}

function LoopMultiple(selectors1: string[], TextProps: any) {
  const TextArr1 = selectors1.map((sel) => new SplitText(sel, TextProps));

  var tl = gsap.timeline({ repeat: -1 });
  const delay = 4;

  TextArr1.forEach((text, i) => {
    if (i !== 0) {
      gsap.set(text.chars, { opacity: 0, y: 80 });
    }
  });

  for (let i = 0; i < TextArr1.length; i++) {
    let nextIdx = (i + 1) % TextArr1.length;
    let curr1 = TextArr1[i];
    let next1 = TextArr1[nextIdx];

    tl.to(
      curr1.chars,
      {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      }
    ).fromTo(
      next1.chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      "<0.2"
    );
  }
}
