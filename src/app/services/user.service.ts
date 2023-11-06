import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { User } from 'firebase/auth'; // Importa sendPasswordResetEmail
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logOut() {
    return signOut(this.auth);
  }

  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  getUserProfile(): User | null {
    return this.auth.currentUser;
  }

}

//PERSISTENCIA DE DATOS
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Si usas una base de datos personalizada, añade tu configuración en el método create()
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar un valor
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  // Obtener un valor
  public async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }
}

@Injectable()
export class MiServicioPokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  // Método para obtener información de un Pokémon por su nombre
  obtenerPokemon(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${nombre}`);
  }
}

