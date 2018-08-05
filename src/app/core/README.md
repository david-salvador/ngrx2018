CoreModule

Conventional name for the NgModule loaded when the app starts.
It contains singleton services.

It must be imported only in the root AppModule.
It must never be imported  in any other NgModule.

Consider making CoreModule a pure services module with no declarables: Components, Directives or Pipes.

From Angular 6, best practice is to specify in the service(provideIn) that it should be provided in the app root.

https://angular.io/guide/singleton-services