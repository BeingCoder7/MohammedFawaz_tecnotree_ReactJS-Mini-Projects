import {React,useState} from "react";

function Form(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [college, setCollege] = useState('');
    const [email, setEmail] = useState('');
    const [usn, setUsn] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handleAgeChange = (event) => {
        setAge(event.target.value);
      };

      const handleCollegeChange = (event) => {
        setCollege(event.target.value);
      };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
 
      const handleUsnChange = (event) => {
        setUsn(event.target.value);
      };
 
      const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
 
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
 
      const submit=(event)=>{
        alert("Name:"+name+"\n"+"College Name:"+"\n"+"Age:"+age+"\n"+"Email:"+email)
        reset()
      }

      const reset=(event)=>{
        setUsername('')
        setAge('')
        setCollege('')
        setEmail('')
        setPassword('')
        setName('')
        setUsn('')
      }
 
 
          return (
            <div className="form">
            <center>
              <fieldset>
                <h2>Student Register Form</h2><table>
                  <tbody><tr>
                      <td>Name:</td>
                      <td><input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                      </td></tr>
                    <tr>
                      <td>Age:</td>
                      <td><input type="text" id="age" name="age" value={age} onChange={handleAgeChange} />
                      </td></tr>
                    <tr>
                      <td>College Name:</td>
                      <td><input type="text" id="college" name="college" value={college} onChange={handleCollegeChange}/></td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td><input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                      </td></tr>
                    <tr>
                      <td>USN:</td>
                      <td><input type="text" id="usn" name="usn" value={usn} onChange={handleUsnChange}/>
                      </td></tr>
                    <tr>
                      <td>Username:</td>
                      <td><input type="text" id="username" name="username" value={username} onChange={handleUsernameChange}/>
                      </td></tr>
                    <tr>
                      <td>Gender:</td>
                      <td><input type="radio" id="radio" name="radio" value='Male' />Male <br />
                        <input type="radio" id="radio" name="radio" value='Female'/>Female <br />
                      </td>
                    </tr>
                    <tr>
                    </tr><tr>
                      <td>Date:</td>
                      <td><input type="date" id="date" name="date"/>
                      </td></tr>
                    <tr>
                      <td>Password:</td>
                      <td><input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
                      </td></tr>
                    <tr>
                      <td>Check to Move Further :</td>
                      <td><input type="checkbox" id="checkbox"  name="password" value=' '/>Check Here
                      </td></tr>
                    <tr>
                      <td>
                        <input type="submit" onClick={submit}  id="btn" />
                      </td>
                      <td>
                        <input type="reset"  onClick={reset} id="btn1" defaultValue="Reset" />
                      </td>
                    </tr>
                  </tbody></table>
              </fieldset>
            </center>
            </div>
          );
}


export default Form;