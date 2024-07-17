import food1 from '../../assets/food/food.png';
import food2 from '../../assets/food/food2-plate.png';
import food3 from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utils';

const popularRecipeeData = [
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

const PopularRecipe = () => {
 return (
  <section>
   <div className="container py-24">
    <motion.h3
     variants={SlideUp(0.5)}
     initial="initial"
     whileInView="animate"
     className="text-4xl text-center font-league font-semibold uppercase py-8"
    >
     Our Popular Recipe
    </motion.h3>

    {/* cards */}
    <div
     className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 place-items-"
    >
     {popularRecipeeData.map(({ id, name, img, price, delay }) => (
      <div key={id} className='group space-y-3 bg-white/50 shadow-xl p-3 rounded-xl md:w-full md:max-w-[300px]'>
       <img
        src={img}
        alt="image"
        className="w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-700"
       />

       <div>
        <button className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100'>Buy now</button>
        <p className='text-xl font-bold '>{name}</p>
        <p className='font-semibold text-lg text-yellow-500'>{price}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default PopularRecipe;
