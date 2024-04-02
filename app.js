const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");


for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode==="NPR") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode==="KRW") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}