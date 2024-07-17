import { IoCartOutline } from 'react-icons/io5';
import Logo from '../../assets/food/logo.png';
import { motion } from 'framer-motion';

const navMenu = [
 { title: 'Home', url: '/', delay: 0.1 },
 { title: 'About', url: '/about', delay: 0.2 },
 { title: 'Menu', url: '/menu', delay: 0.3 },
 { title: 'Delivery', url: '/delivery', delay: 0.4 },
 { title: 'Contact Us', url: '/contact', delay: 0.5 },
];

const SlideDown = (delay) => {
 return {
  initial: {
   y: '-100%',
   opacity: 0,
  },
  animate: {
   y: 0,
   opacity: 1,
   transition: {
    duration: 0.8,
    delay: delay,
   },
  },
 };
};
const Navbar = () => {
 return (
  <header>
   <nav className="container flex justify-between items-center font-league ">
    {/* logo */}
    <motion.img
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.8, delay: 0.5 }}
     src={Logo}
     alt=""
     className="w-36"
    />

    {/* menu */}
    <div className="hidden md:block">
     <ul className="flex gap-6 items-center">
      {navMenu.map(({ title, url, delay }, index) => (
       <motion.li
        variants={SlideDown(delay)}
        initial="initial"
        animate="animate"
        key={index}
        className="nav-menu cursor-pointer "
        data-delay={delay}
       >
        <a
         href={url}
         className="inline-block px-2 py-2 text-2xl hover:-translate-y-1 hover:text-darkGreen transition-all duration-500"
        >
         {title}
        </a>
       </motion.li>
      ))}
     </ul>
    </div>

    {/* button */}

    <motion.div
     variants={SlideDown(1)}
     initial="initial"
     animate="animate"
    >
     <button className="size-10 grid place-items-center rounded-full text-white bg-darkGreen">
      <IoCartOutline />
     </button>
    </motion.div>
   </nav>
  </header>
 );
};

export default Navbar;
