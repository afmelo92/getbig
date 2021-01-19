import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-full bg-red-700 mx-auto">
      <nav className="max-w-7xl mx-auto">
        <Navbar />
      </nav>
    </header>
    {children}
    <footer className="bg-red-700 h-auto">
      <Footer />
    </footer>
  </div>
)

export default Layout
