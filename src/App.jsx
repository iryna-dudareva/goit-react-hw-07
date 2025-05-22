import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import Contactlist from './components/Contactlist/Contactlist'


function App() {

  const [contacts, setContacts] = useState(() => { 

    const storedData = localStorage.getItem('contacts');
    return storedData ? JSON.parse(storedData) :
    [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];
});

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const handleAdd = (newContact) => {
    setContacts((currentContacts) =>{
      return [...currentContacts, newContact];
    });
  };

  const handleDelete = (contactId) => {
    setContacts((currentContacts) => 
      currentContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm onAdd={handleAdd} />
    <SearchBox inputValue={query} handleChange={handleSearch}/>
    <Contactlist contacts={filteredContacts} onDelete={handleDelete}/>
    </>
)
}

export default App
