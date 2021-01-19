import React from 'react'
import Image from 'next/image'

import { Menu, Transition } from '@headlessui/react'

const Navbar: React.FC = () => {
  const facialCategories = [
    'BICEPS',
    'TRICEPS',
    'PEITORAL',
    'COSTAS',
    'PERNAS',
    'TRAPEZIO',
    'ABDOMEM',
    'CARDIO'
  ]

  const bodyCategories = ['GORDURAS', 'CARBOIDRATOS', 'PROTEÍNAS']

  return (
    <Menu>
      {({ open: hamburgerOpen }) => (
        <div className="relative w-full z-20 bg-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-none py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span className="sr-only">GET BIG</span>
                <Image
                  src={'/nav-logo.png'}
                  layout="fixed"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Menu.Button className="bg-red-700 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {/* <!-- Heroicon name: menu --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <nav className="hidden md:flex space-x-10">
                <Menu>
                  {({ open }) => (
                    <div className="relative">
                      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}

                      <Menu.Button
                        className={`${
                          open && 'text-gray-300'
                        } group bg-red-700 rounded-md text-white inline-flex items-center text-base font-medium hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-red-600`}
                      >
                        <span>Treinamentos</span>
                        {/* <!--
                 Heroicon name: chevron-down

                 Item active: "text-gray-600", Item inactive: "text-gray-400"
               --> */}
                        <svg
                          className={`${
                            open && 'text-red-200'
                          } ml-2 h-5 w-5 text-white group-hover:text-red-200`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>

                      {/* <!--
              'Solutions' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            --> */}
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Menu.Items>
                          <div className="absolute -ml-4 mt-3 transform px-2 w-min max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="z-20 relative grid gap-6 bg-red-900 px-5 py-6 sm:gap-8 sm:p-8">
                                {facialCategories.map((category, index) => (
                                  <Menu.Item key={index}>
                                    <a
                                      href="#"
                                      className="-m-3 p-2 flex items-start rounded-lg hover:bg-red-800"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-white">
                                          {category}
                                        </p>
                                      </div>
                                    </a>
                                  </Menu.Item>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </div>
                  )}
                </Menu>

                <Menu>
                  {({ open }) => (
                    <div className="relative">
                      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}

                      <Menu.Button
                        className={`${
                          open && 'text-gray-300'
                        } group bg-red-700 rounded-md text-white inline-flex items-center text-base font-medium hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-red-600`}
                      >
                        <span>Dietas</span>
                        {/* <!--
                 Heroicon name: chevron-down

                 Item active: "text-gray-600", Item inactive: "text-gray-400"
               --> */}
                        <svg
                          className={`${
                            open && 'text-red-200'
                          } ml-2 h-5 w-5 text-white group-hover:text-red-200`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>

                      {/* <!--
              'Solutions' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            --> */}
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Menu.Items>
                          <div className="absolute -ml-4 mt-3 transform px-2 w-min max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="z-20 relative grid gap-6 bg-red-900 px-5 py-6 sm:gap-8 sm:p-8">
                                {bodyCategories.map((category, index) => (
                                  <Menu.Item key={index}>
                                    <a
                                      href="#"
                                      className="-m-3 p-2 flex items-start rounded-lg hover:bg-red-800"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-white">
                                          {category}
                                        </p>
                                      </div>
                                    </a>
                                  </Menu.Item>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </div>
                  )}
                </Menu>

                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-red-200"
                >
                  Gift Card
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-red-200"
                >
                  Loja Online
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-red-200"
                >
                  Unidades
                </a>
              </nav>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-red-900"
                >
                  Área do aluno
                </a>
              </div>
            </div>
          </div>

          {/* <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
          <Menu>
            <Transition
              show={hamburgerOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-red-700 divide-y-2 divide-gray-100">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Image
                          src={'/nav-logo.png'}
                          layout="fixed"
                          width={50}
                          height={50}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="-mr-2">
                        <Menu.Button
                          className={
                            'bg-red-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                          }
                        >
                          <span className="sr-only">Close menu</span>
                          {/* <!-- Heroicon name: x --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-red-900"
                        >
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <span className="ml-3 text-base font-medium text-white">
                            Treinamentos
                          </span>
                        </a>

                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-red-900"
                        >
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <span className="ml-3 text-base font-medium text-white">
                            Dietas
                          </span>
                        </a>

                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-red-900"
                        >
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <span className="ml-3 text-base font-medium text-white">
                            Gift Card
                          </span>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-red-900"
                        >
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <span className="ml-3 text-base font-medium text-white">
                            Loja Online
                          </span>
                        </a>

                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-red-900"
                        >
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <span className="ml-3 text-base font-medium text-white">
                            Unidades
                          </span>
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-red-900"
                      >
                        Área do aluno
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-100">
                        Não é cliente?
                        <a
                          href="#"
                          className="text-yellow-400 hover:text-black"
                        >
                          {' '}
                          Cadastre-se
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </Menu>
        </div>
      )}
    </Menu>
  )
}

export default Navbar
