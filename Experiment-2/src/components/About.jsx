import PageLayout from "./PageLayout";
import UITextField from "./Text_Filed";
import UISelect from "./Select";
import UIRating from "./Rating";
import UICheckbox from "./CHeckBox";
import Buttonio from "./Buttonio";

const About = () => {
  return (
    <PageLayout title="About Page">
      <UITextField label="Feedback" />
      <UIRating />
      <UISelect />
      <UICheckbox label="I Agree" />
      <Buttonio text="Send" />
    </PageLayout>
  );
};

export default About;
