import * as React from 'react'
import * as Msal from "msal";

import { basicProps } from '../../Services/basicProps';

export class RedirectPage extends React.Component<basicProps>{
    constructor(props: basicProps) {
        super(props);
        this.login = this.login.bind(this);
    }

    public componentDidMount() {
        var loginThings = this.props.loginManager;

        let sucesss = (response: Msal.AuthResponse) => {
            console.log('success');
        }
        let error = (authErr: Msal.AuthError, accountState: string) => {
            console.log(authErr);
            console.log(accountState);
        }
        loginThings.handleRedirectCallback(sucesss, error)
        // once a redirect has occured, we have hit our returnUrl (/app) and then we are returned to /redirect.
        // so we should have an account available.
        if(loginThings.getAccount()){
           (document.getElementById("loggedIn") as HTMLElement).innerHTML = loginThings.getAccount().userName;
        }
    }
    private login(){
        this.props.loginManager.loginRedirect();
    }
    public render() {
        return (<> <h1>Redirect page</h1>
            <div>Redirect action->Authority->Return Url->Redirect</div>
            <div>
                <button type="button" onClickCapture={this.login}>Login</button>
            </div>
            <div id="loggedIn"></div>
        </>);
    }
}
