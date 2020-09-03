import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    extractClaims(jwt: string): any {
        const helper = new JwtHelperService();
        return helper.decodeToken(jwt);
    }
}