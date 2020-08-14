import React, { Component } from 'react'


class ProfileStatus extends Component {

    state={
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode=()=>{
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.getUpdateStatus(this.state.status)
    }
    
    onChangeStatus = (event)=>{
        this.setState({
            status: event.target.value
        })
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        let {editMode} = this.state
        return(
            <div>
                {!editMode 
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.state.status || 'Здесь пока пусто'}
                    </span>
                </div>
                : <div>

                    <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.activateEditMode} value={this.state.status} />
                        
                </div>}
            </div>
        )
    }
}

export default ProfileStatus