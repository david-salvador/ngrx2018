# Ngrx2018  :blue_book:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

```typescript
// sync with Angular latest updates (do not use npm to upgrade npm)
- [x] npm install --global --production npm-windows-upgrade
- [x] npm-windows-upgrade
- [x] npx @angular/cli new ngrx2018 --style=scss --routing
- [v] cd ngrx2018



ng g c core/containers/HomePage --module app.module.ts
ng g m AppRouting --flat -m app.module.ts --spec=false --dry-run ??

// shared module
npx ng g m shared/shared --flat -m app.module.ts --spec=false --dry-run
npx ng g m shared/material -m shared/shared.module.ts --spec false --dry-run

npx ng g m shared/components/mButton -m shared/shared.module.ts --spec false --dry-run
npx ng g c shared/components/mButton -m shared/components/m-button/m-button.module.ts --dry-run

ng g m features/admin/adminModule --routing --spec=false --routing --dry-run
ng g c features/admin/containers/adminPage --module features/admin/admin.module.ts
ng g c features/admin/components/userDetail --module features/admin/admin.module.ts

// core module
ng g m core/core -m app.module.ts --flat --spec=false --dry-run
ng g s core/services/weather --flat --dry-run

ng g interface core/models/currentWeather --dry-run

npx ng add @angular/material
npm i hammerjs


//NgRx
npm i @ngrx/schematics --save-dev
a)
npm i @ngrx/{store,effects,entity,store-devtools,router-store} --save
b)
npm i @ngrx/store --save
npm i @ngrx/effects --save
npm i @ngrx/entity --save
npm i @ngrx/store-devtools --save
npm i @ngrx/router-store --save

npm i @ngrx-store-freeze --save-dev

```


# Business Processes into NgRx

1. Identify UX meaningful event (synch or asynch)
2. Define Action & ContextModuleÇ(Core, Shared, Feature | module)
3. Define State, in-memory client data tree
4. Reducers become define-able
5. Selectors become define-able
6. Effects to handle asynch/side-effects: either dispatch new actions or not.




# Technicalities

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Markdown Guide
https://guides.github.com/features/mastering-markdown/

## Material Theming

In angular.cli: deeppurple-amber.css, indigo-pink.css, pink-bluegrey.css, purple-green.css

Create your own custom themes https://material.angular.io/guide/theming.
Book: EnterCh5

`<div class="mat-display-4">Hello, Material world!</div>`

```html
Class Name    >>> Usage
--------------------------------------
display-4,
display-3,
display-2
and display-1 >>> Large, one-off headers, usually at the top
                  of the page (for example, a hero header)
headline      >>> Section heading corresponding to the <h1> tag
title         >>> Section heading corresponding to the <h2> tag
subheading-2  >>> Section heading corresponding to the <h3> tag
subheading-1  >>> Section heading corresponding to the <h4> tag
body-1        >>> Base body text
body-2        >>> Bolder body text
caption       >>> Smaller body and hint text
button        >>> Buttons and anchors
```

two applications of typography, below...
a)

```html
<mat-card-header class="mat-typography">
  <mat-card-title><h2>Current Weather</h2></mat-card-title>
</mat-card-header>
```

preferable the more specific and localized option, below
b)

```html
<mat-card-title><div class="mat-title">Current Weather</div></mat-cardtitle>
```
You can read more about Material Typography at https://material.angular.io/guide/typography

## CSS Layout

https://github.com/angular/flex-layout
https://github.com/angular/flex-layout/wiki

- [ ] Stable Release by Angular 6?

Angular Flex Layout provides a sophisticated layout API using FlexBox CSS +
mediaQuery. This module provides Angular (v4.1 and higher) developers with component
layout features using a custom Layout API, mediaQuery observables,and injected DOM
flexbox-2016 css stylings.

The Layout engine intelligently automates the process of applying appropriate FlexBox
CSS to browser view hierarchies. This automation also addresses many of the complexities
and workarounds encountered with the traditional, manual, CSS-only application of
Flexbox CSS.

- [ ] CSS Grid supersedes?

https://blog.oasisdigital.com/2017/css-grid-angular-cli-now/

___

## NgRx Process

### From Page-UiState -> Actions

### Actions -> [State-Changes|State]

### State -> Reducers (Pure)

### Selectors (Subscribers do not keep derived state)

### Effects (Impure/Async/SideEffects)


## openweathermap
- [ ] api keys at: https://home.openweathermap.org/api_keys