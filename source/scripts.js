function changeHp(change) {

	if (change > 1) {
		change = Number(change) - Number(document.forms[0].currentHp.value);
	}
	
	document.forms[0].currentHp.value = Number(document.forms[0].currentHp.value) + Number(change);
}

function save() {

	if (document.forms[0].name.value != "") {

		var userData = {
			"name" : document.forms[0].name.value,
			"class" : document.forms[0].class.value,
			"race" : document.forms[0].race.value,
			"armor" : document.forms[0].armor.value,
			"hp" : document.forms[0].hp.value,
			"currentHp" : document.forms[0].currentHp.value,
			"level" : document.forms[0].level.value,
			"exp" : document.forms[0].exp.value,
			"strength" : document.forms[0].strength.value,
			"intelligence" : document.forms[0].intelligence.value,
			"wisdom" : document.forms[0].wisdom.value,
			"dexterity" : document.forms[0].dexterity.value,
			"constitution" : document.forms[0].constitution.value,
			"charisma" : document.forms[0].charisma.value,
			"primaryWeapon" : document.forms[0].primaryWeapon.value,
			"primaryHitBonus" : document.forms[0].primaryHitBonus.value,
			"primaryDamage" : document.forms[0].primaryDamage.value,
			"secondaryWeapon" : document.forms[0].secondaryWeapon.value,
			"secondaryHitBonus" : document.forms[0].secondaryHitBonus.value,
			"secondaryDamage" : document.forms[0].secondaryDamage.value,
			"platinum" : document.forms[0].platinum.value,
			"gold" : document.forms[0].gold.value,
			"silver" : document.forms[0].silver.value,
			"copper" : document.forms[0].copper.value,
			"treasure" : document.forms[0].treasure.value,
			"pack" : document.forms[0].pack.value,
			"notes" : document.forms[0].notes.value
		};
		
		$.ajax({
			url : 'source/save.php',
			data : userData,
			type : 'POST',
			success : function (output) {
				alert(output);
			},
			error : function (error) {
				alert(error);
			}
		});
	} else {
		alert("Enter character name");
	}
}

function load()
{
	if (document.forms[0].name.value != "") {
	
	$.ajax({
			url : 'source/load.php',
			data : {"name" : document.forms[0].name.value},
			type : 'POST',
			success : function (output) {
				var valueKey = output.split("~");
				valueKey.forEach(setValue); 
				alert("Character loaded!");
			},
			error : function (error) {
				alert("error! " + error.toString());
			}
		});
	} else {
		alert("Enter character name");
	}
}

function setValue(element, index, array) {
	var data = element.split(":");
	if (data[0] == "name") {
		document.forms[0].name.value = data[1];
	} else if (data[0] == "class") {
		document.forms[0].class.value = data[1];
	} else if (data[0] == "race") {
		document.forms[0].race.value = data[1];
	} else if (data[0] == "armor") {
		document.forms[0].armor.value = data[1];
	} else if (data[0] == "hp") {
		document.forms[0].hp.value = data[1];
	} else if (data[0] == "currentHp") {
		document.forms[0].currentHp.value = data[1];
	} else if (data[0] == "level") {
		document.forms[0].level.value = data[1];
	} else if (data[0] == "exp") {
		document.forms[0].exp.value = data[1];
	} else if (data[0] == "strength") {
		document.forms[0].strength.value = data[1];
	} else if (data[0] == "intelligence") {
		document.forms[0].intelligence.value = data[1];
	} else if (data[0] == "wisdom") {
		document.forms[0].wisdom.value = data[1];
	} else if (data[0] == "dexterity") {
		document.forms[0].dexterity.value = data[1];
	} else if (data[0] == "constitution") {
		document.forms[0].constitution.value = data[1];
	} else if (data[0] == "charisma") {
		document.forms[0].charisma.value = data[1];
	} else if (data[0] == "primaryWeapon") {
		document.forms[0].primaryWeapon.value = data[1];
	} else if (data[0] == "primaryHitBonus") {
		document.forms[0].primaryHitBonus.value = data[1];
	} else if (data[0] == "primaryDamage") {
		document.forms[0].primaryDamage.value = data[1];
	} else if (data[0] == "secondaryWeapon") {
		document.forms[0].secondaryWeapon.value = data[1];
	} else if (data[0] == "secondaryHitBonus") {
		document.forms[0].secondaryHitBonus.value = data[1];
	} else if (data[0] == "secondaryDamage") {
		document.forms[0].secondaryDamage.value = data[1];
	} else if (data[0] == "platinum") {
		document.forms[0].platinum.value = data[1];
	} else if (data[0] == "gold") {
		document.forms[0].gold.value = data[1];
	} else if (data[0] == "silver") {
		document.forms[0].silver.value = data[1];
	} else if (data[0] == "copper") {
		document.forms[0].copper.value = data[1];
	} else if (data[0] == "treasure") {
		document.forms[0].treasure.value = element.substring(9);
	} else if (data[0] == "pack") {
		document.forms[0].pack.value = element.substring(5);
	} else if (data[0] == "notes") {
		document.forms[0].notes.value = element.substring(6);
	}
}