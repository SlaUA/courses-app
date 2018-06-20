import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export default class UserService {
  getCurrentUser(): User {
    return {
      id: 1,
      firstName: 'Slava',
      lastName: 'Lubenets'
    };
  }
}
