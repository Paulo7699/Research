import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { UserTestService } from '../../tests-services/user-test.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPartnerLoginService implements CanActivate{
  constructor(
    private router:Router,
    private testUserService : UserTestService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    return new Observable((observer:Subscriber<boolean>)=> {
      if(this.testUserService.userTestConnected == 2) {
        observer.next();
        observer.complete();
      }
      else {
        this.router.navigate(['/login']);
      }
    }) 
  }
}
