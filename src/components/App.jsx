// import LoginForm from './login';
import React, { Component } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '111-11-11' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    // console.log(this.state);
  };

  filterName = e => {
    this.setState({ filter: e.currentTarget.value });
    // console.log(this.state.filter);
  };

  filteredNames = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    // console.log(id);
    const index = this.state.contacts.findIndex(el => el.id === id);
    const array = [...this.state.contacts];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ contacts: array });
    }
    // console.log(this.state.contacts);
  };

  render() {
    const filteredNames = this.filteredNames();
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            // onSubmit={values => console.log(values)}
            addContact={this.addContact}
            contacts={contacts}
          />
        </Section>
        <Section title="Contacts">
          <Filter filterState={this.filterName} />
          <ContactList
            contactsFiltered={filteredNames}
            remove={this.deleteContact}
          />
          <ToastContainer />
        </Section>
      </>
    );
  }
}

export default App;
