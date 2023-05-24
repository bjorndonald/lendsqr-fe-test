import React, { ReactNode } from 'react'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'

type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="content">
        <SideBar />
        <div className="body">
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout