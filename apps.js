import { datadogRum } from '@datadog/browser-rum';
import { WebViewTracking } from '@datadog/browser-rum';
datadogRum.startSessionReplayRecording();


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard'; // Your dashboard component
import DropOffPage from './DropOffPage'; // Component to show details on drop-off rate
import DecisionFatiguePage from './DecisionFatiguePage'; // Component to show decision fatigue details

const clientToken = 'YOUR_"pub718b636a3e6e712beb20158c7b3c67aa"CLIENT_TOKEN'; // Example: 'pubXXXXXXXXXXXXXXXXXXXXXXXXX';
const applicationId = 'YOUR_APPLI"48d85492-e55a-44f9-aafe-ac7d8c962dc3"CATION_ID'; // Example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const environment = '<staging>'

// Track an error
try {
    // some code
  } catch (error) {
    datadogRum.addError(error);
  }
  
  // Track a custom event
  datadogRum.addAction('CustomEvent', { customKey: 'value' });

// Initialize web view tracking
let webview = document.getElementById('myWebView'); // Select your webview element
WebViewTracking.enable(webview, ['page1', 'page2']); // Track specific pages or actions
datadogRum.init({
  applicationId,
  clientToken,

  site: 'datadoghq.com', // Default site
  service: 'dicorner-web', // Use your service name
  env: 'prod', // Environment, can be 'prod', 'staging', etc.
  version: '1.0.0', // Your app's version

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dropoff">Drop-off Rate</Link>
          <Link to="/decisionfatigue">Decision Fatigue</Link>
        </nav>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dropoff" component={DropOffPage} />
          <Route path="/decisionfatigue" component={DecisionFatiguePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
