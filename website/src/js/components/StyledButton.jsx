import Button from '@material-ui/core/Button';
import * as constants from '../constants';
import { withStyles, fade } from '@material-ui/core/styles';

const StyledButton = withStyles({
	root: {
		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
		miHeight: 48,
		padding: '10px 10px 10px 10px',
		fontSize: '20px',
		fontFamily: 'Futura',
		fontWeight: 500,
		minWidth: '7em',
		//boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		'&:hover': {
			backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
			color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1)
		}
	}
})(Button);

export default StyledButton