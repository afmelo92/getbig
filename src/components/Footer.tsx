import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-10">
        <div className="mx-auto max-w-max">
          <Image
            src={'/nav-logo.png'}
            layout="fixed"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
        <div className="mx-auto max-w-max">
          <h1 className="font-bold text-xl mb-4">GETBIG - Consultoria</h1>
          <h2>CNPJ: 55.999.888/0001-99</h2>
        </div>
        <div className="flex-col md:justify-evenly md:flex md:flex-row">
          <div className="py-8 pl-10 md:pl-0 w-max">
            <h1 className="font-bold text-2xl my-8">Links Úteis</h1>
            <ul>
              <li className="hover:text-black">
                <a href="#">Sobre a GETBIG</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Minha Conta</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Meus pedidos</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Política de Privacidade</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Seja um parceiro</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Vale Presente</a>
              </li>
            </ul>
          </div>

          <div className="py-8 pl-10 md:pl-0 w-max">
            <h1 className="font-bold text-2xl my-8">Entre em Contato</h1>
            <h2 className="font-semibold text-xl">(11) 9 9999-9999</h2>
            <h2 className="font-semibold text-xl mt-4">
              contato@getbig.com.br
            </h2>
          </div>

          <div className="py-8 pl-10 md:pl-0 w-max">
            <h1 className="font-bold text-2xl my-8">Social</h1>
            <div className="flex flex-row">
              <a href="#">
                <FaFacebook size={25} className="hover:text-red-900 mr-4" />
              </a>
              <a href="#">
                <FaInstagram size={25} className="hover:text-red-900 mr-4" />
              </a>
              <a href="#">
                <FaYoutube size={25} className="hover:text-red-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
