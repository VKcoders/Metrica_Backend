import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../Context";

import "../Styles/Login.css";
import Cover from "../Assets/Cover.png";

// import { requestLogin } from "../Service/Main/Login";

function LoginPage() {
  const { setClient, setToken, credentials, setCredentials } = useContext(Global);
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log(credentials);
    // const response = await requestLogin(credentials);
    
    // if (!response.token) {
    //   window.alert(response);
    //   setCredentials(prev => ({...prev, password: ""}));
    //   return;
    // }

    // setToken(response.token);
    // setClient(response.data);
    // navigate(`/${response.endpoint}`);


  }

  const textInput = (name) => {
    const typeName = name === "password" ? "password" : "text";

    const handleChange = ({target}) => {
      const {id, value} = target;
      setCredentials(prev => ({...prev, [id]: value}));
    }

    return (
      <div className="input-container">
        <label className="label" htmlFor={name}>{name}</label>
        <input
          className="input" 
          type={typeName} 
          id={name}
          value={credentials[name]}
          onChange={handleChange}
        />
        <div id="bar" />
      </div>
    )
  }

  return (
    <>
      <img className="cover" src={Cover} alt="Background Cover" />
      <div className="container">
        {textInput('username')}
        {textInput('password')}
        <input 
          className="button"
          type="submit" 
          value="log in"
          onClick={handleClick}
          style={{
            backgroundColor: 
              credentials.username.length <= 4 || credentials.password.length <= 6 ? "gray" : "blue",
          }}
          disabled={credentials.username.length <= 4 || credentials.password.length <= 6}
        />
      </div>
    </>
  )
}

export default LoginPage;
