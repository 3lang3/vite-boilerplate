import '@fontsource/inter/variable.css'
import './index.css'

import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import { App, Router } from '@/systems/Core'
import { Home } from '@/pages/Home'
import { Profile } from '@/pages/Profile'

ReactDOM.render(
  <App>
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Router>
  </App>,
  document.getElementById('root')
)
