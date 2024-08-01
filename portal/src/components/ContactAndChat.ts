import { useEffect, useState } from "react";
import axios from "axios";

const ContactAndChat = () => {
  const [phoneemail, setPhoneEmail] = useState<any>({});

  useEffect(() => {
    axios
      .get("https://api.injazrent.ae" + "/admin/getAllsettings")
      .then((res) => {
        setPhoneEmail(res.data.data[0]);
        console.log(res.data.data[0], "phoneEmail");
      })
      .catch((err) => {
        console.log(err, "...error");
      });
  }, []);

  const handleWhatsappClick: any = () => {
    const message = encodeURIComponent(
      "Hi, \nI’m contacting you through 360 Solutions. \nI’m interested in your services. \nPlease provide me further details."
    );
    window.open(
      `https://wa.me/${phoneemail?.phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  const handlePhoneClick: any = () => {
    window.open(`tel:${phoneemail?.phoneNumber}`, "_blank");
  };

  const handleMailClick: any = () => {
    (window.location.href = `mailto:${phoneemail?.email}`), "_blank";
  };

  return { phoneemail, handleWhatsappClick, handlePhoneClick, handleMailClick};
};

export default ContactAndChat;
