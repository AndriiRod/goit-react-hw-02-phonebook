import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from 'components/Phonebook/';
import AddContactForm from 'components/AddContactForm/';
import Contacts from 'components/Contacts/';
import FindField from 'components/FindField/';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  setNewContact = ({ name, number }) => {
    this.setState(
      {
        name: name,
        number: number,
      },
      () => this.checkingForMatches()
    );
  };

  addNewContact = () => {
    const { name, number } = this.state;

    const newItem = {
      id: nanoid(5),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newItem, ...contacts],
    }));
  };

  checkingForMatches = () => {
    const { name, contacts } = this.state;
    const matches = contacts.find(item => item.name === name);
    if (matches) {
      alert(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is already in contacts`
      );
      return;
    }
    this.addNewContact();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <Phonebook title="Phonebook">
        <AddContactForm setNewContact={this.setNewContact} />
        <Contacts
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        >
          <FindField
            value={this.state.filter}
            changeFilter={this.changeFilter}
          />
        </Contacts>
      </Phonebook>
    );
  }
}

export default App;
