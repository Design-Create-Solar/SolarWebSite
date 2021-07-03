import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import * as constants from './constants';
import { fade } from '@material-ui/core/styles';
import { UserContext } from '../Login/UserContext';

const navInfo = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Programs',
		link: '/programs',
	},
	{
		name: 'Sponsors',
		link: '/sponsors',
	},
	{
		name: 'Team',
		link: '/team',
	},
	{
		name: 'Join',
		link: '/join',
	},
];

const editRoutes = [
  {
    name: 'Blocks',
    link: '/blocks',
  },
  // {
  //   name: 'Members',
  //   link: '/members',
  // },
];

const useStyles = makeStyles({
  paper: {
    backgroundColor: constants.HOME_PAGE_DARK_COLOR,
    boxShadow: `-1px 1px 5px 1px ${constants.HOME_PAGE_YELLOW}`,
  },
  listItemRoot: {
    color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
    '&:hover': {
			backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
		},
    '&:hover .MuiListItemText-root': {
      color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1),
    },
  },
  textRoot: {
    fontFamily: 'Futura',
    fontWeight: 500,
    fontSize: '20px',
  },
  divider: {
    backgroundColor: constants.HOME_PAGE_LIGHT_COLOR,
    height: 1
  },
});

export default function SideMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(true);

  const toggleDrawer = (state) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return;

    setOpen(state);
  };

  const history = useHistory();
	const { loggedIn, setLoggedIn } = useContext(UserContext);

	useEffect(() => {
    fetch(`${constants.BACK_BASE_URL}/auth/verify`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 200) setLoggedIn(true);
			else setLoggedIn(false);
    })
    .catch((err) => console.error(err))
  }, [loggedIn, setLoggedIn]);

	const setRoute = (str) => { history.push({ pathname: str }) }
	const clearAuth = () => {
		fetch(`${constants.BACK_BASE_URL}/auth/logout`, {
			'method': 'POST',
			credentials: 'include',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
      },
			body: JSON.stringify({ page: window.location.pathname })
		})
		.then((res) => {
			if (res.status === 301) history.push('/');
		});
		setLoggedIn(false);
	}
  const handleEdit = () => { setOpenEdit(!openEdit); };

  return (
    <div
      style={{
        backgroundColor: constants.HOME_PAGE_DARK_COLOR,
        color: constants.HOME_PAGE_LIGHT_COLOR,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '6rem',
        paddingRight: '2rem',
      }}
    >
      <React.Fragment key='right'>
        <Menu
          fontSize='large'
          color='inherit'
          onClick={toggleDrawer(true)}
        />
        <Drawer
          anchor='right'
          open={open}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.paper }}
        >
          <div
            style={{ width: 250 }}
            role='presentation'
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navInfo.map((info) => (
                <ListItem
                  button
                  key={info.name}
                  classes={{ root: classes.listItemRoot }}
                >
                  <ListItemText
                    primary={info.name}
                    classes={{ primary: classes.textRoot }}
                    onClick={() => setRoute(info.link)}
                  />
                </ListItem>
              ))}
            </List>
            <Divider light={true} classes={{ root: classes.divider }} />
            <List>
              <constants.Desktop>
                {loggedIn ? (
                  <>
                    <ListItem
                      button
                      onClick={handleEdit}
                      classes={{ root: classes.listItemRoot }}
                    >
                      <ListItemText primary='Edit' classes={{ primary: classes.textRoot }} />
                      {openEdit ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openEdit} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        {editRoutes.map((info) => (
                          <ListItem
                            button
                            key={info.name}
                            className={classes.listItemRoot}
                            style={{ paddingLeft: '2rem' }}
                          >
                            <ListItemText
                              primary={info.name}
                              classes={{ primary: classes.textRoot }}
                              onClick={() => setRoute('/blocks')}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                    <ListItem
                      button
                      key='Logout'
                      classes={{ root: classes.listItemRoot }}
                    >
                      <ListItemText
                        primary='Logout'
                        classes={{ primary: classes.textRoot }}
                        onClick={() => clearAuth()}
                      />
                    </ListItem>
                  </>
                ) : (
                  <ListItem
                    button
                    key='Login'
                    classes={{ root: classes.listItemRoot }}
                  >
                    <ListItemText
                      primary='Login'
                      classes={{ primary: classes.textRoot }}
                      onClick={() => setRoute('/login')}
                    />
                  </ListItem>
                )}
              </constants.Desktop>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
