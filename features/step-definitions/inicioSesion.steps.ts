import { When, Then,Before } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorInTheSpotlight, Log, Wait, Duration } from '@serenity-js/core';
import { IniciarSesion, RegresarAlHome} from '../../test/login';
import { VerificarMensaje } from '../../test/questions/VerificarMensaje';



// 🛠 Inicio de sesión exitoso
When('{actor} inicia sesión con usuario {string} y contraseña {string}', async (actor, username: string, password: string) =>
    actor.attemptsTo(
        IniciarSesion.conCredenciales(username, password)
    )
);
Then('{actor} regresa al home de la tienda virtual', async (actor) => {
    await actor.attemptsTo(
        RegresarAlHome(),
        Log.the(`${actor.name} espera un segundo`),
        Wait.for(Duration.ofSeconds(1))
    );
});
Then('{actor} debería ver el mensaje {string}', async (actor, username: string) =>
    actor.attemptsTo(
        Wait.for(Duration.ofSeconds(2)),
        Ensure.that(VerificarMensaje.deBienvenida(username), equals(true)),
        Log.the(`${actor.name} espera un segundo`),
     
    )
);

// 🛠 Inicio de sesión fallido - Contraseña incorrecta
When('{actor} intenta iniciar sesión con usuario {string} y contraseña {string}', async (actor, username: string, password: string) =>
    actor.attemptsTo(
        IniciarSesion.conCredenciales(username, password)
    )
);

Then('{actor} debería ver un mensaje de error por contraseña incorrecta', async actor =>
    actor.attemptsTo(
        Ensure.that(VerificarMensaje.deAlerta('Wrong password.'), equals(true)),
        Log.the(`${actor.name} espera un segundo`),
        Wait.for(Duration.ofSeconds(1))
    )
);
