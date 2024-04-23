import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactsSection } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

import { ContactsPageWrapper } from 'App.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsPageWrapper>
      <ContactsSection>
        <ContactForm />
      </ContactsSection>
      <ContactsSection>
        <ContactsFilter />
        <ContactList />
      </ContactsSection>
    </ContactsPageWrapper>
  );
}
