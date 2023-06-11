import ContactItem from 'components/ContactItem/';

const Contacts = ({ contacts, onDeleteContact, children }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {children}
      {contacts.length !== 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;
