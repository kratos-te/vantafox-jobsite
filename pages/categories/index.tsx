import React from "react";

import Header from "../../components/Header";
import BrowseCategories from '../../components/BrowseCategories'
import Jobs from '../../components/Jobs'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <BrowseCategories />
      <Jobs />
      <Footer />
    </div>
  )
}
