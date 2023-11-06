import { useSelector } from 'react-redux';
import { getContactsItems } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { Container } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </Container>
  );
};
