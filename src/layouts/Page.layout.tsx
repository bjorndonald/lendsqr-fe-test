import React, { ReactNode } from 'react'
import Header from '../components/header/Header'

type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return (
    <div id='page'>
      <Header />
      {children}
    </div>
  )
}

export default PageLayout