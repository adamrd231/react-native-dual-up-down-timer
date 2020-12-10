import { StatusBar } from 'expo-status-bar';
import React, { useEffect, UseState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UIStepper from 'react-native-ui-stepper';


// function startIntervalTimer() {
//     setInterval(() => {
//         console.log('This will run every second!');
//       }, 1000);
// }

export default function Home() {

    const [ heat, SetHeat ] = React.useState(5);
    const [ cool, SetCool ] = React.useState(5);
    const [ timerIsActive, SetTimerIsActive ] = React.useState(false);

    const [ buttonTitle, SetButtonTitle] = React.useState();

    const [ heatReset, SetHeatReset ] = React.useState(heat);
    const [ coolReset, SetCoolReset ] = React.useState(heat);

    function toggle() {
        // Set Timer to true
        SetTimerIsActive(!timerIsActive);
    }


    useEffect(() => {
        if (timerIsActive) {
            SetButtonTitle("RESET")
        } else {
            SetButtonTitle("START")
        }
    },[buttonTitle, timerIsActive]);


    useEffect(() => {
        let interval = null;
        
        if (timerIsActive && heat > 0) {
            interval = setInterval(() => {
                SetHeat(heat => heat - 1)
              }, 1000);

        } else if (timerIsActive && cool > 0) {
            clearInterval(interval);
            interval = setInterval(() => {
                SetCool(cool => cool - 1)
              }, 1000);

        } else {
            SetTimerIsActive(timer => false)
            clearInterval(interval);
            SetHeat(heatReset);
            SetCool(coolReset);  
        }
        
        return () => clearInterval(interval);
        
    },[timerIsActive, heat, cool, heatReset]);

  return (

    
    <View style={styles.container}>
      <View>
        <Text>Heat Up</Text>
        <Text>{heat}</Text>
        <UIStepper
            value={heat}
            onValueChange={ 
                (value) => SetHeat(value), (value) => SetHeatReset(value)
            }
            steps={5}
            initialValue={heat}
            minimumValue={0}
            maximumValue={1000}
        />
      </View>

      <View>
        <Text>Cool Down</Text>
        <Text>{cool}</Text>
        <UIStepper
            value={cool}
            onValueChange={ (value) => SetCool(value), (value) => SetCoolReset(value) }
            steps={5}
            initialValue={cool}
            minimumValue={0}
            maximumValue={1000}
        />
      </View>

      <View>
        <Button
          title={buttonTitle}
          onPress={toggle}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
