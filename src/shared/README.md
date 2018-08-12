The shared module is to be imported in feature modules, loaded eagerly or lazily.

It consists entirely of <declarables>, exported most of them:...
- Components
- Directives
- Pipes
...of which the Angular Engine needs to know, via being declared explicitly somewhere, only once, at least once.

It must not have providers, nor do its imported or re-exported must have providers.

It exports widget modules:
- CommonModule
- FormsModule
- other NgModules with reused, centralized, UI components

