import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { ComprarProducto } from '../../test/comprar/ComprarProducto';
import { ProcederCompra } from '../../test/comprar/ProcederCompra';
import { VerificarCompraExitosa } from '../../test/comprar/VerificarCompraExitosa';
import { Navigate } from '@serenity-js/web';
import { Task, Wait, Duration,Log} from '@serenity-js/core';

Given('{actor} abre la tienda virtual', async actor =>
    actor.attemptsTo(
        Navigate.to('https://www.demoblaze.com/'),
        Log.the(`${actor.name} espera un segundo`),   
        Wait.for(Duration.ofSeconds(1))  // Esperar 1 segundo
    ),

);

When('{actor} agrega un teléfono {string} al carrito', async (actor, producto: string) =>
    actor.attemptsTo(
        ComprarProducto.enCategoria('Phones', producto),
        Log.the(`${actor.name} espera un segundo`), 
        Wait.for(Duration.ofSeconds(1))  // Esperar 1 segundo
    )
);

When('{actor} procede a realizar la compra', async actor =>
    actor.attemptsTo(
        ProcederCompra.conFormulario(),
        Log.the(`${actor.name} espera un segundo`), 
        Wait.for(Duration.ofSeconds(1))  // Esperar 1 segundo
    )
);

Then('{actor} debería ver un mensaje de confirmación de compra exitosa', async actor =>
    actor.attemptsTo(
        Ensure.that(VerificarCompraExitosa(), equals(true)),
        Log.the(`${actor.name} espera un segundo`), 
        Wait.for(Duration.ofSeconds(1))  // Esperar 1 segundo
    )
);
