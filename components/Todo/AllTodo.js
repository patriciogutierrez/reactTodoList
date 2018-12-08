import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native';
import { ListItem, CheckBox, Text, Body } from 'native-base'
const AllTodo = ({ todos, toggleTodo }) => (
    <FlatList data={todos}
        renderItem={({ item }) => (
            <ListItem key={item.id} onPress={() => toggleTodo(item.id)}>
                <CheckBox checked={item.estado} color={item.color} onPress={() => toggleTodo(item.id)} />
                <Body>
                    <Text>{item.todo}</Text>
                </Body>
            </ListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
    />
);
AllTodo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        estado: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default AllTodo;