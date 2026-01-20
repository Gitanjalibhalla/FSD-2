import { Checkbox, FormControlLabel } from "@mui/material";

const UICheckbox = ({ label }) => {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label={label}
    />
  );
};

export default UICheckbox;
