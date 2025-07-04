import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox"; 
import ContactList from "../components/ContactList/ContactList"; 
import { fetchContacts } from "../redux/contacts/operations"; 
import { selectError, selectLoading } from '../redux/contacts/selectors';

export default function ContactsPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
    
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ContactList />
    </>
  );
}