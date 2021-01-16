import React from 'react'
import Image from 'next/image'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | GETBIG Consultoria">
    <div className="border-green-300 border-2 flex max-w-7xl mx-auto items-center">
      <div className="border-2 border-red-500 p-20 flex mx-auto items-center">
        <h1 className="text-9xl font-black">GETBIG</h1>
        <Image
          src={'/jay.png'}
          layout="fixed"
          width={500}
          height={500}
          className="cursor-pointer"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
