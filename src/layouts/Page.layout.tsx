import React, { ReactNode } from 'react'
import Header from '../components/header/Header'


type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return (
    <div id='page'>
      <Header />
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default PageLayout