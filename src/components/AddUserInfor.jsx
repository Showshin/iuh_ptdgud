import React from "react";

class AddUserInfor extends React.Component {
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        //console.log(this.state)
        this.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }
    handelOnchaneInput = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    render() {
        return (
            <form action="" onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <label>Your Name : </label> <input type="text" id="Name"
                onChange={(event) => this.handelOnchaneInput(event)} /> <br />
                <label>Your Age : </label> <input type="text" id="Age"
                onChange={(event) => this.handelOnchaneInput(event)}/> <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default AddUserInfor