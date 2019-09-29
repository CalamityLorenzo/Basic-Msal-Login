import * as React from 'react'

import { basicProps } from '../../Services/basicProps';

export class AppPage extends React.Component<basicProps>{
    constructor(props: basicProps) {
        super(props);
        this.verifyLogin = this.verifyLogin.bind(this);
    }
    public componentDidMount() {
        this.verifyLogin();
        var message:string[] = [];
        message.push("Redirect login attempted : " + window.sessionStorage.getItem("pclNumber") || "0");
        message.push("Account " + this.props.loginManager.getAccount() ? this.props.loginManager.getAccount().userName : "Nope" );
        (document.getElementById("loggedIn") as HTMLElement).innerHTML = message.join("<br />");
    }
    private verifyLogin() {
        if (this.props.loginManager.isCallback(window.location.hash)) {
            var entry = window.sessionStorage.getItem("pclNumber") || "0";
            window.sessionStorage.setItem("pclNumber", (parseInt(entry) + 1).toString());
            
        }
    }
    public render() {
        return (<><h1>MyAwesome - Application</h1>
            <div>Are we logged in?</div>
            <p></p>
            <div id="loggedIn"></div></>);
    }
}