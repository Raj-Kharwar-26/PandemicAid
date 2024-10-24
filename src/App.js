import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NGOList from './pages/NGOList'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ngos" component={NGOList} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
