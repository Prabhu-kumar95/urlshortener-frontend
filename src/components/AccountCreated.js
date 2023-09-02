import React from "react";
import { Link } from "react-router-dom";

const AccountCreated = () => {
  return (
    <div className="signIn container d-flex flex-column gap-3 p-2">
      <h2 className="display-6 text-center">To activate your account</h2>
      <p className="text-center">
        Kindly check your mail and click the confirm link that sent to you
      </p>
      <Link className="text-center" to="/">
        <button type="submit" className="btn btn-primary">
          Goto Login
        </button>
      </Link>
    </div>
  );
};

export default AccountCreated;
