import PageLayout from "./PageLayout";
import UITextField from "./Text_Filed";
import UISelect from "./Select";
import UIRating from "./Rating";
import UICheckbox from "./CHeckBox";
import Buttonio from "./Buttonio";

const Home = () => {
  return (
    <PageLayout title="Home Page">
      <UITextField label="Name" />
      <UISelect />
      <UIRating />
      <UICheckbox label="Accept Terms" />
      <Buttonio text="Submit" />
    </PageLayout>
  );
};

export default Home;
