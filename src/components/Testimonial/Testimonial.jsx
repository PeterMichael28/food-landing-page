import { motion } from 'framer-motion';
import food3 from '../../assets/food/banner.png';
import { SlideUp } from '../../utils';

const Testimonial = () => {
 return (
  <section>
   <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
     {/* text */}
     <div className="space-y-5 lg:max-w-[400px] ">
      <motion.p
       variants={SlideUp(0.4)}
       initial="initial"
       whileInView="animate"
       className="text-xl relative z-10 font-serif"
      >
       &apos;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Delectus possimus vero libero hic cum sed tenetur soluta,
       asperiores architecto vel ipsa reprehenderit consectetur
       accusamus, modi qui. Fugit quas similique blanditiis voluptatem
       saepe deserunt quod?&apos;
      </motion.p>

      <div className='flex items-center gap-3'>
       <motion.img
        variants={SlideUp(0.8)}
        initial="initial"
        whileInView="animate"
        src="https://picsum.photos/id/237/200/300"
        className="size-14 rounded-full object-cover"
        alt=""
       />

       <motion.div
        variants={SlideUp(1.2)}
        initial="initial"
        whileInView="animate"
       >
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-sm">Developer</p>
       </motion.div>
      </div>
     </div>

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
       className="relative z-10 w-full lg:max-w-[300px] img-shadow"
      />

      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[270px] md:size-[330px] bg-lightYellow rounded-full"
      ></motion.div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Testimonial;
