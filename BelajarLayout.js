import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>2.1</Text>
          <Text style={styles.text}>2.2</Text>
        </View>
        <View style={styles.box3}>import React from 'react';
        import { StyleSheet, Text, View } from 'react-native';

        export default class BelajarLayout extends React.Component {
          render() {
            return (
              <View style={styles.containerMain}>
                <View style={styles.box1}>
                  <Text style={styles.text}>Layout Soedarma Yasa</Text>
                </View>

                <View style={styles.box2}>
                    <Text style={styles.text}>Soedarma</Text>
                </View>
                <View style={styles.box3}>
                  <Text style={styles.text}></Text>
                    <View style={styles.box4}>
                      <Text style={styles.text}>button</Text>
                    </View>
                    <View style={styles.box5}>
                      <Text style={styles.text}>button</Text>
                    </View>
                    <View style={styles.box6}>
                      <Text style={styles.text}>button</Text>
                    </View>
                    <View style={styles.box7}>
                      <Text style={styles.text}>button</Text>
                    </View>
                </View>
                <View style={styles.box8}>
                  <Text style={styles.text}></Text>
                      <View style={styles.box9}>
                        <Text style={styles.text}>button</Text>
                      </View>
                      <View style={styles.box10}>
                        <Text style={styles.text}>button</Text>
                      </View>
                      <View style={styles.box11}>
                        <Text style={styles.text}>button</Text>
                      </View>
                      <View style={styles.box12}>
                        <Text style={styles.text}>button</Text>
                      </View>
                </View>
                  <View style={styles.box13}>
                    <Text style={styles.text}>footer</Text>
                  </View>
              </View>
            );
          }
        }

        const styles = StyleSheet.create({
          containerMain: {
            backgroundColor: 'blue',
              flex: 1,
              //flexDirection: 'column'
          },
          box1: {
            backgroundColor: 'blue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
           box2: {
            backgroundColor: 'white',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          },
          box3: {
              backgroundColor: 'black',
              flex: 2,
              //alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row'
          },
          box4: {
              backgroundColor: 'blue',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
              width: 70,
              height: 70,
              marginTop: 50,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20,
          },
          box5: {
              backgroundColor: 'white',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
              width: 70,
              height: 70,
              marginTop: 50,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20
          },
          box6: {
              backgroundColor: 'blue',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
              width: 70,
              height: 70,
              marginTop: 50,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20
          },
          box7: {
              backgroundColor: 'white',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
              width: 70,
              height: 70,
              marginTop: 50,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20
          },
        box8: {
            backgroundColor: 'black',
            flex: 2,
            //alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row'
        },
        box9: {
            backgroundColor: 'white',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 20,
        },
        box10: {
            backgroundColor: 'blue',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 20
        },
        box11: {
            backgroundColor: 'white',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 20
        },
        box12: {
            backgroundColor: 'blue',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 20
        },
           box13: {
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
        });

          <Text style={styles.text}>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'blue',
      flex: 1,
      flexDirection: 'column',
    },
    box1: {
      flex: 1, //penyesuaian 1/3
      backgroundColor: 'green',
    },
    box2: {
      flex: 2, //penyesuaian 1/3
      backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    box3: {
      flex: 1, //penyesuaian 1/3
      backgroundColor: 'red',
    },
    text: {
      fontSize: 50
    },
});
