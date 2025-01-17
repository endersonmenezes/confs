import { Component, OnInit } from '@angular/core';

import { SubscribeFacade, TicketFacade } from '@confs/event/data-state';

import { SubscribeForm } from './forms';

@Component({
  templateUrl: './event-feature-subscribe.component.html',
  styleUrls: ['./event-feature-subscribe.component.scss'],
})
export class EventFeatureSubscribeComponent implements OnInit {
  form = new SubscribeForm();

  placeholder = {
    email: 'Digite seu email',
    acompanhe: 'Acompanhe a programação',
  };

  constructor(
    readonly subscribeFacade: SubscribeFacade,
    readonly ticketFacade: TicketFacade
  ) {}

  ngOnInit() {
    this.ticketFacade.loadAuthorizeParams();
  }

  changeFocus(input: HTMLInputElement) {
    if (input.placeholder === this.placeholder.email) {
      input.placeholder = this.placeholder.acompanhe;
    } else {
      input.placeholder = this.placeholder.email;
    }
  }

  onSubmit(input?: HTMLInputElement) {
    const { email = '' } = this.form.value;

    if (this.form.valid && email) {
      this.subscribeFacade.subscribe({ email });
    } else {
      this.form.markAllAsTouched();
      if (input) input.focus();
    }
  }
}
