//Title
var maincontainer = setTitle("div", "class", "container-fluid");
var formLayout = setTitle("main", "id", "form-layout");
var titlecontent = setTitle("form", "id", "form");
function setTitle(tagname, attname, attvalue) {
  var formbody = document.createElement(tagname);
  formbody.setAttribute(attname, attvalue);
  return formbody;
}

//-----------------------------------------

var maindiv = document.createElement("div");
maindiv.classList.add(
  "div",
  "form-row",
  "d-flex",
  "justify-content-center",
  "col-md-8"
);

var titlediv1 = document.createElement("div");
titlediv1.classList.add("form-group", "col-md-10");

//---------------------------------------------

var div1h1 = titledivchild("h1", "id", "title", "DOM HTML-FORM :");
var div1p = titledivchild(
  "p",
  "id",
  "description",
  " Kindly fill this form given below and choose the favourite Food items of Minimum Two:-"
);
function titledivchild(tagname, attname, attvalue, contenttext) {
  var titledivchild = document.createElement(tagname);
  titledivchild.setAttribute(attname, attvalue);
  titledivchild.innerHTML = contenttext;
  return titledivchild;
}

//-----------------------------------------------------

var fname_div = sixdiv("div", "form-group", "col-md-5");
var lname_div = sixdiv("div", "form-group", "col-md-5");
var address_div = sixdiv("div", "form-group", "col-md-10");
var state_div = sixdiv("div", "form-group", "col-md-5");
var country_div = sixdiv("div", "form-group", "col-md-5");
var pincode_div = sixdiv("div", "form-group", "col-md-5");
var gender_div = sixdiv("div", "form-group", "col-md-5");
var food_div = sixdiv("div", "form-group", "col-md-10");

function sixdiv(tagname, divclass1, divclass2) {
  var six_div_element = document.createElement(tagname);
  six_div_element.classList.add(divclass1, divclass2);
  return six_div_element;
}

//---------------------------------------------------

var fname_label = sixlabel("label", "for", "firstname", "FIRST NAME:");
var lname_label = sixlabel("label", "for", "lastname", "LAST NAME:");
var address_label = sixlabel("label", "for", "address", "ADDRESS:");
var state_label = sixlabel("label", "for", "state", "STATE:");
var country_label = sixlabel("label", "for", "country", "COUNTRY:");
var pincode_label = sixlabel("label", "for", "pincode", "PINCODE:");

function sixlabel(tagname, attname, attvalue, contenttext) {
  var six_label_element = document.createElement(tagname);
  six_label_element.setAttribute(attname, attvalue);
  six_label_element.innerHTML = contenttext;
  return six_label_element;
}

//------------------------------------------------------------------

var fname_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "first-name",
  "placeholder",
  "ENTER YOUR FIRSTNAME",
  "required"
);

var lname_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "last-name",
  "placeholder",
  "ENTER YOUR LASTNAME",
  "required"
);
var address_input = sixinput(
  "textarea",
  "type",
  "textarea",
  "class",
  "form-control",
  "id",
  "address",
  "placeholder",
  "ENTER YOUR ADDRESS",
  "required"
);
var state_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "state",
  "placeholder",
  "ENTER YOUR STATE",
  "required"
);
var country_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "country",
  "placeholder",
  "ENTER YOUR COUNTRY",
  "required"
);
var pincode_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "pincode",
  "placeholder",
  "ENTER YOUR PINCODE",
  "required"
);

function sixinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  attname5
) {
  var six_inputtype = document.createElement(tagname);
  six_inputtype.setAttribute(attname1, attvalue1);
  six_inputtype.setAttribute(attname2, attvalue2);
  six_inputtype.setAttribute(attname3, attvalue3);
  six_inputtype.setAttribute(attname4, attvalue4);
  six_inputtype.setAttribute(attname5, "");
  return six_inputtype;
}

//----------------------------------------------------------------

var gender_p = document.createElement("p");
gender_p.innerText = "GENDER:";

//----------------------------------------------------------------

var gender_div1 = genderdiv("div", "class", "gender");
var gender_div2 = genderdiv("div", "class", "gender");
var gender_div3 = genderdiv("div", "class", "gender");

function genderdiv(tagname, attname, attvalue) {
  var gender = document.createElement(tagname);
  gender.setAttribute(attname, attvalue);
  return gender;
}

//----------------------------------------------------------------

var inputmale = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "male",
  "name",
  "gender",
  "id",
  "male",
  "required"
);
var inputfemale = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "female",
  "name",
  "gender",
  "id",
  "female",
  "required"
);
var inputothers = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "others",
  "name",
  "gender",
  "id",
  "others",
  "required"
);

function genderinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  attname5
) {
  var gendertype = document.createElement(tagname);
  gendertype.setAttribute(attname1, attvalue1);
  gendertype.setAttribute(attname2, attvalue2);
  gendertype.setAttribute(attname3, attvalue3);
  gendertype.setAttribute(attname4, attvalue4);
  gendertype.setAttribute(attname5, "");
  return gendertype;
}

//----------------------------------------------------------------

var malelabel = genderlabel("label", "for", "male", "MALE");
var femalelabel = genderlabel("label", "for", "female", "FEMALE");
var otherslabel = genderlabel("label", "for", "others", "OTHERS");

function genderlabel(tagname, attname1, attvalue1, contenttext) {
  var genderLabel = document.createElement(tagname);
  genderLabel.setAttribute(attname1, attvalue1);
  genderLabel.innerHTML = contenttext;
  return genderLabel;
}

//----------------------------------------------------------------

var food_label = document.createElement("label");
food_label.setAttribute("for", "food");
food_label.innerHTML = "FOOD ITEMS:";

//----------------------------------------------------------------

var food_div1 = fooditemsdiv("div");
var food_div2 = fooditemsdiv("div");
var food_div3 = fooditemsdiv("div");
var food_div4 = fooditemsdiv("div");
var food_div5 = fooditemsdiv("div");

function fooditemsdiv(tagname) {
  var foodItems = document.createElement(tagname);

  return foodItems;
}

//------------------------------------------------------------------

var food_input1 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "1) Masala dosa, India.  ",
  "class",
  "checkbox"
);
var food_input2 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "2) Tacos, Mexico.  ",
  "class",
  "checkbox"
);
var food_input3 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "3) Som tam, Thailand.  ",
  "class",
  "checkbox"
);
var food_input4 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "4) Potato chips, United Kingdom.  ",
  "class",
  "checkbox"
);
var food_input5 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "5) Buttered popcorn, United States.  ",
  "class",
  "checkbox"
);

function fooditemsinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4
) {
  var foodinput = document.createElement(tagname);
  foodinput.setAttribute(attname1, attvalue1);
  foodinput.setAttribute(attname2, attvalue2);
  foodinput.setAttribute(attname3, attvalue3);
  foodinput.setAttribute(attname4, attvalue4);
  return foodinput;
}

//----------------------------------------------------------------
var food_label1 = fooditemslabel("label", "for", "food", "Masala dosa, India.");
var food_label2 = fooditemslabel("label", "for", "food", "Tacos, Mexico.");
var food_label3 = fooditemslabel("label", "for", "food", "Som tam, Thailand.");
var food_label4 = fooditemslabel(
  "label",
  "for",
  "food",
  "Potato chips, United Kingdom"
);
var food_label5 = fooditemslabel(
  "label",
  "for",
  "food",
  "Buttered popcorn, United States."
);

function fooditemslabel(tagname, attname, attvalue, contenttext) {
  var foodlabel = document.createElement(tagname);
  foodlabel.setAttribute(attname, attvalue);
  foodlabel.innerHTML = contenttext;
  return foodlabel;
}

//----------------------------------------------------------------

var button_div = document.createElement("div");
button_div.classList.add("form-group", "col-md-10", "buttonstyle");

//----------------------------------------------------------------
var button1 = buttonele(
  "button",
  "btn",
  "btn-primary",
  "innerbutton",
  "type",
  "submit",
  "id",
  "submit",
  "value",
  "SUBMIT",
  "SUBMIT"
);
var button2 = buttonele(
  "button",
  "btn",
  "btn-primary",
  "innerbutton",
  "type",
  "reset",
  "id",
  "reset",
  "value",
  "RESET",
  "RESET"
);

function buttonele(
  tagname,
  class1,
  class2,
  class3,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  contenttext
) {
  var buttons = document.createElement(tagname);
  buttons.classList.add(class1, class2, class3);
  buttons.setAttribute(attname2, attvalue2);
  buttons.setAttribute(attname3, attvalue3);
  buttons.setAttribute(attname4, attvalue4);
  buttons.innerHTML = contenttext;
  return buttons;
}
//----------------------------------------------------------------

var table_div = document.createElement("div");
table_div.classList.add("form-group", "col-md-10");

var tabletag = document.createElement("table");
tabletag.setAttribute("class", "table");
tabletag.setAttribute("border", "1");
tabletag.setAttribute("cellspacing", "0");
tabletag.setAttribute("cellpadding", "");

var tablehead = document.createElement("thead");
tablehead.setAttribute("class", "thead-dark");
tablehead.setAttribute("id", "thead-head");

var tablerow = document.createElement("tr");
tablerow.setAttribute("id", "rowalign");

var table_body = document.createElement("tbody");
table_body.setAttribute("id", "table-styles");

//----------------------------------------------------------------

