export const getCurrencyFormat = (cost: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cost);

export const animateFadeIn = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5, type: 'spring', stiffness: 100 },
  viewport: { once: true },
};

export const animateZoomIn = {
  initial: { scale: 0.5, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};
