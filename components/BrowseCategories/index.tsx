import Link from "next/link";
import {motion} from "framer-motion";


export default function BrowseCategories() {
 return(
    <div className="flex items-center max-h-[667px] justify-between bg-landing-lady-bg overflow-x-hidden">
        
        <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center pl-[8.75%] w-[50%] h-[100%]"
        >
           <div className="flex flex-col">
            <h1 className="text-[65px] pt-[10%] pb-[3.5%]">Browse Freelancers In Different <span className="text-main">Categories</span></h1>
            <div className="text-[20px] pb-[7.1%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit amet </div> 
            <Link href="/" className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-main transition-all duration-500 font-bold py-4">Hire Now</Link>
            </div>
        </motion.div>

        <div className="md:flex hidden relative pr-[8.75%] flex-col overflow-hidden">
        
        <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.2 }}
        >
        <img src="/images/freelancer.png" alt="freelancer.png" className="relative left-0 top-0" />
      </motion.div>
        </div>
      </div>
  )
}