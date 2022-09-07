import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
import useStyles from "../styles"
import React, { useEffect } from 'react';

function Page(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = "Amanda Britto"
     }, []);
    return (
        <div className={classes.root}>
            <Header classes = {classes}/>
            <Body classes = {classes} corpo = {props.corpo}/>
            <Footer classes = {classes}/>
        
        </div>
    )
}
//BODY SE ALTERA DEPENDENDO DA OPÇAO DO MENU (PASSA UM PARAMETRO PARA DIZER QUAL FOI ESCOLHIDO)
export default Page;