import React, { Component } from 'react';

class ContactsList extends Component {
  onClickHandler = e => {};

  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button name="delete" type="text" onClick={this.onClickHandler}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
