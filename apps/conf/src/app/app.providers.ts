import { Provider } from '@angular/core';

import { environment } from '../environments/environment';

import { GithubOAuthOptions } from '@confs/auth/api-interfaces';
import { OAuthService } from '@confs/auth/data-access';
import { AuthFacade } from '@confs/auth/data-state';


export const APP_PROVIDERS: Provider[] = [
  {
    provide: 'github.oauth.options',
    useValue: environment['github.oauth.options'],
  },
  {
    provide: OAuthService,
    useFactory: (options: GithubOAuthOptions) =>
      new OAuthService(options),
    deps: ['github.oauth.options'],
  },
  {
    provide: AuthFacade,
    useFactory: (authService: OAuthService) =>
      new AuthFacade(authService),
    deps: [OAuthService],
  },
];