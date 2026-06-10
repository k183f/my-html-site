$css = Get-Content "E:\111\css\style.css" -Raw
$dataJs = Get-Content "E:\111\js\data.js" -Raw
$baziJs = Get-Content "E:\111\js\bazi.js" -Raw
$tarotJs = Get-Content "E:\111\js\tarot.js" -Raw
$appJs = Get-Content "E:\111\js\app.js" -Raw

$html = Get-Content "E:\111\index.html" -Raw

$html = $html.Replace("/*_DATA_JS_*/", $dataJs)
$html = $html.Replace("/*_BAZI_JS_*/", $baziJs)
$html = $html.Replace("/*_TAROT_JS_*/", $tarotJs)
$html = $html.Replace("/*_APP_JS_*/", $appJs)

Set-Content -Path "E:\111\index.html" -Value $html -Encoding UTF8