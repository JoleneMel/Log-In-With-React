import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return (
            <center><form id="login">
                <h3 id="loginlogo">Log In</h3>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label"></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="UserName" />
                </div>
                <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label"></label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                </div>    
                <div className="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            </center>
            //note
        );
    }
}

