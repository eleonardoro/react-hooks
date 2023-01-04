import React, { useState } from "react";

function Example04_useState() {
  const model = {
    name: "",
    email: "",
    city: "",
  };

  const [form, setForm] = useState(model);

  const event = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Insert the name" onChange={event}/>
      <br />
      <input type="text" name="email" placeholder="Insert the email" onChange={event}/>
      <br />
      <input type="text" name="city" placeholder="Insert the city" onChange={event}/>
      <br />
      <br />
      <br />
      <p>Name: {form.name}</p>
      <br />
      <p>Email: {form.email}</p>
      <br />
      <p>City: {form.city}</p>
      <br />
      <br />
      <br />
      <p>{JSON.stringify(form)}</p>
    </div>
  );
}

export default Example04_useState;
