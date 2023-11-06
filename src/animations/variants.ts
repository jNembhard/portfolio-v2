export const variants = {
  pageInitial: {
    opacity: 0,
    y: 100,
  },
  pageAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 75,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  pageExit: {
    opacity: 0,
    y: 300,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 80,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};
