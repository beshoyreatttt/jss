var xmlHttp = createXmlHttpRequestObject();

var selected;
var sdOpened = false;
var oracleOpened = false;
var javaOpened = false;

function createXmlHttpRequestObject() 
{  
  	// will store the reference to the XMLHttpRequest object
  	var xmlHttp;
  	// if running Internet Explorer
  	if(window.ActiveXObject)
  	{
   		try
    		{
      			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    		}
    		catch (e) 
    		{
      			xmlHttp = false;
    		}
  	}
  	// if running Mozilla or other browsers
  	else
  	{
    		try 
    		{
      			xmlHttp = new XMLHttpRequest();
    		}
    		catch (e) 
    		{
      			xmlHttp = false;
    		}
  	}
  	// return the created object or display an error message
  	if (!xmlHttp)
	{
		alert("Error creating the XMLHttpRequest object.");
	}
  	else 
    	{
		return xmlHttp;
	}
}

// make asynchronous HTTP request using the XMLHttpRequest object 
function SdInfo()
{
	if(sdOpened)
	{
		document.getElementById('sd').innerHTML = '';
		sdOpened = false;
	}
	else
	{
		selected = "sd";
		SendRequest('html/sd_info.html','html');
		sdOpened = true;
	}
}

function OracleInfo()
{
	if(oracleOpened)
	{
		document.getElementById('oracle').innerHTML = '';
		oracleOpened = false;
	}
	else
	{
		selected = "oracle";
		SendRequest('html/oracle_info.html','html');
		oracleOpened = true;
	}
}

function JavaInfo()
{
	if(javaOpened)
	{
		document.getElementById('java').innerHTML = '';
		javaOpened = false;
	}
	else
	{
		selected = "java";
  		SendRequest('html/java_info.html','html');
		javaOpened = true;
	}
}


function SdDetails()
{
	selected = "sd";
	SendRequest('xml/sd_details.xml','xml');
	sdOpened = true;
}

function OracleDetails()
{
	selected = "oracle";
	SendRequest('xml/oracle_details.xml','xml');
	oracleOpened = true;
}

function JavaDetails()
{
	selected = "java";
	SendRequest('xml/java_details.xml','xml');
	javaOpened = true;
}
function SendRequest(selected,req)
{
	// proceed only if the xmlHttp object isn't busy
  	if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
  	{
		var myurl = selected;
 		myRand = parseInt(Math.random()*999999999999999);
 		// add random number to URL to avoid cache problems
 		var modurl = myurl+"?rand="+myRand;

    		xmlHttp.open("GET", modurl, true);  

    		// define the method to handle server responses
		if(req == "html")
		{
			xmlHttp.onreadystatechange = FillHtml;
		}
		else
		{
			xmlHttp.onreadystatechange = FillXml;
		}
    		
    		// make the server request
    		xmlHttp.send(null);
  	}
}

function FillHtml()
{
	if (xmlHttp.readyState == 4) 
	{
    		if(xmlHttp.status == 200)
		{
       			var page = xmlHttp.responseText;

			document.getElementById(selected).innerHTML = page;

			if(selected == "sd")
			{
				document.getElementById(selected).innerHTML += "<center><br><a href='' onClick='SdDetails();return false'>More</a><br><br></center>"
			}
			else if(selected == "oracle")
			{
				document.getElementById(selected).innerHTML += "<center><br><a href='' onClick='OracleDetails();return false'>More</a><br><br></center>"
			}
			else
			{
				document.getElementById(selected).innerHTML += "<center><br><a href='' onClick='JavaDetails();return false'>More</a><br><br></center>"
			}
    		}
	} 
	else
	{
  		// show img
  	}
}

function FillXml()
{
	if (xmlHttp.readyState == 4) 
	{
    		if(xmlHttp.status == 200)
		{
			var serial = 1;
			var rowNum = 1;
			var rowSpan = 0;
			var newPackage;

			selectedSpan = document.getElementById(selected);

			var page = xmlHttp.responseXml;

       			var dept = page.getElementsByTagName("Dept")[0].getAttribute("name");

			selectedSpan.innerHTML = '<center>' + dept + '</center><br><br>';

		// get the dept. head details
			var head = page.getElementsByTagName("Head")[0];
			var headName = head.childNodes[0].childNodes[0].nodeValue;
			var headTel = head.childNodes[1].childNodes[0].nodeValue;
			var headMail = head.childNodes[2].childNodes[0].nodeValue;

		// display the dept.head details in bullets
			var bullets = 'Dept. Head:<ul><li>Name: ' + headName + '</li>';
			bullets += '<li>Tel: ' + headTel + '</li>';
			bullets += '<li>E-Mail: ' + headMail + '</li></ul>';
			
			selectedSpan.innerHTML += bullets;

		// display courses as a table
			
			// design table header
		
			var table = '<center><table border=2>';

			var row = '<tr><td>Ser.</td><td>Category</td><td>Course Name</td></tr>';

			table += row;

			var categories = page.getElementsByTagName("Category");
			
			for(counter=0;counter<categories.length;counter++)
			{
				// extract each category info
				var category = categories[counter];
				var categoryName = category.getAttribute("Name");
				
				var courses = category.childNodes[0].childNodes;
				rowSpan = courses.length;
				newPackage = true;
				
				for(index=0;index<courses.length;index++)
				{
					var courseName = courses[index].childNodes[0].childNodes[0].nodeValue;
					row = '<tr><td>'+rowNum+'</td>';
					if(newPackage)
					{
						row += '<td rowspan='+rowSpan+'>'+categoryName+'</td>';
						newPackage = false;
					}
					row += '<td>'+courseName+'</td></tr>';
					table += row;
					rowNum++;
				}
			}

			table += '</table><center>';

			selectedSpan.innerHTML += table;
    		}
	} 
	else
	{
  		// show img
  	}
}