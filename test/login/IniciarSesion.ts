import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { EcommercePage } from '../pages';

export const IniciarSesion = {
    conCredenciales: (username: string, password: string) =>
        Task.where(`#actor inicia sesión como ${username}`,
            Click.on(EcommercePage.loginLink()),
            Enter.theValue(username).into(EcommercePage.loginUsernameField(username)),
            Enter.theValue(password).into(EcommercePage.loginPasswordField(password)),
            Click.on(EcommercePage.loginButton())
        )
};
