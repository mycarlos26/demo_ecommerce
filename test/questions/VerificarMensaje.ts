import { ModalDialog, PageElement, By, Text } from '@serenity-js/web';
import { Question } from '@serenity-js/core';

export const VerificarMensaje = {

    // 🛠 Capturar y verificar si el mensaje del diálogo coincide con el esperado
    deAlerta: (mensajeEsperado: string) =>
        Question.about(`el mensaje del alerta debe ser: "${mensajeEsperado}"`, async actor => {
            const mensajeCapturado = await ModalDialog.lastDialogMessage().answeredBy(actor);
            console.log('Mensaje de alerta capturado:', mensajeCapturado);
            return mensajeCapturado === mensajeEsperado;
        }),

    // 🛠 Verificar el estado del diálogo (aceptado)
    estadoDelDialogo: () =>
        Question.about('el estado del diálogo', async actor => {
            const estado = await ModalDialog.lastDialogState().answeredBy(actor);
            console.log('Estado del diálogo capturado:', estado);
            return estado === 'accepted';
        }),
    // 🛠 Capturar y verificar el mensaje de bienvenida en #nameofuser
    deBienvenida: (username: string) =>
        Question.about('el mensaje de bienvenida', async actor => {

            // 🛠 Capturar el texto del elemento #nameofuser
            let mensaje = await Text.of(
                PageElement.located(By.css('#nameofuser')).describedAs('el mensaje de bienvenida')
            ).answeredBy(actor);

            // 🛠 Aplicar .trim() para eliminar espacios extra
            // 🛠 Eliminar caracteres invisibles y espacios Unicode
            // 🛠 Limpiar el mensaje de espacios invisibles y aplicar .trim()
            mensaje = mensaje.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();

            const mensajeEsperado = `Welcome ${username}`;

            // 🛠 Imprimir mensajes para depuración
            console.log('📋 Mensaje capturado:', `"${mensaje}"`);
            console.log('📋 Mensaje esperado:', `"${mensajeEsperado}"`);


            // 🛠 Comparar ambos mensajes
            return mensaje === mensajeEsperado;
        })
};

