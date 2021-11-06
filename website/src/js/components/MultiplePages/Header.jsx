import React from 'react'
import StyledButton from './StyledButton';

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    button: {
		fontSize: '1rem',
    },
  }));


const Header = ({ arr, onRoute }) => {

    const css = useStyles();

    return (
        <>
            {arr.map((obj, idx) => {
                return (
                    <StyledButton
                        key={idx}
                        style={{ order: idx + 1 }}
                        className={css.button}
                        onClick={() => onRoute(obj.link)}
                    >
                        {obj.name}
                    </StyledButton>
                );
            })}
        </>
    )
}

export default Header;
