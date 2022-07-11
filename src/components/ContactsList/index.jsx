import React, { Component } from 'react';

class ContactsList extends Component {
  yo = () => {
    console.log(this.props);
  };
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          console.log(contact.name);
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
