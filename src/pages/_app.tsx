import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
