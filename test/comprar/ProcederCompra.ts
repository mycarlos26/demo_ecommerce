import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { EcommercePage } from '../pages';

export const ProcederCompra = {
    conFormulario: () =>
        Task.where(`#actor procede a la compra y completa el formulario`,
            Click.on(EcommercePage.cartLink()),
            Click.on(EcommercePage.placeOrderButton()),
            Enter.theValue('Test User').into(EcommercePage.nameField()),
            Enter.theValue('Test Country').into(EcommercePage.countryField()),
            Enter.theValue('Test City').into(EcommercePage.cityField()),
            Enter.theValue('1234 5678 9012 3456').into(EcommercePage.cardField()),
            Enter.theValue('12').into(EcommercePage.monthField()),
            Enter.theValue('2025').into(EcommercePage.yearField()),
            Click.on(EcommercePage.purchaseButton())
        )
};
