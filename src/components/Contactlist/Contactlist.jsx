import React from 'react'
import css from './Contactlist.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'


const Contactlist = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default Contactlist