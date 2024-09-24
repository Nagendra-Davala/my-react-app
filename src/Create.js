import React, { useEffect, useState } from "react";
export default function Create({ token }) {
  const [formData, setFormData] = useState({});
  const [responseMessage, setResponseMessage] = useState([]);
  const [interfacesResponse, setInterfaces] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [interfaceId, setInterfaceId] = useState(0);
  useEffect(() => {
    fetch(
      "https://localhost:5001/sem/v4/Sites('LS')/Plants('LP')/Applications('Sppid')/Interfaces",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Prefer: "OData.MaxPageSize = 80",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInterfaces(data.value);
      });
  }, [token]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    const selectedInterface = interfacesResponse.find(
      (s) => s.Name === e.target.value
    );
    if (selectedInterface) {
      setInterfaceId(selectedInterface.Id);
    }
  };

  function CreateProperty(event) {
    event.preventDefault();
    fetch(
      "https://localhost:5001/sem/v4/Sites('LS')/Plants('LP')/Applications('Sppid')/Interfaces('" +
        interfaceId +
        "')/Properties",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          Name: formData.Name,
          Description: formData.Description,
          DisplayName: formData.DisplayName,
          Type: formData.Type,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          setResponseMessage("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResponseMessage(data);
      })
      .catch((error) => {
        setResponseMessage(`Error: ${error.message}`);
      });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Create Property Form</h1>
      <h3>
        {typeof responseMessage === "string"
          ? responseMessage
          : JSON.stringify(responseMessage)}
      </h3>
      <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>
            Select...
          </option>

          {interfacesResponse.map((option) => (
            <option id={option.Id} value={option.Name}>
              {option.Name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Create Operation</h1>
        <form onSubmit={CreateProperty}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>DisplayName</label>
            <input
              type="text"
              name="DisplayName"
              value={formData.DisplayName}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Type</label>
            <input
              type="text"
              name="Type"
              value={formData.Type}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <button disabled={selectedOption === "" ? true : false} type="submit">
            CreateProperty {selectedOption}
          </button>
        </form>
      </div>
    </div>
  );
}
