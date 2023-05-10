
'launch
systemutil.Run "chrome.exe","http://advantageonlineshopping.com/#/"


'Log in 


Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set DataTable("New Users", dtGlobalSheet) @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "645b2dfff2ea8dd3f8fe26d2b6ccc602cc506ad5" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf15.xml_;_

'Log out

Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu_2").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click @@ script infofile_;_ZIP::ssf19.xml_;_

browser("Advantage Shopping").CloseAllTabs

'End
