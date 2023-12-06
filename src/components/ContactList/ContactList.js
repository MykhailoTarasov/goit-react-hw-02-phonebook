import { ButtonItem, List, ListItem } from "./ContactList.Styled";

const ContactList = ({contacts, onDeleteContact}) => (
<List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <p>{name} {number}</p>
        <ButtonItem onClick={() => onDeleteContact(id)} >Delete</ButtonItem>
      </ListItem>
    ))}
</List>
)

export default ContactList;