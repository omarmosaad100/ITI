function getCookie(cookieName)
{
    if (arguments.length != 1)
        throw RangeError("Number of parameters should be exactly 1");

    if (typeof(cookieName) != "string")
        throw TypeError("The cookie name must be a string");
    
    let Cookie = document.cookie;
    let ListOfCookies = Cookie.replaceAll(";", "").split(" ");
    let hashMap = new Map;


    for (let i = 0; i < ListOfCookies.length; i++) 
    {
        let nameAndvalue = ListOfCookies[i].split("=");
        hashMap.set(nameAndvalue[0], nameAndvalue[1]);
    }

    return hashMap.get(cookieName);
}

function isInThePast(date) 
{
    const today = new Date();
    return date < today;
}

function setCookie(cookieName, cookieValue, expiryDate)
{
    if (arguments.length != 1)
        throw RangeError("Number of parameters should be exactly 1");
    
    if (typeof(cookieName) != "string")
        throw TypeError("The cookie name must be a string");
    
    if (isInThePast)
        throw RangeError("The expiry date can not be before today");


    if (expiryDate) 
    {
        document.cookie = cookieName + "=" + cookieValue + ";" + "expires=" + expiryDate + ";";
    } 
    else
        document.cookie = cookieName + "=" + cookieValue + ";";
}


function deleteCookie(cookieName)
{
    if (typeof(cookieName) != "string")
        throw TypeError("The cookie name must be a string");

    document.cookie = cookieName + "=; expires= Thu, 01 Jan 1970 00:00:00 UTC";
}

function allCookieList()
{
    console.log(document.cookie);
}


function hasCookie(cookieName)
{
    if (typeof(cookieName) != "string")
        throw TypeError("The cookie name must be a string");
        
    return (cookieName == getCookie(cookieName));
}