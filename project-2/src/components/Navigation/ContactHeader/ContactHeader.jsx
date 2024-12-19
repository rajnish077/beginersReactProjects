import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        LETS CONNECT: WE ARE HERE TO HELP YOU,AND WE HAD LOVE TO HEAR FROM YOU!
        WHEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT WITH US, YOU
        CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL OR BY SOCIAL MEDIA SITE.
      </p>
    </div>
  );
};

export default ContactHeader;
