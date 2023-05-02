import React from 'react';

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(c => {
        return (
          <li key={c.id}>
            <p>
              {c.name}: {c.number}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
