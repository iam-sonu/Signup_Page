import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const Signup = () => {
  return (
    <View style={style.container}>
      <View style={style.HeadTop}>
        <View style={style.backButton}>
          <TouchableOpacity>
            <Image
              style={{height: 40, width: 40}}
              source={require('.//src/assets/images/back.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={style.Logo}>
          <Image
            style={{height: 100, width: 150}}
            source={require('.//src/assets/images/Logo.png')}
          />
        </View>
      </View>

      <View style={style.Body}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              margin: 10,
            }}>
            SignUp
          </Text>

          <TextInput
            style={style.TextInput}
            placeholder="Name"
            placeholderTextColor="black"
            autoCorrect={false}
            keyboardType={null}
          />

          <TextInput
            style={style.TextInput}
            placeholder="Date of Birth"
            placeholderTextColor="black"
          />

          <TextInput
            style={style.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={style.TextInput}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={style.TextInput}
            placeholder="Conform Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'orange',
              height: 50,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              PROCEED
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            //backgroundColor:'orange',
            height: 50,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
            }}>
            Or Sign Up With
          </Text>
        </View>

        <View
          style={{
            //backgroundColor:'red',
            height: 50,
            width: 200,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              //backgroundColor:'grey',
              height: 50,
              width: 80,
              alignItems: 'center',
              //justifyContent:'center'
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 40, width: 40}}
                source={require('.//src/assets/images/google.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              //backgroundColor:'green',
              height: 50,
              width: 80,
              alignItems: 'center',
              //justifyContent:'center'
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 40, width: 40}}
                source={require('.//src/assets/images/apple.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  HeadTop: {
    //backgroundColor:'yellow',
    height: 160,
    width: 400,
    marginTop: 40,
    flexDirection: 'row',
  },

  backButton: {
    //backgroundColor:'red',
    height: 50,
    width: 50,
  },
  Logo: {
    //backgroundColor:'green',
    height: 150,
    width: 200,
    marginLeft: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Body: {
    backgroundColor: 'aqua',
    height: 650,
    width: 400,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 25,
    alignItems: 'center',
  },
  TextInput: {
    height: 40,
    width: 350,
    borderWidth: 1,
    margin: 15,
    borderRadius: 15,
    fontSize: 18,
    padding: 10,
  },
});

export default Signup;
