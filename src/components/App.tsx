import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/authService';
import { Login } from './Login';

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState>{

  private authService: AuthService = new AuthService();

  render() {
    return (
      <>
      <Login authService={this.authService}/>
     
      </>
    );
  }
}


