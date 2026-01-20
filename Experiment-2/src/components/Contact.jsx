import PageLayout from "./PageLayout";
import UITextField from "./Text_Filed";
import UISelect from "./Select";
import UIRating from "./Rating";
import UICheckbox from "./CHeckBox";
import Buttonio from "./Buttonio";

const Contact = () => {
  return (
    <PageLayout title="Contact Page">
      <UITextField label="Email" />
      <UISelect />
      <UICheckbox label="Subscribe" />
      <UIRating />
      <Buttonio text="Contact Us" />
    </PageLayout>
  );
};

export default Contact;
