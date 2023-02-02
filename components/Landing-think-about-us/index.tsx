/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import WavyText from '../../global_componenets/WavyText'

export default function Landing_Think_About_US() {
  return (
    <div className=" mt-32 px-4 ">
      <WavyText
        text="What People Think About Us"
        className="text-center font-bold lg:text-6xl w-[100%] flex items-center justify-center mb-28 md: text-[28px]"
      ></WavyText>

      <div className="grid justify-items-center">
        <div className="static">
          <img src="/images/Mask Group.jpg" alt="Mask" className="w-full" />
        </div>
        {/* <div className="xl:absolute rounded-full border-4 xl:border-blue-500 xl:w-[30rem] xl:h-[30rem] xl:mt-56 lg:absolute border-blue-500 lg:mt-52  md:absolute border-blue-500 md:w-[20rem] md:h-[20rem] md:mt-40 sm:w-[15rem] sm:h-[15rem] sm:absolute border-blue-500 sm:mt-44"></div> */}

        <div
          className=" xl:absolute xl:mt-96 xl:w-1/3 xl:mb-32 grid justify-items-center lg:absolute lg:mt-80 lg:w-1/3 lg:mb-32 grid justify-items-center
        md:absolute md:w-2/3 lg:mb-32 md:mt-64 sm:absolute sm:mt-48 sm: w-2/3"
        >
          {/* <img
            src="/images/person.png"
            alt="person"
            className="xl:w-[168px] lg:w-[124px] sm:w-[72px] "
          /> */}
          <div className="grid justify-items-center static mt-4">
            <div className="w-14 h-14 rotate-45 bg-white"></div>
            <div className="flex flex-col box-border shadow-2xl h-auto lg:w-auto p2 items-center rounded-xl bg-white absolute mt-4 p-4 md:w-2/3">
              <p className="lg:text-lg text-center flex md: text-[9px]">
                Build your financial literacy within a transparent community.
                Follow other investors, share insights with people from
                different professional backgrounds, and never be alone.
              </p>
              <p className=" text-center flex font-bold lg:text-2xl md:text-[12px]">
                Jony Scotty
              </p>
              <p className="text-center flex lg:text-lg md: text-[9px]">
                UI designer
              </p>
            </div>
          </div>
        </div>

        {/* <div
          className="xl:absolute xl:w-1/6 xl:h-72 xl:mt-56 xl:left-1/4
        lg:absolute lg:w-1/6 lg:h-72 lg:mt-56 lg:left-[200px]
        md:absolute md:w-1/6 md:h-56 md:mt-56 md:left-[200px]
        sm:absolute sm:w-1/6 sm:h-36 sm:mt-56 sm:left-[140px]"
        >
          <div className="absolute top-0 right-0">
            <img
              src="/images/person1.png"
              className="xl:w-[63px] lg:w-[48px] sm:w-[32px] "
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              src="/images/person2.png"
              className="xl:w-[89px] lg:w-[76px] sm:w-[40px] "
            />
          </div>
        </div>
        <div
          className="xl:absolute xl:w-1/6 xl:h-96 xl:mt-72 xl:left-2/3 
        lg:absolute lg:w-1/6 lg:h-96 lg:mt-72 lg:left-3/4
        md:absolute md:w-1/6 md:h-64 md:mt-72 md:left-3/4
        sm:absolute sm:w-1/6 sm:h-56 sm:mt-56 sm:left-3/4"
        >
          <div className="absolute top-0 left-0">
            <img
              src="/images/person3.png"
              className="xl:w-[93px] lg:w-[80px] sm:w-[56px]"
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              src="/images/person4.png"
              className="xl:w-[93px] lg:w-[80px] sm:w-[56px]"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
