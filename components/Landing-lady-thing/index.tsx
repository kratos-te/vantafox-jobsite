import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Landing_lady() {
  return (
    <div className="flex items-center  justify-between bg-landing-lady-bg ">
      <div className="lg:flex justify-between">
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col  items-center pl-[8.75%]   h-[100%] lg: w-full "
        >
          <div className="flex flex-col md: pr-[8.75%]">
            <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md: text-[28px]  md: pt-[10%] md: font-[900]">
              Work More <span className="text-main">Pay Less</span>
            </h1>
            <div className="text-[20px] pb-[7.1%]">
              Vantafox is a community of freelancers dedicated to providing the
              best and most affordable services for businesses and individuals.
              With specialists hailing from many different fields, we have a
              professional for every job. Join the best and most supportive
              community of professionals today!
            </div>
            <Link
              href="/"
              className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-main transition-all duration-500 font-bold py-4 mb-8"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        <div className="relative flex-col overflow-hidden w-full">
          <img
            src="/images/trans-stripes.png"
            alt="stripes.png"
            className="absolute sm: right-0"
          />

          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/images/woman.png"
              alt="woman working.png"
              className="relative  left-0 "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/images/freelancers-pfp.png"
              alt="freelancers.png"
              className="absolute bottom-10 right-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
