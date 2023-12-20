import "./Contacts.css";
import ContactBox from "./components/ContactBox";

import contactsData from "./components/contacts.data";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <div className="contactsContainerRow">
        {contactsData.slice(0, 2).map((item, i) => (
          <ContactBox
            name={item.name}
            flag={item.flag}
            phone={item.phone}
            email={item.email}
            address={item.address}
            key={i}
          />
        ))}
      </div>
      <div className="contactsContainerRow">
        {contactsData.slice(2, 5).map((item, i) => (
          <ContactBox
            name={item.name}
            flag={item.flag}
            phone={item.phone}
            email={item.email}
            address={item.address}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
