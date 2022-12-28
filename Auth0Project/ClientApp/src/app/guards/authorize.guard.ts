import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
    constructor(public auth: AuthService) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const isLoggedIn = await firstValueFrom(this.auth.isAuthenticated$);

        if (isLoggedIn) {
            return true;
        }

        this.auth.loginWithRedirect({
            appState: {
                target: state.url
            }
        });

        return false;
    }
}