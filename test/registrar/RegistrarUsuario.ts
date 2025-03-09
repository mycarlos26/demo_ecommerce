import { Task } from '@serenity-js/core';
import { By, Click, Enter, ModalDialog, PageElement } from '@serenity-js/web';
import { EcommercePage } from '../pages';

export const RegistrarUsuario = {
    conCredenciales: (username: string, password: string) =>
        Task.where(`#actor registra un usuario llamado ${username}`,
            Click.on(EcommercePage.signUpLink()),
            Enter.theValue(username).into(EcommercePage.signUpUsernameField(username)),
            Enter.theValue(password).into(EcommercePage.signUpPasswordField(password)),
            ModalDialog.acceptNext(),  // Aceptar el diálogo automáticamente
            Click.on(EcommercePage.signUpButton())  // Quitar la coma extra aquí
        )
};
