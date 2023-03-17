// import { v4 as uuidv4 } from 'uuid';

import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    const liItems = contacts.map(item => {
      return (
        <li key={item.id}>
          {item.name}: {item.number}
          <button ></button>
        </li>
      );
    });

    return <ul>{liItems}</ul>;
  }
}

export default ContactList;
