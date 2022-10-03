import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/slice/settingsSlice";
import { StyledTitle, StyledSelect, StyledOption, StyledButton, StyledWrapper, StyledSpan } from "./styled";

const options = [
  {
    value: "light",
    name: "Light Theme",
  },
  {
    value: "colored",
    name: "Colored Theme",
  },
  {
    value: "dark",
    name: "Dark Theme",
  },
];

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  const handleChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  return (
    <StyledWrapper>
      <StyledTitle>Settings</StyledTitle>
      <StyledSelect value={theme} onChange={handleChange}>
        {options.map(({ value, name }) => (
          <StyledOption
            isToggle={value === theme ? true : false}
            key={value}
            value={value}
          >
            {name}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledButton>Clear All History</StyledButton>
    </StyledWrapper>
  );
};

export default Settings;
