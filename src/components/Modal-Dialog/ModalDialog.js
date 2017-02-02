import React     from 'react'
import Modal     from 'react-modal';
import Button    from '../Button/Button';
import TaskEdit  from '../../components/TasksEditor/TaskEdit';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '500px',
        boxShadow             : '1px 1px 15px #4d4d4d'
    }
};
export default function ModalDialog(props) {
    const {isOpen,isClose,contentLabel,valueInput,valueTextArea,update,executorInput,executorTextarea,saveTask} = props;

    return (
        <Modal isOpen={isOpen} style={customStyles} contentLabel={contentLabel}  >

            <div className='task-edit'>
                <div className='content'>{contentLabel}</div>
                <TaskEdit
                    valueInput={valueInput}
                    valueTextArea={valueTextArea}
                    update={update}
                    executorInput={executorInput}
                    executorTextarea={executorTextarea}
                    save={saveTask}
                />
                <Button
                    className='cancel-button'
                    clickHandler={isClose}
                    text='Отмена'

                />
            </div>

        </Modal>
    );
}