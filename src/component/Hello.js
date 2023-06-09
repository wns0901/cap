import { useNavigate } from "react-router-dom";

export default function Hello() {
  const navigate = useNavigate();

  const movePageToLogin = () => {
    navigate("/login");
  };

  const movePageToRejister = () => {
    navigate("/register");
  };

  return (
    <div>
      <p>환영합니다</p>
      <button onClick={movePageToLogin}>로그인</button>
      <button onClick={movePageToRejister}>회원가입</button>
    </div>
  );
}
