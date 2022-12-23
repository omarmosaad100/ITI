function getCookie(cookieName)
{
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


function setCookie(cookieName, cookieValue, expiryDate) 
{
    if (expiryDate) 
    {
        document.cookie = cookieName + "=" + cookieValue + ";" + "expires=" + expiryDate + ";";
    } 
    else
        document.cookie = cookieName + "=" + cookieValue + ";";
}


function deleteCookie(cookieName)
{
    document.cookie = cookieName + "=; expires= Thu, 01 Jan 1970 00:00:00 UTC";
}

function allCookieList()
{
    console.log(document.cookie);
}


function hasCookie(cookieName)
{
    return (cookieName == getCookie(cookieName));
}