import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Input, Header, Content, Button, Container, Text, Body, Title, Left, Right } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './actions';
import AllTodo from './AllTodo';
import { Font, AppLoading } from 'expo';
class TodoList extends React.Component {

  state = {
    texto: ''
  }
  _clear() {
    this.state = '';
  }
  render() {
    const {
      addItem,
      checkItem,
      items,
      deleteList
    } = this.props
    return (
      <Container style={styles.container}>
        <Header>
          <Left></Left>
          <Body>
            <Title>Mi Lista</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => deleteList()}>
              <Text>Limpiar</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Input placeholder="Tarea" ref={element => { this.texto = element }} onChangeText={texto => this.setState({ texto })} />
          <Button block style={styles.buttonStyle} disabled={this.state.texto == ''} onPress={() => { addItem(this.state.texto); this.setState({ texto: '' }); this.texto.setNativeProps({ text: '' }) }}><Text>Agregar</Text></Button>
          <AllTodo todos={items} toggleTodo={checkItem} />
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAF8FB',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  upper: {
    flex: 1,
    alignItems: 'flex-start',
  },
  lower: {
    flex: 2,
    alignItems: 'center',
  },
  buttonStyle: {
    color: 'blue'
  }
});

function mapStateToProps(state) {
  const { estado, color, todo, id, items } = state;
  return {
    estado,
    color,
    todo,
    id,
    items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(actions.addItem, dispatch),
    checkItem: bindActionCreators(actions.checkItem, dispatch),
    deleteList: bindActionCreators(actions.deleteList, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)