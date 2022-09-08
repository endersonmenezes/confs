import { Component, Inject, OnInit } from '@angular/core';

import { ProjectsConfig } from '@confs/shared/project/api-interfaces';
import { EventFacade } from '@confs/event/data-state';

@Component({
  template: `
    <ng-container *ngIf="eventFacade.speakers$ | async as speakers">
      <header>
        <h2>{{ speakers.project?.name }}</h2>
        <p>{{ speakers.project?.body }}</p>
      </header>
      <section>
        <confs-project-column-card
          *ngFor="let card of speakers.cards"
          [card]="card"
        ></confs-project-column-card>
      </section>
    </ng-container>
    <figure class="loader" *ngIf="eventFacade.loading$ | async">
      <object data="/assets/loading.svg"></object>
      <caption> Carregando... </caption>
    </figure>
  `,
  styleUrls: ['./event-feature-speakers.component.scss'],
})
export class EventFeatureSpeakersComponent implements OnInit {
  constructor(
    readonly eventFacade: EventFacade,
    @Inject('github.projects')
    readonly projects: ProjectsConfig
  ) {}

  ngOnInit() {
    const { speakers } = this.projects;
    this.eventFacade.loadProject(speakers, 'speakers');
  }
}
