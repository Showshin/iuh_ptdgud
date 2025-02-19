import React from "react";
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : "CallBack Hell",
            Address : "HCM"
        }
    }
    handelInput = (event) => {
        this.setState({
            valueInput : event.target.value
        })
    }
    
    handelOnchaneInput = (event) =>{
        this.setState({
            Name : event.target.value
        })
    }
    handelOnchaneSubmit = (event) =>{
        event.preventDefault(); // tránh trang web load lại mất dữ liệu đã nhập
        console.log(this.state);
    }
    render(){
        return (
            <>
            <div>
                <p>My name is : {this.state.Name}</p>
                <p>My address is : {this.state.Address}</p>
            </div>
            <form action="" onSubmit={(event) => {this.handelOnchaneSubmit(event)}}>
                <input type="text" 
                onChange={(event) => this.handelOnchaneInput(event)} /> <br />
                <button>Submit</button>
            </form>

            </>
        )
    }
}

export default Childcomponent
