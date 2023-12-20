import "./ContactBox.css";

const ContactBox = ({ name, flag, phone, email, address }) => {
  return (
    <div className="contactBox">
      <div className="contactBoxTop">
        {name}
        <img src={flag} alt="country-flag" />
      </div>

      <div className="contactBoxDetails">
        <p>{phone}</p>
        <p>{email}</p>
      </div>

      <div className="contactBoxAddress">{address}</div>
    </div>
  );
};

export default ContactBox;
