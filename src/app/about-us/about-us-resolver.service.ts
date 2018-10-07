import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export class Framework {
  constructor(private id: number, private name: string) {}
}

export class AboutUsResolver implements Resolve<Framework> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Framework> | Promise<Framework> | Framework {
    return new Promise<Framework>(resolve => {
      setTimeout(() => {
        const framework = new Framework(200, 'Angular');
        resolve(framework);
      }, 2000);
    });
  }
}
