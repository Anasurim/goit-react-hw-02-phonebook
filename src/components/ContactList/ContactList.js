import React from 'react';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>

            <button type="button" onClick={() => deleteContact(id)}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
