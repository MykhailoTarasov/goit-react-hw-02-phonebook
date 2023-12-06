import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <div>
          <h2>Phonebook</h2>
          <ContactForm />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
