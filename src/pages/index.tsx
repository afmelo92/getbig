import React from 'react'
import Image from 'next/image'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | GETBIG Consultoria">
    <div className="border-green-300 border-2 flex max-w-7xl mx-auto items-center">
      <div className="border-2 border-red-500 p-20 flex mx-auto items-center">
        <div className="flex-col">
          <h1 className="text-9xl font-black">GETBIG</h1>
          <p className="text-center text-xl">
            A consultoria do treinador mais foda do universo!
          </p>
          <form action="" className="flex justify-center my-8">
            <input
              type="text"
              placeholder="Seu melhor e-mail"
              className="p-4 rounded-l-2xl text-black"
            />
            <button
              type="submit"
              className="bg-red-700 p-4 rounded-r-2xl font-semibold hover:bg-red-900"
            >
              QUERO FICAR GRANDÃO!
            </button>
          </form>
        </div>
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
