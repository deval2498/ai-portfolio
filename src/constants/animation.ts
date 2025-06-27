export const messageVariants = {
    hidden:  { opacity: 0, y: 0 },   // no scale here
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 420, damping: 32 },
    },
    exit:    { opacity: 0, y: 10, transition: { duration: 0.15 } },
  };
  
  export const suggestionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    }),
  };
  
  export const typingVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  export const userMessageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 28,
        mass: 0.6,
      },
    },
  };
  
  export const bounceVariants = {
    bounce: {
      y: [-2, -6, -2],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  