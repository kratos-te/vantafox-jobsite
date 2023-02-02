import React, { useState, useEffect } from 'react'

import FmdGoodIcon from '@mui/icons-material/FmdGood'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

const User = () => {
  return (
    <div className="container min-w-[100%] px-48 mb-24">
      <div className="flex justify-between rounded-lg border-gray-400 border-2 mt-12 p-12">
        <div className="flex">
          <img src="/images/avatars/user.png" alt="user" />
          <div className="flex flex-col space-y-4 mx-10">
            <p className="font-sans text-3xl font-bold">Isabell Johnson</p>
            <p className="font-sans text-gray-500 text-base">
              <FmdGoodIcon /> United States
            </p>
            <p className="font-sans text-gray-500 text-base">
              <WatchLaterIcon /> 11:25 pm local time
            </p>
          </div>
        </div>

        <div className="mr-10 flex items-center">
          <button className="rounded-lg border-purple-600 border-2 p-4">
            <p className="font-sans text-lg font-bold text-purple-600">
              Edit Profile
            </p>
          </button>
        </div>
      </div>
      <div className="mt-12 flex justify-between grid gap-x-8 gap-y-4 grid-cols-4">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-4 p-6 rounded-t-lg border-gray-400 border-2">
            <p className="font-sans text-2xl font-bold"> Hours per week</p>
            <p className="font-sans text-base">As Needed / Open to offers</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 border-gray-400 border-x-2">
            <p className="font-sans text-2xl font-bold"> Languages</p>
            <p className="font-sans text-base">English - Pro Level</p>
            <p className="font-sans text-base">Russian - Intermediate level</p>
            <p className="font-sans text-base">Russian - Beginner level</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 rounded-b-lg border-gray-400 border-2">
            <p className="font-sans text-2xl font-bold"> Education</p>
            <p className="font-sans text-xl font-bold">
              Virtual University Of Pakistan
            </p>
            <p className="font-sans text-base ">
              Bachelor of Computer Science (BCompSc), Computer science 2018-2022
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-3">
          <div className="flex flex-col space-y-4 p-6 rounded-t-lg border-gray-400 border-2">
            <div className="flex justify-between">
              <p className="font-sans text-3xl font-bold">
                Web & Mobile App UX/UI Designer
              </p>
              <p className="font-sans text-2xl font-bold">$20.00/hr</p>
            </div>
            <p className="font-sans text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              mattis dolor, ut egestas risus. Proin iaculis porta hendrerit.
              Aliquam facilisis tincidunt enim, et aliquam felis vestibulum
              quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit
              amet... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam et mattis dolor, ut egestas risus. Proin iaculis porta
              hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis
              vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam
              non ante sit
            </p>
            <p className="font-sans text-base ">
              amet... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam et mattis dolor, ut egestas risus. Proin iaculis porta
              hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis
              vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam
              non ante sit amet...{' '}
            </p>
            <p className="font-sans text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              mattis dolor, ut egestas risus. Proin iaculis porta hendrerit.
              Aliquam facilisis tincidunt enim, et aliquam felis vestibulum
              quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit
              amet...{' '}
            </p>
          </div>
          <div className="flex flex-col space-y-4 p-6 border-gray-400 border-x-2">
            <p className="font-sans text-3xl font-bold">Skills</p>
            <div className="flex space-x-4">
              <button className="rounded-full bg-indigo-100 p-4">
                <p className="font-sans text-base text-purple-600">
                  Ux/Ui Design
                </p>
              </button>
              <button className="rounded-full bg-indigo-100 p-4">
                <p className="font-sans text-base text-purple-600">
                  Ux/Ui Design
                </p>
              </button>
              <button className="rounded-full bg-indigo-100 p-4">
                <p className="font-sans text-base text-purple-600">
                  Ux/Ui Design
                </p>
              </button>
              <button className="rounded-full bg-indigo-100 p-4">
                <p className="font-sans text-base text-purple-600">
                  Website Development
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 p-6 rounded-b-lg border-gray-400 border-2">
            <p className="font-sans text-3xl font-bold">Portfolio</p>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div>
                  <img src="/images/image 59.png" alt="portfolio" />
                </div>
                <div>
                  <p className="font-sans text-2xl font-bold">Website Design</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="/images/image 59.png" alt="portfolio" />
                </div>
                <div>
                  <p className="font-sans text-2xl font-bold">Website Design</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="/images/image 59.png" alt="portfolio" />
                </div>
                <div>
                  <p className="font-sans text-2xl font-bold">Website Design</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="/images/image 59.png" alt="portfolio" />
                </div>
                <div>
                  <p className="font-sans text-2xl font-bold">Website Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
