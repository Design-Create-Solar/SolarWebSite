import React from "react";
import * as constants from "../MultiplePages/constants";
import GFXField from "../GFX/GFXField";
import GFXRadio from "../GFX/GFXRadio";
import { showErrorOnBlur } from "mui-rff";

export const formFields = [
  {
    size: 12,
    field: (
      <GFXField
        label="header"
        name="header"
        margin="none"
        required={true}
        showError={showErrorOnBlur}
      />
    ),
  },
  {
    size: 12,
    field: (
      <GFXRadio
        label="Color"
        name="color"
        margin="none"
        required={true}
        data={[
          { label: "white", value: constants.HOME_PAGE_LIGHT_COLOR },
          { label: "black", value: constants.HOME_PAGE_DARK_COLOR },
        ]}
        showError={showErrorOnBlur}
      />
    ),
  },
  {
    size: 12,
    field: (
      <GFXField
        multiline
        label="text"
        name="text"
        margin="none"
        required={true}
        showError={showErrorOnBlur}
      />
    ),
  },
  {
    size: 12,
    field: (
      <GFXRadio
        label="Align"
        name="align"
        margin="none"
        required={true}
        data={[
          { label: "left", value: "left" },
          { label: "center", value: "center" },
          { label: "right", value: "right" },
        ]}
        showError={showErrorOnBlur}
      />
    ),
  },
];