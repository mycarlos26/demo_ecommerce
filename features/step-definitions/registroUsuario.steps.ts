import { Given, When, Then , Before} from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorInTheSpotlight, Log, Wait, Duration } from '@serenity-js/core';
import { RegistrarUsuario, } from '../../test/registrar';
import { VerificarMensaje } from '../../test/questions/VerificarMensaje';

// 🛠 Variable global para almacenar el timestamp
let timestamp: string;

// 🛠 Generar timestamp único antes de cada escenario
Before(() => {
    timestamp = Date.now().toString();
});

// 🛠 Reemplazar {timestamp} en los pasos con el valor generado
function reemplazarTimestamp(texto: string): string {
    return texto.replace(/{timestamp}/g, timestamp);
}

// 🛠 Registro exitoso de un usuario no registrado
When('{actor} intenta registrar un usuario llamado {string} con contraseña {string}', async (actor, username: string, password: string) =>
    actor.attemptsTo(
        RegistrarUsuario.conCredenciales(reemplazarTimestamp(username), password)
    )
);

Then('{actor} debería ver un mensaje de registro exitoso', async actor =>
    actor.attemptsTo(
        Ensure.that(VerificarMensaje.deAlerta('Sign up successful.'), equals(true)),
        Log.the(`${actor.name} espera un segundo`),
        Wait.for(Duration.ofSeconds(1))
    )
);

// 🛠 Registro fallido - Usuario ya existente
When('{actor} intenta registrar nuevamente el usuario llamado {string}', async (actor, username: string) =>
    actor.attemptsTo(
        RegistrarUsuario.conCredenciales(username, 'TestPassword123')
    )
);

Then('{actor} debería ver un mensaje indicando que el usuario ya existe', async actor =>
    actor.attemptsTo(
        Ensure.that(VerificarMensaje.deAlerta('This user already exist.'), equals(true)),
        Log.the(`${actor.name} espera un segundo`),
        Wait.for(Duration.ofSeconds(1))
    )
);
