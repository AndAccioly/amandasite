import * as React from 'react';
import LinkMenu from './LinkMenu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#baac50',
}));

function MenuRecolhido(props) {
    const classes = props.classes;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        <ColorButton
          id="button-menu-recolhido"
          aria-controls={open ? 'button-menu-recolhido' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
        >
          <MenuIcon className={classes.menuIconStyle}/>
        </ColorButton>
        <StyledMenu
          id="menu-recolhido"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <LinkMenu classes={classes} texto={"Início"} url={"/home"}/>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <LinkMenu classes={classes} texto={"Sobre mim"} url={"/sobre-mim"}/>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <LinkMenu classes={classes} texto={"Artigos"} url={"/artigos"}/>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <LinkMenu classes={classes} texto={"Agendamento"} url={"/agendamento"}/>
          </MenuItem>
        </StyledMenu>  
      </div>
      );
}

export default MenuRecolhido;