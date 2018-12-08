/* import React from 'react';
import { Text } from 'react-native';
import { ListItem, CheckBox, Body } from 'native-base';
import PropTypes from 'prop-types';

const Lista = ({ item, onPress }) => (
    <ListItem key={item.id} onPress={onPress}>
        <CheckBox checked={item.estado} color={item.color} onPress={onPress(item.todo)} />
        <Body>
            <Text>{item.todo}</Text>
        </Body>
    </ListItem>
);

ListItem.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired,
        estado: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired).isRequired,

    onPress: PropTypes.func.isRequired

};
export default Lista;

 */