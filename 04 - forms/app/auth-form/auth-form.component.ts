import { Component, Output, EventEmitter, Renderer2, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: green; }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterViewInit {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('email', { static: true }) email: ElementRef;

  constructor(
    private renderer: Renderer2,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email');
    this.email.nativeElement.focus();

    // To update properly value for ViewChild, ViewChildren
    this.changeDetector.detectChanges();
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
