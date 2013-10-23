$(document).ready(initialize);
function initialize()
{
	// Calender is draggable
	$("#Calender").draggable();
	
	// Initialize the updateDate function
	updateDate();
	setInterval(updateDate, 1000);
}

function transToMonth(MonthNum)
{
	// Translate MonthNum into Month name
	switch (MonthNum)
	{
		case 0:
			return "Jan.";
			break;
		case 1:
			return "Feb."
			break;
		case 2:
			return "Mar."
			break;
		case 3:
			return "Apr."
			break;
		case 4:
			return "May."
			break;
		case 5:
			return "June."
			break;
		case 6:
			return "July."
			break;
		case 7:
			return "Aug."
			break;
		case 8:
			return "Sept."
			break;
		case 9:
			return "Oct."
			break;
		case 10:
			return "Nov."
			break;
		case 11:
			return "Dec."
			break;
		default :
			return "Error!"
			break;
	}
}
function transToDate(DateNum)
{
	// Translate DateNum into date name
	if (DateNum >= 11 && DateNum <= 13)
		return Dateum + "th";
	else if (DateNum >= 1)
	{
		if (DateNum <= 9)
			DateNum = "0" + DateNum;
		switch (DateNum % 10)
		{
			case 1 :
				return DateNum + "st";
				break;
			case 2 :
				return DateNum + "nd";
				break;
			case 3 :
				return DateNum + "rd";
				break;
			default :
				return DateNum + "th";
				break;
		}
	}
	else
		return "Error!";
}
function transToHMS(HMSNum)
{
	// Add 0 if there is only one number
	if (HMSNum >= 0 && HMSNum <= 9)
		return "0" + HMSNum;
	else
		return HMSNum;
}
function transToDay(DayNum)
{
	// Translate DayNum into day name
	switch (DayNum)
	{
		case 0 :
			return "SUN";
			break;
		case 1 :
			return "MON";
			break;
		case 2 :
			return "TUE";
			break;
		case 3 :
			return "WED";
			break;
		case 4 :
			return "THU";
			break;
		case 5 :
			return "FRI";
			break;
		case 6 :
			return "SAT";
			break;
		default :
			return "Error!";
			break;
	}
}
function updateDate()
{
	// Update calender elements
	var date = new Date(),
		element = 0;
	
	element = document.getElementById("Year");
	element.innerHTML = date.getFullYear();
	
	element = document.getElementById("Month");
	element.innerHTML = transToMonth(date.getMonth());
	
	element = document.getElementById("Date");
	element.innerHTML = transToDate(date.getDate());
	
	element = document.getElementById("Hour");
	element.innerHTML = transToHMS(date.getHours());
	
	element = document.getElementById("Minute");
	element.innerHTML = transToHMS(date.getMinutes());
	
	element = document.getElementById("Second");
	element.innerHTML = transToHMS(date.getSeconds());
	
	element = document.getElementById("Day");
	element.innerHTML = transToDay(date.getDay());
	
	delete date;
}
