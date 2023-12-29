import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import { Poppins } from 'next/font/google'
import Navbar from './(site)/components/Navbar/Navbar'
import { ReduxProvider } from './redux/storeProvider'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Messenger',
  description: 'Messenger Clone',
}

const popin = Poppins({
  weight: '300',
  style: 'normal',
  subsets: ['latin']
})

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {

  const data = await getCurrentUser();

  return (
    <html lang="en" className={popin.className}>
      <body>
        <ReduxProvider>
          <AuthContext>
            <ToasterContext />
            <Navbar currentUser={data}/>
            <ActiveStatus />
            {children}
          </AuthContext>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout