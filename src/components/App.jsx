import React, { Component } from 'react';
import ContactFrom from './ContactForm';
import ContactsList from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = props => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, props],
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactFrom states={this.state} onAddContacs={this.addContacts} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
