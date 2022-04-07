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

const buttonVariantTwo = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: 0.4,
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

const greenVariant = {
  visible: {
    opacity: 1,
    transition: { delay: 0.4, duration: 1, ease: "circIn" },
  },
  hidden: { opacity: 0 },
};

const imageVariant = {
  visibles: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hidden: { opacity: 0, scale: 1.2 },
};

const logoVariant = {
  visibleLogo: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  hidden: { opacity: 0 },
};

const navVariant = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: i * 0.2,
      ease: [0.61, 1, 0.88, 1],
    },
  }),
  hidden: { opacity: 0, y: -50 },
};

const socialVariant = {
  visibleSocial: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: i * 0.2,
      ease: [0.61, 1, 0.88, 1],
    },
  }),
  hidden: { opacity: 0, y: -50 },
};

const socialVariantTwo = {
  visibleSocial: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      stiffness: 75,
      delay: i * 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  }),
  hidden: { opacity: 0, y: 100 },
};

const formVariant = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "circIn" },
  },
  hidden: { opacity: 0 },
};

export {
  titleVariant,
  lineVariant,
  descriptionVariant,
  buttonVariant,
  buttonVariantTwo,
  greenVariant,
  imageVariant,
  logoVariant,
  navVariant,
  socialVariant,
  socialVariantTwo,
  formVariant,
};
