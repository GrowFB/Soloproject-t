import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/reducers/loginSlice";

export const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if (id === "admin" && password === "admin") {
      dispatch(setLogin({ id, name: "sy" }));
      navigate("/admin");
    } else {
      alert("fail");
    }
  };

  return (
    <Wrapper className="login">
      <div className="hh">
        <form action="">
          <H1>Login</H1>
          <InputBox>
            <SubInput type="text" placeholder="UserName" onChange={handleId} />
            <UserIcon />
          </InputBox>
          <InputBox>
            <SubInput
              type="password"
              placeholder="Password"
              onChange={handlePw}
            />
            <LockIcon />
          </InputBox>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              remember id
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

//-----------------------
const Wrapper = styled.div`
  .hh {
    width: 420px;
    background: transparent;
    border: 3px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 10px;
  }
  .remember-forgot label input {
    accent-color: #fff;
    margin-right: 4px;
  }
  .remember-forgot a {
    color: #fff;
    text-decoration: none;
  }
  .remember-forgot a:hover {
    color: #fff;
    text-decoration: underline;
  }

  .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  .register-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
  }
  .register-link p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }
  .register-link p a:hover {
    text-decoration: underline;
  }
`;

const H1 = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
`;

const SubInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  font-size: 16px;
  color: white;
  padding: 20px 45px 20px 20px;
`;

const LockIcon = styled(FaLock)`
  position: absolute;
  top: 50px;
  right: 20px;
  transform: translateY(-200%);
  font-size: 16px;
`;
const UserIcon = styled(FaUser)`
  position: absolute;
  top: 50px;
  right: 20px;
  transform: translateY(-200%);
  font-size: 16px;
`;
