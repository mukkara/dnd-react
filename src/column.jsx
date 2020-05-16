import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
margin: 10px;
border: 1px solid lightgray;
border-radious: 2px;
width: 40%;
min-height: 50%
`;
const Title = styled.h3`
padding: 8px;
`;
const TaskList = styled.div`
padding: 8px;
`;


export default class column extends React.Component {
    render() {
        return (
            <Container>
                <Title>
                    {this.props.column.title}
                </Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <TaskList
                            // innerRef={provided.innerRef}
                            ref={provided.innerRef}
                            {...provided.droppabledProps}
                        >
                            {this.props.tasks.map((task, index) =>
                                <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>

        )

    }
}
