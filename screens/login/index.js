import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../../components/button";
import FormTextInput from "../../components/FormTextInput";
import imageLogo from "../../assets/images/logo.png";
// import colors from "../config/colors";
// import strings from "../config/strings";

interface State {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, State> {
  state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    fetch('https://localhost:8080', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Email"}
            autoCapitalize={"none"}
          />
          <FormTextInput
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
          />
          <Button
            label={"Login"}
            onPress={this.handleLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default LoginScreen;
