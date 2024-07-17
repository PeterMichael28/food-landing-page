export const SlideUp = (delay) => {
    return {
     initial: {
      y: '100%',
      opacity: 0,
     },
     animate: {
      y: 0,
      opacity: 1,
      transition: {
       duration: 0.6,
       delay: delay,
      },
     },
    };
   };