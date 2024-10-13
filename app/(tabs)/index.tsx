import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../colors';
import tempData from '../../tempData';
import TodoList from '@/components/TodoList';
import AddListModal from '@/components/AddListModal';
import Fire from '../../Fire';



export default class App extends React.Component {
  state ={
    addTodoVisible: false,
    lists: tempData
  };

  // componentDidMount() {
  //     firebase = new Fire();
  // }
  // componentDidMount(): void {
  //   firebase = new Fire((error, user) => {
  //     if(error) {
  //       return alert("Uh oh, somethinf went wrong");
  //     }
  //   });
  // }
  
  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList}/>;
  }

  addList = list => {
    this.setState({ lists : [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }]});
  };

  updateList = list => {
    this.setState ({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
           <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>
        </Modal>
    
        <View style={{flexDirection: "row"}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Test 
            <Text style={{ fontWeight: "300", color: colors.blue }}> Etalik</Text>
          </Text>      
          <View style={styles.divider} />
        </View> 

        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress= {() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add project</Text>
        </View>  

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.name}
            horizontal ={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => this.renderList(item)}  
            keyboardShouldPersistTaps="always" 
          />
        </View>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider:{
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add :{
    color: colors.blue,
    fontWeight: "900",
    fontSize: 14,
    marginTop: 8
  }
});