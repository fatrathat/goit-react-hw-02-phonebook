import React, { Component } from 'react';
import ContactFrom from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = props => {
    const { contacts } = this.state;
    if (contacts.find(el => el.name === props.name)) {
      alert(`${props.name} is already in contacts`);
    } else {
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, props],
        };
      });
    }
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilterContacts = value => {
    this.setState({
      filter: value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.MainTitle}>Phonebook</h1>
        <ContactFrom states={this.state} onAddContacs={this.addContacts} />

        <h2 className={styles.SecondTitle}>Contacts</h2>
        <Filter
          contacts={filter}
          onFilterContacts={this.changeFilterContacts}
        />
        <ContactsList
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
