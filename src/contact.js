
const loadContact = () => {
  const divContact = document.createElement("div");
  const divAddressSection = document.createElement("div");
  const divAddress = document.createElement("div");
  const divSocialMedia = document.createElement("div");
  const socialMediaList = document.createElement("ul");
  const address = document.createElement("address");
  const iconsClasses = [
    "fab fa-facebook",
    "fab fa-instagram",
    "fab fa-twitter",
  ];
  const storeIcon = document.createElement("i");
  const spanElement = document.createElement("span");
  spanElement.textContent = "Visit us @";
  storeIcon.className = "fas fa-store-alt";
  divContact.id = "contactInfo";
  divAddressSection.id = "address";
  divAddressSection.appendChild(storeIcon);
  divAddressSection.appendChild(divAddress);
  address.innerText =
    "Address: 7363 Taco St, Lonely Taco, LT 82267 Telephone: 2152849874";
  divSocialMedia.id = "socialMedia";
  divSocialMedia.appendChild(spanElement);
  divSocialMedia.appendChild(socialMediaList);
  divContact.appendChild(divAddressSection);
  divContact.appendChild(divSocialMedia);
  divAddress.appendChild(address);

  function addIcon(i) {
    let item = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = i;
    item.appendChild(icon);
    return item;
  }

  for (var i = 0; i < iconsClasses.length; i++) {
    socialMediaList.appendChild(addIcon(iconsClasses[i]));
  }
  content.appendChild(divContact);
};

export { loadContact };
