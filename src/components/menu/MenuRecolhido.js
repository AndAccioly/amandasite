import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import LinkMenu from './LinkMenu';



function MenuRecolhido(props) {
    const classes = props.classes;
    return (
        <PopupState variant="popover" popupId="menu-recolhido">
          {(popupState) => (
            <React.Fragment>
              <MenuIcon {...bindTrigger(popupState)} class={classes.menuIcon}/>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}><LinkMenu classes={classes} texto={"Início"} url={"/home"}/></MenuItem>
                <MenuItem onClick={popupState.close}><LinkMenu classes={classes} texto={"Sobre mim"} url={"/sobre-mim"}/></MenuItem>
                <MenuItem onClick={popupState.close}><LinkMenu classes={classes} texto={"Artigos"} url={"/artigos"}/></MenuItem>
                <MenuItem onClick={popupState.close}><LinkMenu classes={classes} texto={"Agendamento"} url={"/agendamento"}/></MenuItem>            
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      );
}

export default MenuRecolhido;