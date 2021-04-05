import { Client } from '@microsoft/microsoft-graph-client';
import { controllers } from 'chart.js';
import { UserAgentApplication } from 'msal';
import configs from '../configs';
import { UserService } from './';

const { microsoft } = configs;
const userAgentApplication = new UserAgentApplication({
    auth: microsoft.auth,
    cache: microsoft.cache,
});

export const AADlogin = () => {

    const accessTokenRequest = { scopes: microsoft.scopes };

    return new Promise((resolve, reject) => {
        if (userAgentApplication.getAccount()) {
            userAgentApplication
                .acquireTokenSilent(accessTokenRequest)
                .then(async (response) => {
                    const { accessToken } = response;
                    try {
                        const data = await UserService.login(accessToken);
                        resolve(data);
                    } catch (error) {
                        reject(error);
                    }


                })
                .catch((err) => {
                    if (err.name === 'InteractionRequiredAuthError') {
                        return userAgentApplication
                            .acquireTokenPopup(accessTokenRequest)
                            .then(async (response) => {
                                const { accessToken } = response;

                                try {
                                    const data = await UserService.login(accessToken);
                                    resolve(data);
                                } catch (error) {
                                    reject(error);
                                }
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
                                const data = await UserService.login(accessToken);
                                resolve(data);
                            } catch (error) {
                                reject(error);
                            }
                        })
                        .catch((err) => reject(err));
                })
                .catch((err) => reject(err));
        }
    });
};

export const AADLogout = () => {
    userAgentApplication.logout();
}