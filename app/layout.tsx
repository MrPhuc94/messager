import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import { Poppins } from 'next/font/google'
import Navbar from './(site)/components/Navbar/Navbar'
import {RootState} from '@/lib/store'
import { Provider } from 'react-redux'

export const metadata = {
  title: 'Messenger',
  description: 'Messenger Clone',
}

const popin = Poppins({
  weight: '300',
  style: 'normal',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={popin.className}>
      <body>
        <Provider store={RootState}>
          <AuthContext>
            <ToasterContext />
            <Navbar />
            <ActiveStatus />
            {children}
          </AuthContext>
        </Provider>
      </body>
    </html>
  )
}