var th1 = tableheader("th", "scope", "col", "FIRST_NAME");
var th2 = tableheader("th", "scope", "col", "LAST_NAME");
var th3 = tableheader("th", "scope", "col", "ADDRESS");
var th4 = tableheader("th", "scope", "col", "STATE");
var th5 = tableheader("th", "scope", "col", "COUNTRY");
var th6 = tableheader("th", "scope", "col", "PINCODE");
var th7 = tableheader("th", "scope", "col", "GENDER");
var th8 = tableheader("th", "scope", "col", "FOOD");

function tableheader(tagname, attname, attvalue, contenttext) {
  var tablecol = document.createElement(tagname);
  tablecol.setAttribute(attname, attvalue);
  tablecol.innerHTML = contenttext;
  return tablecol;
}
//------------------------------------------------------------

// appending...

document.body.append(maincontainer);
maincontainer.append(formLayout);
formLayout.append(titlecontent);
titlecontent.append(maindiv);
titlediv1.append(div1h1, div1p);

maindiv.append(
  titlediv1,
  fname_div,
  lname_div,
  address_div,
  state_div,
  country_div,
  pincode_div,
  gender_div,
  food_div,

  button_div,
  table_div
);

fname_div.append(fname_label, fname_input);
lname_div.append(lname_label, lname_input);
address_div.append(address_label, address_input);
state_div.append(state_label, state_input);
country_div.append(country_label, country_input);
pincode_div.append(pincode_label, pincode_input);

gender_div.append(gender_p, gender_div1, gender_div2, gender_div3);
gender_div1.append(inputmale, malelabel);
gender_div2.append(inputfemale, femalelabel);
gender_div3.append(inputothers, otherslabel);

food_div.append(
  food_label,
  food_div1,
  food_div2,
  food_div3,
  food_div4,
  food_div5
);
food_div1.append(food_input1, food_label1);
food_div2.append(food_input2, food_label2);
food_div3.append(food_input3, food_label3);
food_div4.append(food_input4, food_label4);
food_div5.append(food_input5, food_label5);

button_div.append(button1, button2);

table_div.append(tabletag);
tabletag.append(tablehead, table_body);
tablehead.append(tablerow);
tablerow.append(th1, th2, th3, th4, th5, th6, th7, th8);

//----------------------------------------------------------------

//submit button preventing:-

var prevent_button = document.getElementById("submit");
prevent_button.addEventListener("click", (ele) => {
  ele.preventDefault();
});

//----------------------------------------------------------------
//SUBMIT BUTTON function:-

button1.addEventListener("click", btnname);

function btnname() {
  var firstname_value = document.getElementById("first-name").value;
  var lastname_value = document.getElementById("last-name").value;
  var address_value = document.getElementById("address").value;
  var state_value = document.getElementById("state").value;
  var country_value = document.getElementById("country").value;
  var pincode_value = document.getElementById("pincode").value;

  //----------------------------------------------------------------

  //creating row for table data:-

  var row1 = document.createElement("tr");
  table_body.append(row1);

  //----------------------------------------------------------------

  //creating the td elements:-

  var res = [];
  for (var i = 0; i < 8; i++) {
    var data = document.createElement("td");
    res.push(data);
  }
  res[0].append(firstname_value);
  res[1].append(lastname_value);
  res[2].append(address_value);
  res[3].append(state_value);
  res[4].append(country_value);
  res[5].append(pincode_value);

  //----------------------------------------------------------

  //gender function:-

  if (male.checked) {
    var male_value = document.getElementById("male").value;
    res[6].append(male_value);
  }
  if (female.checked) {
    var female_value = document.getElementById("female").value;
    res[6].append(female_value);
  }
  if (others.checked) {
    var others_value = document.getElementById("others").value;
    res[6].append(others_value);
  }

  //------------------------------------------------------------------
  //food items function:-

  var checkbox_value = document.getElementsByClassName("checkbox");

  for (var j = 0; j < checkbox_value.length; j++) {
    if (checkbox_value[j].checked) {
      res[7].append(checkbox_value[j].value);
    }
  }

  var null_value = [];
  for (var k = 0; k < checkbox_value.length; k++) {
    if (checkbox_value[k].checked) {
      null_value.push(checkbox_value[k]);
    }
  }

  //-------------------------------------------------------------------

  //null input means..

  if (
    firstname_value == "" ||
    lastname_value == "" ||
    address_value == "" ||
    state_value == "" ||
    country_value == "" ||
    pincode_value == "" ||
    (male_value == "" && female_value == "" && others_value == "") ||
    null_value.length == 0
  ) {
    alert("<< Please, Fill all the input fields >>");
  }
  //-------------------------------------------------------------------------

  //Food items alert when less than 2:-

  if (null_value.length < 2) {
    alert("<<Please select minimum 2 Food items Out of 5>>");
  }

  //----------------------------------------------------------------

  //td appending...

  row1.append(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]);

  //---------------------------------------------------------------------
}
