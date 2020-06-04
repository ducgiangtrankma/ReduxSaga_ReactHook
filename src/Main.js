import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector, connect} from 'react-redux';
import {increment, decrement} from './Redux/Actions/CounterAction';

const Main = (props) => {
  const countState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const _decrement = (count) => {
    dispatch(decrement(count));
  };
  const _increment = (count) => {
    dispatch(increment(count));
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              _decrement(1);
            }}>
            <Text style={{fontSize: 20, color: '#FFFF'}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{countState} </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              _increment(1);
            }}>
            <Text style={{fontSize: 20, color: '#FFFF'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    height: 50,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;
// class Main extends Component {
//   state = {};
//   _decrement = () => {
//     this.props.onCallApi(decrement(1));
//   };
//   _increment = () => {
//     this.props.onCallApi(increment(1));
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.main}>
//           <View style={styles.btn}>
//             <TouchableOpacity onPress={this._decrement.bind(this)}>
//               <Text style={{fontSize: 20, color: '#FFFF'}}>-</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{justifyContent: 'center', alignItems: 'center'}}>
//             <Text>{this.props.count} </Text>
//           </View>
//           <View style={styles.btn}>
//             <TouchableOpacity onPress={this._increment.bind(this)}>
//               <Text style={{fontSize: 20, color: '#FFFF'}}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   console.log('Counter', state);
//   return {
//     count: state.counter.count,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCallApi: (object) => dispatch(object),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
