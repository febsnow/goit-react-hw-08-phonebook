import React from "react";
import { Link } from "react-router-dom";

export default function LoginMenu() {
  return (
    <>
      <Link to="/login">Войти</Link>
      <Link to="/register">Зарегистрироваться</Link>
    </>
  );
}
