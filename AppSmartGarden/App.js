import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ActionButton from 'react-native-circular-action-menu';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component{

    static navigationOptions = {
                headerRight: (<TouchableOpacity style={{padding: 5}} onPress={() => {
            Alert.alert('Welcome To Smart Garden');
        }}>
        <Image
        style={{width: wp('35%'), height: hp('50%'), resizeMode: 'contain'}}
        source={require('./assets/logo.gif')}/>
        </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: '#297793',
        },
    }

  render() {


     return (

         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

          <ActionButton buttonColor='#d77500' title="New Task"
              onPress={() => this.props.navigation.navigate('')}>
          <Image
              style={{width: 60, height: 90}}
              source={require('./assets/ph-meter2.png')}/>
              </ActionButton>

              <ActionButton buttonColor='#d77500' title="New Task"
              onPress={() => this.props.navigation.navigate('')}>
          <Image
              style={{width: 60, height: 90}}
              source={require('./assets/rh-meter2.png')}/>
              </ActionButton>

              <ActionButton buttonColor='#d77500' title="New Task"
              onPress={() => this.props.navigation.navigate("")}>
          <Image
              style={{width: 60, height: 90}}
              source={require('./assets/file.png')}/>
              </ActionButton>

              <ActionButton buttonColor='#d77500' title="New"
              onPress={() => this.props.navigation.navigate("")}>

          <Image
              style={{width: 60, height: 90}}
              source={require('./assets/market.png')}/>
              </ActionButton>

         </View>

     );
  }

}

class pHScreen extends React.Component{
    render() {
        return(
            <View>
            <Text>ulala</Text>
            </View>
        );
    }
}

class RHScreen extends React.Component{
    render() {
        return(
            <View>
            <Text>ulala</Text>
            </View>
        );
    }
}

class DtanamanScreen extends React.Component{
    render() {
        return(
            <View>
            <Text>ulala</Text>
            </View>
        );
    }
}

class marketScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
            <Text>ulala</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        RH: RHScreen,
        pH: pHScreen,
        DT: DtanamanScreen,
        mp: marketScreen,
    },
    {
        initialRouteName: 'Home',
    },
    {
        headerMode:'none',
    }
);

export default class App extends React.Component{
  render() {

        return (
          <View style={styles.container}>

            <Text>ulala</Text>

              </View>
            );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
