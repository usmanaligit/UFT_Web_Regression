
'launch
systemutil.Run "chrome.exe", "http://nimbusserver.aos.com:8000/#/"


'Search Category
Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategory").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=1800").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf3.xml_;_

'checkpoint - Price validation
Browser("Advantage Shopping_2").Page("Advantage Shopping").Check CheckPoint("Price Validation") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync

'close
Browser("Advantage Shopping").CloseAllTabs
