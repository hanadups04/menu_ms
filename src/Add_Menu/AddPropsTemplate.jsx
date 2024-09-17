import React from "react";

export default function AddPropsTemplate(prop) {
  return (
    <>
      <div class="form-floating mb-3">
        <input
          type={prop.type}
          class="form-control"
          id="floatingInput"
          name={prop.name}
          value={prop.value}
          onChange={prop.onChange}
        />
        <label htmlFor="floatingInput">{prop.desc}</label>
      </div>
    </>
  );
}
