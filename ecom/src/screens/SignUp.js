import '../styles/App.css';





function SignUp(){

    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      // Here you can add logic to handle form submission, such as sending data to a server
      // For now, let's just log a message to the console
      console.log("Form submitted");
    };


    return (
        <div>
            <form class ="Signup" onSubmit={handleSubmit}>
                <label class="sgn-up">
                  Sign Up
                </label>

                <table>
                  <tr>
                    <td>
                      <label>
                        First Name
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
                        Address
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
                        Contact
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
                        User Name
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
                      <input type = "password">
                        
                      </input>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>
                        Confirm Password
                      </label>
                    </td>
                    <td>
                      <input type = "password">
                        
                      </input>
                    </td>
                  </tr>
                </table>

                <button class="btn" type = "submit">
                  SignUp
                </button>
            </form>


        </div>



    )
}

export default SignUp;