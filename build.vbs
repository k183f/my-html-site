Set fso = CreateObject("Scripting.FileSystemObject")

Function ReadFile(path)
    Set file = fso.OpenTextFile(path, 1, False, 0)
    ReadFile = file.ReadAll()
    file.Close
End Function

Function WriteFile(path, content)
    Set file = fso.CreateTextFile(path, True, True)
    file.Write content
    file.Close
End Function

css = ReadFile("E:\111\css\style.css")
dataJs = ReadFile("E:\111\js\data.js")
baziJs = ReadFile("E:\111\js\bazi.js")
tarotJs = ReadFile("E:\111\js\tarot.js")
appJs = ReadFile("E:\111\js\app.js")

' Read temporary index.html
html = ReadFile("E:\111\index.html")

' Replace CSS placeholder
html = Replace(html, "/*_CSS_PLACEHOLDER_*/", css)

' Read the HTML body template from build.ps1
Set buildFile = fso.OpenTextFile("E:\111\build.ps1", 1, False, 0)
buildContent = buildFile.ReadAll()
buildFile.Close

' Extract the HTML body part between </style> and <script>
' Find the body part: everything between </style>\n</head>\n<body>\n and \n    <script>
startMarker = "</style>" & vbCrLf & "</head>" & vbCrLf & "<body>"
endMarker = vbCrLf & "    <script>"

pos1 = InStr(buildContent, startMarker)
pos2 = InStr(buildContent, endMarker)

If pos1 > 0 And pos2 > 0 Then
    bodyPart = Mid(buildContent, pos1 + Len(startMarker), pos2 - pos1 - Len(startMarker))
    ' Replace the HTML body placeholder
    html = Replace(html, "<!--_HTML_BODY_PLACEHOLDER_-->", bodyPart)
End If

' Replace JS placeholder with all JavaScript files
allJs = dataJs & vbCrLf & baziJs & vbCrLf & tarotJs & vbCrLf & appJs
html = Replace(html, "/*_JS_PLACEHOLDER_*/", allJs)

WriteFile "E:\111\index.html", html

WScript.Echo "Build complete: " & Len(html) & " chars"