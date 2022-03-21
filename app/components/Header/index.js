import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HeaderLink from './HeaderLink';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';

import messages from './messages';
import { Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HomeSharp } from '@material-ui/icons';
const pages =[{ path: '/', name: 'Home',icon:<HomeSharp  style={{ color: '#fff' }} fontSize='large'/> }
];

const data = [{
  labelAR: 'اسم الموظف',
  labelEN: 'Employee Name',
  value: 'Administrator'
},
{
  labelAR: 'القسم',
  labelEN: 'Department',
  value: ''

},
{
  labelAR: 'الوظيفة ',
  labelEN: 'Designation ',
  value: ' '

},
{
  labelAR: 'مدير الموظف ',
  labelEN: 'Reporting Manager',
  value: ''

},
{
  labelAR: 'المكان',
  labelEN: 'Location',
  value: ' '

},
{
  labelAR: ' رقم الاتصال',
  labelEN: 'Contact number',
  value: ''

},
{
  labelAR: 'البريد الاكتروني',
  labelEN: 'Email Id',
  value: ''

},
{
  labelAR: 'التاريخ',
  labelEN: 'Date',
  value: ''

}
]
const listItems = data.map((item) =>
  <div dir='rtl' style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
    <label>
      {item['labelAR']}:
    </label>
    {'   '}
    <label>{item['value']}</label>

    <label>{item['labelEN']}</label>
  </div>
);


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  style={{backgroundColor:'#01579b'}}>
          <Toolbar>
           

            <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                
                  key={page.name}
                  style={{alignItems:'center',display:'flex',justifyContent:'center'}}
                  sx={{ my: 2, mx: 2, color: 'white', flex: 1, }}
                >
                  {page.icon}
                  <Link to={page.path} style={{
                    whiteSpace: 'nowrap',
                    textAlign: 'justify',
                    color: '#fff',
                    textDecoration: 'none',
                  }}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>

         
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
             
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      {listItems}
<Divider/>
    </div >

  );
}
