import { Client } from '@microsoft/microsoft-graph-client';
import { controllers } from 'chart.js';
import { UserAgentApplication } from 'msal';
import configs from '../configs';
import { UserService } from './';

export const AADlogin = () => {
    const { microsoft } = configs;
    const userAgentApplication = new UserAgentApplication({
        auth: microsoft.auth,
        cache: microsoft.cache,
    });

    const accessTokenRequest = { scopes: microsoft.scopes };

    return new Promise((resolve, reject) => {
        if (userAgentApplication.getAccount()) {
            userAgentApplication
                .acquireTokenSilent(accessTokenRequest)
                .then(async (response) => {
                    const { accessToken } = response;
                    try {
                        const data = await UserService.login();
                    } catch (error) {
                        console.log(data);
                    }


                })
                .catch((err) => {
                    if (err.name === 'InteractionRequiredAuthError') {
                        return userAgentApplication
                            .acquireTokenPopup(accessTokenRequest)
                            .then(async (response) => {
                                try {
                                    const data = await UserService.login();
                                } catch (error) {
                                    console.log(data);
                                }
                                resolve(response);
                            });
                    }
                });
        } else {
            userAgentApplication
                .loginPopup({ scopes: microsoft.scopes, prompt: 'select_account' })
                .then((response) => {
                    userAgentApplication
                        .acquireTokenSilent(accessTokenRequest)
                        .then(async (response) => {
                            const { accessToken } = response;
                            try {
                                const data = await UserService.login();
                            } catch (error) {
                                console.log(data);
                            }
                            resolve(response);

                        })
                        .catch((err) => reject(err));
                })
                .catch((err) => reject(err));
        }
    });
};
