import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {Button, Card, CardSection, Input, Spinner} from '../common/Index';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
            this.onLoginFail.bind(this);
          });
      });
  }

  onLoginSuccess() {
    console.log('SUCX');
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onLoginFail() {
    console.log('Fail');
    this.setState({loading: false, error: 'Authentication failed!'});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }
    /* since we want to call this callback function in future we will bind context into it */
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {fontSize: 20, alignSelf: 'center', color: 'red'},
};

export {LoginForm};
