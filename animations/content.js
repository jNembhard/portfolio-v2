const titleVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      duration: 1,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  hidden: { opacity: 0, y: 200 },
};

const titleSlideVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      duration: 1,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  hidden: { opacity: 0, x: -300 },
};

const descriptionVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: 0.2,
      duration: 1,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  hidden: { opacity: 0, y: 200 },
};

const buttonVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: 0.3,
      duration: 1,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  hidden: { opacity: 0, y: 200 },
};

const lineVariant = {
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, pathLength: 0 },
};

export {
  titleVariant,
  titleSlideVariant,
  lineVariant,
  descriptionVariant,
  buttonVariant,
};
