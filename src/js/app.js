import * as webpFunction from './modules/functions.js';
import { menuBurger } from './modules/burger.js';

webpFunction.isWebp();

menuBurger({
    menuIconSelector: '.menu__icon',
    sideMenuSelector: '.sidebar',
});