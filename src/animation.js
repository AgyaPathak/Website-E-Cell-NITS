export const fade = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.05,
    },
  },
};
export const fadeAnimation = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
      duration: 1,
    },
  },
};
export const leftAnim = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollRightAnim = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollLeftAnim = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollFade = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
