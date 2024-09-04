import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

function Welcome(){
    const navigate = new useNavigate();
    const handleSignInClick = ()=>{
        navigate("/App");
    }
    const handleSignUpClick = ()=>{
        navigate("/SignUp");
    }
    
    return(
        
        <div>
            <label>
                Welcome Home
            </label>
            <button onClick={handleSignInClick}>    Signin  </button>
            <button onClick={handleSignUpClick}>    Signup  </button>
            

        </div>
        

    );





}

export default Welcome;