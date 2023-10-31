import React from "react";
import styled from "styled-components/native";
import Button from "../../components/Button";
import Navigation from "../navigations";

const Container = styled.View`
    flex : 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin: 10px;
`;


const Items = [
    { id: 1, name: 'React Native' },
    { id: 2, name: 'Expo' },
    { id: 3, name: 'React Navigation'},
];
const List = ({navigation}) => {
    return(
        <Container>
            <StyledText>List</StyledText>
            {Items.map(({ id, name })=> (
                <Button key={id} title={name}
                onPress={() => navigation.navigate('Chat', {id, name})}/>
            ))}
        </Container>
    );
};

export default List;
