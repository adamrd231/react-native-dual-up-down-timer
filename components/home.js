import { StatusBar } from 'expo-status-bar';
import React, { UseState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UIStepper from 'react-native-ui-stepper';

export default function Home() {

    const [ heat, SetHeat ] = React.useState(45);
    const [ cool, SetCool ] = React.useState(45);

  return (

    
    <View style={styles.container}>
      <View>
        <Text>Heat Up</Text>
        <Text>{heat}</Text>
        <UIStepper
            value={heat}
            onValueChange={ (value) => SetHeat(value) }
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
            onValueChange={ (value) => SetCool(value) }
            steps={5}
            initialValue={cool}
            minimumValue={0}
            maximumValue={1000}
        />
      </View>

      <View>
        <Button
          title="Start"
        />
        <Button
          title="Reset"
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
