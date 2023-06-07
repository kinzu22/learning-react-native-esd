import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Giới thiệu sử dụng Redux</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boDemText}>Bộ đếm 2.0</Text>
        <Text style={styles.soDemText}>{number}</Text>
        <TouchableOpacity style={styles.btnDemButton} onPress={handleIncrement}>
          <Text style={styles.btnDemButtonText}>Tăng điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDemButton} onPress={handleDecrement}>
          <Text style={styles.btnDemButtonText}>Hạ điểm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    padding: 20,
    marginTop: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {justifyContent: 'center', alignItems: 'center'},
  boDemText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
  soDemText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnDemButton: {
    marginTop: 40,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
