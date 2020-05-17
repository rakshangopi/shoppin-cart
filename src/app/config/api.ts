import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http://localhost:4200' : 'http://localhost:4200'
export const productsUrl = baseUrl + '/assets/products.json';
export const cartUrl = baseUrl + '/cart';
