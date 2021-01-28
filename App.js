// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import TcpSocket from 'react-native-tcp-socket';

function HomeScreen({ navigation }) {

  const client = TcpSocket.createConnection({
    port: 13001,
    host: '192.168.1.25'
    }, (address) => {
    // Write on the socket
    client.write('Hello server!');
  
    // Close socket
    client.destroy();
  });


  return (
    <View style=  {{flex: 1}}>
      <View style=  {{flex: 5}}/>
      <View style={styles.fixToText}>
      <Button
          title="Görev"
          color="#f194ff"
          onPress={() => navigation.navigate('Task')}
        />
        <Button
          title="Test"
          color=""
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    </View>
  );
}

function TestScreen() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <View style={{ flex: 1}}>
      <View style = {{ flex: 2}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Slider
              style={{width: 320, height: 80}}
              minimumValue={0}
              maximumValue={100}
              value={50}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.leftButton}>
                <Image 
                  source={require('./Images/left.png')} 
                  style={styles.ImageIconStyle} 
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.leftButton}>
                <Image 
                  source={require('./Images/right.png')} 
                  style={styles.ImageIconStyle} 
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.stopButton}>
              <Image 
                source={require('./Images/stop.png')} 
                style={styles.ImageIconStyle} 
              />
            </TouchableOpacity>
            </View>
        </View>
        <View style = {{ flex: 1, alignItems: 'center'}}>
          <Slider
            style={{width: 320, height: 80}}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.leftButton}>
                <Image 
                  source={require('./Images/worm.png')} 
                  style={styles.ImageIconStyle} 
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.stopButton}>
                <Image 
                  source={require('./Images/stopfeed.png')} 
                  style={styles.ImageIconStyle} 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  );
}



function TaskScreen() {
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'android');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style = {{ flex: 2}} />
        {/* <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )} */}
      <View style = {{ flex: 1}} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  leftButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'orange',
  },
  stopButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'red',
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode : 'stretch',
 }
});

export default App;