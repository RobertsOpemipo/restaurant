// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button 
      [class]="'btn ' + variant"
      [type]="type"
      (click)="onClick.emit($event)">
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input() label: string = 'Button';
  @Input() variant: 'btn-book' | 'btn-menu' | 'btn-secondary' = 'btn-book';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
onClick: any;
}