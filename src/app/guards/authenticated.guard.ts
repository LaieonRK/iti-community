import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationStore } from 'src/modules/authentication/authentication.store';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authStore: AuthenticationStore, private router: Router, private userService: UserService) {

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if (this.authStore.isAuthenticated) {
      await this.userService.fetchInfo()
      return true;
    }
    this.router.navigate(["/splash/login"]);
    return false;
  }
}
