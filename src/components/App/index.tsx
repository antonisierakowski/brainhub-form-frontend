import React from 'react';
import { EventForm } from "../EventForm";
import './styles.css'
import { NotificationContainer } from "../Notification/NotificationContainer";

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <EventForm />
    </div>
  );
}

export default App;
