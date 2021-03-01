import react from'react';
class login extends react.Components{
    render(){
    return(
        <div>
            <form>
                <input type='email' name='email' placeholder='email...'required/>
                <input type='password' name='password' placeholder='password...'required/>
                <button>login</button>
            </form>

        </div>
    )
}
}
export default login;