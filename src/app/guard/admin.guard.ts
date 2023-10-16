import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.userService.getUserProfile();

    if (user && user.email === 'Admin@real.cl') {
      return true; // Permite el acceso si el correo es el deseado
    } else {
      // Redirige a una página de acceso denegado o a donde desees.
      return this.router.parseUrl('/acceso-denegado');
    }
  }
}
