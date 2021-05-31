import Footer from './Footer'
import Navbar from './Navbar'

export default ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
