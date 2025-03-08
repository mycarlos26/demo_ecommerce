import { Question } from '@serenity-js/core';
import { Text, By, PageElement } from '@serenity-js/web';

export const VerificarCompraExitosa = () =>
    Question.about('el mensaje de confirmación', async actor => {
        // Usar PageElement.located para crear un selector válido
        const mensaje = await Text.of(
            PageElement.located(By.css('.sweet-alert')).describedAs('el mensaje de confirmación')
        ).answeredBy(actor);

        console.log('Mensaje de confirmación:', mensaje);
        return mensaje.includes('Thank you for your purchase!');
    });
