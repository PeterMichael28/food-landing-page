import { motion } from 'framer-motion';
import food3 from '../../assets/food/banner.png';
import { SlideUp } from '../../utils';

const Banner = () => {
 return (
  <section>
   <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
     {/* image */}
     <div className="relative">
      <motion.img
       initial={{
        opacity: 0,
        x: -100,
        y: 100,
       }}
       whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
       }}
       whileHover={{
        scale: 1.2,
        rotate: 30,
        x: 50,
        y: -50,
       }}
       transition={{
        duration: 0.8,
        delay: 0.5,
        scale: { duration: 0.5 },
       }}
       src={food3}
       alt=""
       className="relative z-10 w-full lg:max-w-[350px] img-shadow"
      />

      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] md:size-[380px] bg-lightYellow rounded-full"
      ></motion.div>
     </div>

     {/* text */}
     <div className="space-y-5 lg:max-w-[400px] ">
      <motion.h1
       variants={SlideUp(1)}
       initial="initial"
       whileInView="animate"
       className="text-6xl uppercase font-semibold font-league"
      >
       The best Food in town
      </motion.h1>
      <motion.p
       variants={SlideUp(1.3)}
       initial="initial"
       whileInView="animate"
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
       suscipit veritatis voluptatum magnam nisi velit, vero blanditii
      </motion.p>
      <motion.button
       variants={SlideUp(1.6)}
       initial="initial"
       whileInView="animate"
       className="btn-primary "
      >
       Order Now
      </motion.button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Banner;
