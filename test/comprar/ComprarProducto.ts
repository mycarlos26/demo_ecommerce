import { Task, Wait, Duration } from '@serenity-js/core';
import { Click, By, PageElement, ExecuteScript, isVisible } from '@serenity-js/web';
import { EcommercePage } from '../pages';

export const ComprarProducto = {
    enCategoria: (categoria: string, producto: string) =>
        Task.where(`#actor agrega ${producto} de la categoría ${categoria} al carrito`,
            Click.on(PageElement.located(By.css(`a:has-text("${categoria}")`)).describedAs(`la categoría ${categoria}`)),
            Click.on(PageElement.located(By.css(`a:has-text("${producto}")`)).describedAs(`el producto ${producto}`)),
            Click.on(EcommercePage.addToCartButton()),

            // Hacer un sleep de 2 segundos para asegurar que el DOM esté listo
            Wait.for(Duration.ofSeconds(2)),

            Click.on(PageElement.located(By.css('a.nav-link[href="index.html"]')).describedAs('el botón Home')),

            Wait.for(Duration.ofSeconds(1)),

        )
};
