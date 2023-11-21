
'launch
systemutil.Run "chrome.exe", "http://advantageonlineshopping.com/#/"

Browser("Advantage Shopping").Page("Advantage Shopping").Sync
wait(6)
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set DataTable("New Users", dtGlobalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "usmandemo@mf.com" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure "645b2b76031f7370753f8f54bd88c1a817ad31bf" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure "645b2b8233b6d84e89636b1e9c6b0f40ac8b94cc" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btnundefined").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").CloseAllTabs

'End
