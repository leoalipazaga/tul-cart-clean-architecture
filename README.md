# TulCart

This project was bootstrapped with:
- NgZorro
- Ngrx
- Rxjs
- Firebase Authentication
- Typescript
- Based on Clean Architecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project structure
- `main`: constants, generic actions (eg. `api`, `notification`, `loader`, etc) are managed from here.
- `presentation`: it holds views, controllers (could be hooks) and shared components.
- `features`: it holds features as `user` and `cart`. For each feature, we need these following folders `domain`, `usecases` and `data` (could be optional).

## Get Up

Add your firebase settings by creating a `firebase` node into `environment` constant then run `npm start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
