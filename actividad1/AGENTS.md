# AGENTS.md - Development Guidelines for myApp

## Project Overview

This is an **Ionic/Angular 20** mobile application built with standalone components. The project uses:

- **Framework**: Angular 20 with standalone components
- **UI Library**: Ionic 8 (@ionic/angular)
- **Testing Framework**: Karma + Jasmine
- **Linting**: ESLint with @angular-eslint
- **Build Tool**: Angular CLI
- **Package Manager**: Bun

## Commands

### Development

- **Start dev server**: `bun run start`
- **Watch mode build**: `bun run watch`
- **Build production**: `bun run build`

### Code Quality

- **Lint code**: `bun run lint`
- **Run all tests**: `bun run test`
- **Run single test file**: `bun run test -- --include="**/component-name.spec.ts"`

### Testing

To run a specific test file, use the `--include` pattern:

```bash
bun run test -- --include="**/app.component.spec.ts"
```

To run tests in watch mode (default):

```bash
bun run test
```

To run tests once and exit:

```bash
bun run test -- --watch=false
```

### Angular CLI

- **Generate component**: `bun run ng generate component component-name`
- **Generate page**: `bun run ng generate page page-name`
- **Generate service**: `bun run ng generate service service-name`

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode**: Enabled (`strict: true`)
- **Type checking**: All strict compiler options enabled
- **Target**: ES2022
- **Module**: ES2020
- **Libraries**: ES2018 + DOM

### Component Architecture

- **Standalone components**: All components use standalone architecture
- **Imports array**: Explicitly import all dependencies in `@Component` decorator
- **No NgModules**: Avoid traditional Angular modules

### Naming Conventions

#### Files and Classes

- **Components**: PascalCase with suffix `Page` or `Component`
  - `Tab1Page`, `ExploreContainerComponent`
- **Files**: kebab-case with appropriate suffix
  - `tab1.page.ts`, `explore-container.component.ts`
- **Services**: PascalCase with suffix `Service`
  - `DataService`, `AuthService`

#### Selectors

- **Components**: kebab-case with `app` prefix
  - `<app-tab1>`, `<app-explore-container>`
- **Directives**: camelCase with `app` prefix
  - `appHighlight`, `appDebounceClick`

### Import Organization

- **Angular imports**: Import from `@angular/core` first
- **Ionic imports**: Import from `@ionic/angular/standalone`
- **Third-party libraries**: Alphabetical order
- **Local imports**: Relative paths, grouped by feature

Example:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonButton, IonCard, IonContent } from '@ionic/angular/standalone';

import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { UserModel } from '../../models/user.model';
```

### Template and Styling

- **External templates**: Use `templateUrl` for component templates
- **External styles**: Use `styleUrls` array for component styles
- **SCSS**: Default style preprocessor
- **Style isolation**: Component styles are scoped by default

### Error Handling

- **Use try-catch**: For async operations and external API calls
- **Angular ErrorHandler**: Implement global error handling for uncaught errors
- **Observable errors**: Handle errors in RxJS streams with `catchError`
- **User feedback**: Provide meaningful error messages to users

Example error handling in services:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/api/data').pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch data'));
      })
    );
  }
}
```

### Testing Patterns

#### Unit Tests

- **Framework**: Jasmine
- **Test runner**: Karma
- **File naming**: `component.spec.ts`
- **Describe blocks**: Group related tests
- **It blocks**: Single test cases

Example component test:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonContent } from '@ionic/angular/standalone';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1Page, IonContent]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

#### Async Testing

- **Use fakeAsync**: For testing async operations
- **Use waitForAsync**: For component compilation
- **Mock dependencies**: Use spies and mocks for external dependencies

### Performance Best Practices

- **OnPush change detection**: Use where appropriate
- **Lazy loading**: Implement route-based code splitting
- **Bundle analysis**: Monitor bundle sizes (2MB warning, 5MB error)
- **Tree shaking**: Ensure unused code is eliminated

### Security Guidelines

- **Input validation**: Validate all user inputs
- **XSS prevention**: Use Angular's built-in sanitization
- **HTTPS**: Always use HTTPS in production
- **Sensitive data**: Never log sensitive information
- **Environment variables**: Use environment files for configuration

### File Organization

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── app.routes.ts             # Application routes
│   ├── features/                 # Feature modules
│   │   ├── tabs/                 # Tab navigation
│   │   ├── tab1/                 # Feature: Tab 1
│   │   └── tab2/                 # Feature: Tab 2
│   ├── shared/                   # Shared components/services
│   │   ├── components/           # Reusable components
│   │   └── services/             # Shared services
│   └── core/                     # Core functionality
├── assets/                       # Static assets
├── environments/                 # Environment configs
└── theme/                        # Global styles and themes
```

### ESLint Configuration

The project uses `@angular-eslint` with the following key rules:

- **Component class suffix**: Must end with `Page` or `Component`
- **Component selector**: Must use `app` prefix and kebab-case
- **Directive selector**: Must use `app` prefix and camelCase
- **Template accessibility**: Enforce accessibility best practices

### Continuous Integration

- **Build validation**: Run `bun run lint && bun run test && bun run build`
- **Code coverage**: Generate coverage reports with Karma
- **Bundle size monitoring**: Check against budget limits

Remember to run `bun run lint` before committing and ensure all tests pass with `bun run test`.

