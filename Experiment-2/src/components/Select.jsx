import { MenuItem, Select } from "@mui/material";

const UISelect = () => {
  return (
    <Select fullWidth defaultValue="">
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="1">Option 1</MenuItem>
      <MenuItem value="2">Option 2</MenuItem>
    </Select>
  );
};

export default UISelect;
