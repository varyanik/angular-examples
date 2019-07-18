import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {

  constructor(private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    let borderStyle = '';
    if (/[^\d]+/.test(trimmed)) {
      borderStyle = '2px solid red';
    }
    this.renderer.setStyle(input, 'border', borderStyle);
  }
}