import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export const RegresarAlHome = () =>
    Task.where(`#actor regresa al home de la tienda`,
        Click.on(PageElement.located(By.css('a.nav-link[href="index.html"]')).describedAs('el enlace Home'))
    );
