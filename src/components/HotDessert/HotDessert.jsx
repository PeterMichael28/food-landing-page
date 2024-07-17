import food1 from '../../assets/food/food.png';
import food2 from '../../assets/food/food2-plate.png';
import food3 from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utils';

const foodItems = [
 {
  id: 1,
  name: 'HotDessert',
  price: '$5.99',
  img: food1,
  delay: 0.4,
 },
 {
  id: 2,
  name: 'Hot Cake',
  price: '$5.00',
  img: food2,
  delay: 0.8,
 },
 {
  id: 1,
  name: 'Hot Bread',
  price: '$3.99',
  img: food3,
  delay: 1.2,
 },
];

const HotDessert = () => {
 return (
  <section>
   <div className="container py-12">
    {/* heading */}
    <motion.h3
     variants={SlideUp(0)}
     initial="initial"
     whileInView="animate"
     className="text-2xl font-semibold text-darkGreen uppercase py-8"
    >
     Hot Desserts
    </motion.h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
     {foodItems.map((item) => (
      <motion.div
       key={item.id}
       variants={SlideUp(item.delay)}
       initial="initial"
       whileInView="animate"
       className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
      >
       <img
        src={item.img}
        alt={item.name}
        className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
       />
       <div>
        <h3 className="text-xl font-semibold group-hover:scale-110 transition-all duration-700">
         {item.name}
        </h3>
        <p className="text-yellow-500 group-hover:scale-105 transition-all duration-700">
         {item.price}
        </p>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default HotDessert;
