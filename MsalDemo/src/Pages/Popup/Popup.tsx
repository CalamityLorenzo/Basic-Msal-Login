import * as React from 'react'

import { basicProps } from '../../Services/basicProps';

export class PopUpPages extends React.Component<basicProps>{
    constructor(props: basicProps) {
        super(props);
        this.login = this.login.bind(this);
    }

    private async login() {
        try {
            var userApp = this.props.loginManager;
            var didIt = await userApp.loginPopup();
            // shhh I know what I'm doing ;)
            (document.getElementById("loggedIn") as HTMLDivElement).innerHTML = didIt.account.userName;
        }
        catch (ex) {
            console.log(ex);
        }
    }
    public render() {
        return (<><h1>Pop-Up sign in.</h1>
            <div>Pop up -> Authority -> returnUrl -> window closed</div>
            <div>
                <button type="button" onClickCapture={this.login} >Login</button>
            </div>
            <div id="loggedIn">
            </div>
        </>);
    }
}