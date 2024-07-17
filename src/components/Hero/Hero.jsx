import foodImg from '../../assets/food/food.png';
import spoonImg from '../../assets/food/spoon.png';
import bananaImg from '../../assets/food/banana2.png';
import leafImg from '../../assets/food/leaf.png';
import { IoCartOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utils';

const Hero = () => {
 return (
  <section>
   <div className="container min-h-[600px] flex justify-center relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
     {/* text content */}
     <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
      <motion.h1
       variants={SlideUp(0.5)}
       initial="initial"
       whileInView="animate"
       className="relative text-5xl lg:text-7xl font-bold xl:text-8xl uppercase text-outline text-transparent"
      >
       Yummy
       <img
        src={leafImg}
        alt="leaf-img"
        className="absolute w-[50px] top-0 right-0 md:right-[180px]"
       />
      </motion.h1>
      <motion.h1
       variants={SlideUp(1)}
       initial="initial"
       animate="animate"
       className="text-5xl lg:text-7xl font-bold xl:text-8xl uppercase "
      >
       Breakfast
      </motion.h1>
      <motion.p
       variants={SlideUp(1.5)}
       initial="initial"
       animate="animate"
       className="text-sm"
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Repellat hic nemo sunt.
      </motion.p>

      <motion.button
       variants={SlideUp(2)}
       initial="initial"
       animate="animate"
       className="btn-primary flex items-center gap-2 !mt-10"
      >
       <IoCartOutline /> Order Now
      </motion.button>
     </div>

     {/* image content */}
     <div className="relative">
      <motion.img
       initial={{ opacity: 0, rotate: 40, x: 300, y: 100 }}
       whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
       transition={{ duration: 1 }}
       src={foodImg}
       alt="food-img"
       className="w-[450px] img-shadow "
      />
      <motion.img
       initial={{ opacity: 0, rotate: 140, x: 300, y: 100 }}
       whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
       transition={{ duration: 1 }}
       src={spoonImg}
       alt="food-img"
       className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow "
      />
      <motion.img
       initial={{ opacity: 0, rotate: 40, x: 300, y: 100 }}
       whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
       transition={{ duration: 1 }}
       src={bananaImg}
       alt="food-img"
       className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow "
      />
     </div>
    </div>
   </div>

   {/* bg */}
   <motion.div
    initial={{ opacity: 0, rotate: 60, x: 300, y: 100 }}
    whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
    transition={{ duration: 1 }}
    className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[70%] z-0 "
   ></motion.div>
  </section>
 );
};

export default Hero;
