import { useState } from "react";

const countries = [
  { name: "india", value: "IN", cities: ["dehli", "pune"] },
  {
    name: "pakistan",
    value: "pk",
    cities: ["karachi", "lahore"]
  },
  {
    name: "Bangladesh",
    value: "ban",
    cities: ["dhaka", "chittagong"]
  }
];
export default function App() {
  const [country, setCountry] = useState("");
  console.log(country);
  return (
    <div className="App">
      <select
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={index}>{item.name}</option>;
        })}
      </select>
      <select
        onChange={(e) => {
          console.log("2drop" + e.target.value);
        }}
      >
        {country !== "" &&
          countries[parseInt(country, 10)] &&
          countries[country].cities.map((item, index) => {
            return <option value={index}>{item}</option>;
          })}
      </select>
    </div>
  );
}
