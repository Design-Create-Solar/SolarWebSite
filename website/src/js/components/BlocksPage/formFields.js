import React from "react";
import * as constants from "../MultiplePages/constants";
import { Field, Radio } from "../MultiplePages/GFXElems";
import { showErrorOnBlur } from "mui-rff";

export const formFields = [
  {
    size: 12,
    field: (
      <Field
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
      <Radio
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
      <Field
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
      <Radio
        label="Align"
        name="align"
        margin="none"
        required={true}
        data={[
          { label: "left", value: "left" },
          { label: "right", value: "right" },
        ]}
        showError={showErrorOnBlur}
      />
    ),
  },
];
