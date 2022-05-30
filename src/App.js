import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {initializeApp} from 'firebase/app';
import {Header, LoginForm, Spinner} from './components/common/Index';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

class App extends Component {
  state = {loggedIn: null};
  constructor() {
    super();
    const firebaseConfig = {
      apiKey: 'AIzaSyCj_ap5j1Wb-tTK4kk597CcJGCxn3DUU7E',
      authDomain: 'auth-de40e.firebaseapp.com',
      projectId: 'auth-de40e',
      storageBucket: 'auth-de40e.appspot.com',
      messagingSenderId: '572233243175',
      appId: '1:572233243175:web:89a73e5ea6f3c086764c02',
      measurementId: 'G-8MEEERHDQ1',
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    onAuthStateChanged(auth, user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    const auth = getAuth();
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => signOut(auth)} title="Log Out" />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
