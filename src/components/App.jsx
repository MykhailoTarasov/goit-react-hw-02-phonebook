import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Title } from './App.Styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
   

    const nameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${newContact.name}' is arleady in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 20,
          color: '#010101',
          backgroundColor: '#b6f7dd',
          textAlign: 'center',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />

          <Title>Contacts</Title>
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
