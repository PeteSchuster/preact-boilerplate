import React, { Component } from 'react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import Routes from '../routes'

class App extends Component {
  render() {
    return (
      <div className="page-app">
        <PageHeader />
        <div class="page-content">
          <main class="page-main">
            <Routes />
          </main>
        </div>
        <PageFooter />
      </div>
    )
  }
}

export default App;
