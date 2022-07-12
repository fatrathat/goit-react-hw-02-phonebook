import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactFrom extends Component {
  INITIAL_STATE = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onAddContacs({ ...this.state, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.INITIAL_STATE });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="ContactForm__controls">
            <div className="ContactForm__control">
              <label>
                Name
                <input
                  onChange={this.changeHandler}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </label>
              <div className="ContactForm__control">
                <label>
                  Number
                  <input
                    onChange={this.changeHandler}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </label>
              </div>
              <button type="submit">Add contact</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactFrom;
