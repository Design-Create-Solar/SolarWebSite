import React from 'react';
import MediaQuery from 'react-responsive'

export const HOME_PAGE_DARK_COLOR = "#3a3a3c";
//export const HOME_PAGE_DARK_COLOR = "#1d2951"; the dark blue
//export const HOME_PAGE_LIGHT_COLOR = "#e8e8e8";
export const HOME_PAGE_LIGHT_COLOR = "white";
export const HOME_PAGE_YELLOW = "#FFB81C"
export const HOME_PAGE_LIGHT_TEXT_COLOR = "#e8e8e8";
//export const HOME_PAGE_DARK_TEXT_COLOR = "#1d2951"; the dark blue
export const HOME_PAGE_DARK_TEXT_COLOR = "#3a3a3c";

export const HOME_PAGE_TYPING_TEXT_COLOR = "#FFB81C";

export const MEMBERS_PAGE_YELLOW = "gray";
//export const MEMBERS_PAGE_YELLOW = "#ffee85";
export const MEMBERS_PAGE_LIGHT_GRAY = "#888888";

export const Desktop = (props) => <MediaQuery {...props} minDeviceWidth={1224} />;
// export const Tablet = (props) => <MediaQuery {...props} minDeviceWidth={768} maxDeviceWidth={1224} />;
export const Mobile = (props) => <MediaQuery {...props} maxDeviceWidth={767} />;
export const Default = (props) => <MediaQuery {...props} minDeviceWidth={767} maxDeviceWidth={1224} />;
