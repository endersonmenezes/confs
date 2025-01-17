import { RouterModule } from '@angular/router';

import { EventFeatureSubscribeComponent } from './event-feature-subscribe.component';
import { OAuthResolver } from './resolvers';
import { UserGuard } from './guards';

export const EventFeatureSubscribeRouting = RouterModule.forChild([
  {
    path: '',
    component: EventFeatureSubscribeComponent,
    resolve: {
      githubOAuthCode: OAuthResolver,
    },
    canActivate: [UserGuard],
  },
]);
