import { BrowserRouter as Router , Routes , Route, } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Chapters from './Chapters'
import Index from './Index'
import Pages from './Pages'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path=":chapter" element={<Chapters />}>
          <Route path=':id' element={<Pages />} />
        </Route>
      </Routes>
    </Router>
  )
}
