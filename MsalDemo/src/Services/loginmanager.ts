import * as Msal from 'msal';

export class loginManager {
    public static SetUp(returnUri?:string): Msal.UserAgentApplication {

        var config = this.MsalConfig(returnUri);
        var msal = new Msal.UserAgentApplication(config);
        return msal;
    }

    private static MsalConfig(returnUrl?:string): Msal.Configuration {
        return {
            auth: {
                clientId: "",
                authority:"https://login.microsoftonline.com/organizations",
                redirectUri: returnUrl || ""
            },
            cache:{
                storeAuthStateInCookie:false,
                cacheLocation:"sessionStorage"
            }
        }
    }
}
