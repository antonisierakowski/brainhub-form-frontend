import React from 'react';
import { EventForm } from "../EventForm";
import './styles.css'
import { NotificationContainer } from "../Notification/NotificationContainer";
import { Paper } from "@material-ui/core";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <Paper elevation={3} className="container">
        <Header />
        <EventForm />
      </Paper>
    </div>
  );
}

export default App;
