import React, { useState } from 'react'
import Link from 'next/link'
import Login from '../Login'
import JoinUs from '../JoinUs'
import { motion } from 'framer-motion'
import SignUp from '../SignUp'

export default function Header() {
  const [show, setShow] = useState<boolean>(false)
  const closeJoinUs = () => setShow(false)

  const [loginOpened, setLoginOpen] = useState<boolean>(false)
  const [signupOpened, setSignupOpen] = useState<boolean>(false)
 


  return (
    <header>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between">
          <img src="/logo.svg" className="w-12" alt="logo" />
          <nav className="items-center font-regular md:flex hidden">
            <Link
              href="/"
              className="text-2xl text-main transition-all duration-500 mx-5 font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-2xl hover:text-main transition-all duration-500 mx-5"
            >
              Jobs
            </Link>
            <Link
              href="/categories"
              className="text-2xl hover:text-main transition-all duration-500 mx-5"
            >
              Freelancers
            </Link>
            <button
              className="text-2xl hover:text-main transition-all duration-500 mx-5"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </button>
            <button
              className="bg-main rounded-lg px-8 py-2  text-white text-lg font-semibold transition-all duration-500 mx-5"
              onClick={() => setShow(true)}
            >
              JOIN NOW
            </button>
          </nav>
          <Login
            opened={loginOpened}
            open={() => setLoginOpen(true)}
            close={() => setLoginOpen(false)}
            signupOpen={() => setSignupOpen(true)}
          />
          <SignUp
            opened={signupOpened}
            open={() => setSignupOpen(true)}
            close={() => setSignupOpen(false)}
            loginOpen={() => setLoginOpen(true)}
          />
          <JoinUs open={show} closeJoinUs={closeJoinUs} />
        </div>
      </motion.div>
    </header>
  )
}
