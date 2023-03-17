// import LoginForm from './login';
import React, { Component } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log(this.state);
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <LoginForm onSubmit={values => console.log(values)} /> */}
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList  contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
