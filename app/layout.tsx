"use client"

import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import { BrowserRouter } from 'react-router-dom'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BrowserRouter>
          <AuthContext>
            <ToasterContext />
            {/* <ActiveStatus /> */}
            {children}
          </AuthContext>
        </BrowserRouter>,
      </body>
    </html>
  )
}
