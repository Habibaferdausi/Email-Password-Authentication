import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterRbs = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };

  return (
    <div className="border border-3 mx-auto w-75 pt-10">
      <Form onSubmit={handleRegister} className=" text-center ">
        <Form.Group className="mb-3 mt-11" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-25 mx-auto"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="w-25 mx-auto"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            className="w-25 mx-auto"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mx-auto">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterRbs;
