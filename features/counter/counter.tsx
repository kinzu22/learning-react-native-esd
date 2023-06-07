import React from 'react'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.body}> 
      <Text style={styles.boDemText}>Bộ đếm 2.0</Text>
        <Text style={styles.soDemText}>{count}</Text>
        <TouchableOpacity style={styles.btnDemButton} onPress={() => dispatch(increment())}>
          <Text style={styles.btnDemButtonText}>Tăng điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDemButton} onPress={() => dispatch(decrement())}>
          <Text style={styles.btnDemButtonText}>Hạ điểm</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
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
})