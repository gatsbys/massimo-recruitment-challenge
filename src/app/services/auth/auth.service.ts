import { UserRegistrarion } from "../../common/models/user-registration.model";
import { UserLogin } from "../../common/models/user-login.model"
import { environment } from '../../../environments/environment';
import { AuthorizationContainer } from "./authorization-container";
import { JwtService } from "../../kernel/jwt/jwt.service";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { JwtResponse } from '../../common/models/jwt-response.model'
import { forkJoin } from 'rxjs';
import { User } from 'src/app/common/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private httpClient: HttpClient, private jwtService: JwtService) {
    }

    async registerUser(registration: UserRegistrarion) {
        const response = await this.httpClient.put<JwtResponse>(`${environment.authUrl}/account/register`, registration).toPromise();
        this.populateAuthContainer(response.jwt)
    }

    async loginUser(login: UserLogin) {
        if (this.isLogged()) {
            this.logout();
        }

        const response = await this.httpClient.post<JwtResponse>(`${environment.authUrl}/account/login`, login).toPromise();
        this.populateAuthContainer(response.jwt)
    }

    populateAuthContainer(jwt: string) {
        const decodedToken = this.jwtService.extractClaims(jwt);

        const authContainer = new AuthorizationContainer();
        authContainer.rawJwt = jwt;
        authContainer.user.email = decodedToken.email;
        authContainer.user.name = decodedToken.name;
        authContainer.user.surname = decodedToken.surname;
        authContainer.user.isAdmin = decodedToken.isAdmin === "true";

        localStorage.setItem("user", JSON.stringify(authContainer));
    }

    public isLogged(): Boolean {
        const authContainer = <AuthorizationContainer>JSON.parse(localStorage.getItem("user"));
        if (authContainer == null) {
            return false;
        }

        return true;
    }

    public async logout() {
        localStorage.removeItem("user");
    }

    public loggedUser(): User {
        const authContainer = <AuthorizationContainer>JSON.parse(localStorage.getItem("user"));
        if (authContainer == null) {
            return null;
        }
        return authContainer.user;
    }
}