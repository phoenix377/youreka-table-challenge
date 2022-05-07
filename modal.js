import { res } from "./demo.js";

$(document).ready(() => {
  const modal = $("#myModal");

  const contactButton = $(".contacts-button");

  contactButton.click((event) => {
    modal.css("display", "block");
    const { Contacts } = res.records.find(({ Id }) => Id === event.target.id);

    const rowList = Contacts.records.map(getTableRow).join("");
    $("#contactsTable > tbody:last-child").append(rowList);
  });

  $(".close").click(() => {
    modal.css("display", "none");
    $("#contactsTable > tbody > tr > td").parent().remove();
  });

  $(window).click((event) => {
    if (event.target.id == "myModal") {
      modal.css("display", "none");
      $("#contactsTable > tbody > tr > td").parent().remove();
    }
  });
});

function getTableRow(record) {
  if (!record) {
    return "<tr>No contact</tr>";
  }
  const data = Object.entries(record).filter(([key]) => key !== "attributes");
  return `<tr>${data.map(([_, value]) => `<td>${value ?? "_"}</td>`)}</tr>`;
}
