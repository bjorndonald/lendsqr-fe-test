import React, { ReactNode } from 'react'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
import { useAppContext } from '../contexts/app.context'

type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  const { isMobile, menuIsOpen } = useAppContext()
  return (
    <>
      <Header mobile={isMobile} />
      <div className="content">
        <SideBar mobile={isMobile} isMenuOpen={menuIsOpen} />
        <div className="body">
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout