import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFormChange(event) {
    const key = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({ ...formData, [key]: [value] });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={handleFormChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleFormChange}
        value={formData.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
