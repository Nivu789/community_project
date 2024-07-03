import React from 'react'
import BaseLayout from './BaseLayout'
import { Outlet } from 'react-router-dom'

const Wrapper = () => {
  return (
    <BaseLayout>
        <Outlet/>
    </BaseLayout>
  )
}

export default Wrapper