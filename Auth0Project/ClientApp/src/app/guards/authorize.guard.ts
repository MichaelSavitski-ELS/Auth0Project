import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
    private isLoggedIn = false;

    constructor(public auth: AuthService) {
        this.auth.isAuthenticated$.subscribe(authenticated => {
            this.isLoggedIn = authenticated;
        });
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (this.isLoggedIn) {
            console.log('Authorized!');
            return true;
        }

        this.auth.loginWithRedirect();

        return false;
    }
}