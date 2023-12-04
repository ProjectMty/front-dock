export const getCurrencyFormat = (cost: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cost);

export const animateFadeIn = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { type: 'tween', ease: 'easeIn', duration: 0.5, delay: 0.35 },
  viewport: { once: true },
};

export const animateZoomIn = {
  initial: { scale: 0.5 },
  whileInView: { scale: 1 },
  transition: { type: 'tween', ease: 'circIn', duration: 0.25 },
  viewport: { once: true },
};

export const animateIconsParent = {
  variants: {
    animate: {
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.7,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  },
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
};

export const animateIconsChild = {
  variants: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
};
