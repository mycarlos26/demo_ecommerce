import { PageElement, By, PageElements } from '@serenity-js/web';

export class EcommercePage {
    static homeLink = () =>
        PageElement.located(By.css('a[href="index.html"]')).describedAs('el enlace Home');

    static nameField = () =>
        PageElement.located(By.id('name')).describedAs('el campo de nombre');

    static countryField = () =>
        PageElement.located(By.id('country')).describedAs('el campo de país');

    static cityField = () =>
        PageElement.located(By.id('city')).describedAs('el campo de ciudad');

    static cardField = () =>
        PageElement.located(By.id('card')).describedAs('el campo de tarjeta');

    static monthField = () =>
        PageElement.located(By.id('month')).describedAs('el campo de mes');

    static yearField = () =>
        PageElement.located(By.id('year')).describedAs('el campo de año');

    static purchaseButton = () =>
        PageElement.located(By.css('button[onclick="purchaseOrder()"]')).describedAs('el botón de compra');

    static addToCartButton = () =>
        PageElement.located(By.css('a[onclick^="addToCart"]')).describedAs('el botón agregar al carrito');

    static cartLink = () =>
        PageElement.located(By.css('#cartur')).describedAs('el enlace carrito');

    static placeOrderButton = () =>
        PageElement.located(By.css('button[data-target="#orderModal"]')).describedAs('el botón de ordenar');

    static productCategory = (category: string) =>
        PageElement.located(By.css(`a:has-text("${category}")`)).describedAs(`la categoría ${category}`);

    static productItem = (product: string) =>
        PageElement.located(By.css(`a:has-text("${product}")`)).describedAs(`el producto ${product}`);
    
    static loginUsernameField = (loginUsernameField:string) =>
        PageElement.located(By.id('loginusername')).describedAs(`el campo de usuario ${loginUsernameField}`);
    
    static loginPasswordField = (loginPasswordField:string) =>
        PageElement.located(By.id('loginpassword')).describedAs(`el campo de contraseña ${loginPasswordField}`);
    
    static loginButton = () =>
        PageElement.located(By.css('button[onclick="logIn()"]')).describedAs('el botón de inicio de sesión');
    
    static signUpUsernameField = (signUpUsernameField:string) =>
        PageElement.located(By.id('sign-username')).describedAs(`el campo de usuario ${signUpUsernameField}`);
    
    static signUpPasswordField = (signUpPasswordField:string) =>
        PageElement.located(By.id('sign-password')).describedAs(`el campo de contraseña ${signUpPasswordField}`);
    
    static signUpButton = () =>
        PageElement.located(By.css('button[onclick="register()"]')).describedAs('el botón de registro');
    
    static signUpLink = () =>
        PageElement.located(By.id('signin2')).describedAs('el enlace de registro');
    
    static loginLink = () =>
        PageElement.located(By.css('login2')).describedAs('el enlace de inicio de sesión');

}
