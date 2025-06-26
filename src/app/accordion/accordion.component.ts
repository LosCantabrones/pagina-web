import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
    trigger('rotateArrow', [
      state('closed', style({ transform: 'rotate(0deg)' })),
      state('open', style({ transform: 'rotate(90deg)' })),
      transition('closed <=> open', [animate('300ms ease')]),
    ]),
  ],
})
export class AccordionComponent {
  @Input() title = 'Título';
  isActive = signal(false);

  toggle() {
    console.log('Toggled!');
    this.isActive.update(state => !state);
  }
}
