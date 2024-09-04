import '../styles/App.css';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const navigate = useNavigate(); // Define navigate function

  const handleSignInClick = () => {
    navigate("/SignUp"); // Navigate to "/SignUp" route
  };

  return (
    <div>
     <label class="sgn-in"> Sign in
      </label>
      <form class = "signin">
         <table>
                <tr>
                  <td>
                  <label>
                    User name
                  </label>
                  </td>
                  <td>
                    <input type = "text">
                    </input>
                  </td>

                </tr>
                <tr>
                  <td>
                  <label>
                    Password
                  </label>
                  </td>
                  <td>
                    <input type = "Password">
                    </input>
                  </td>

                </tr>

         </table>

    <button class="btn" type = "Submit" onClick={handleSignInClick}>
      Signin
    </button>
  
    
      </form>
     

    
    </div>


  
  );
}

export default SignIn;
