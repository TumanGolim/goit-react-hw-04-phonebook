import React from 'react';

const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul>
    {filteredContacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
