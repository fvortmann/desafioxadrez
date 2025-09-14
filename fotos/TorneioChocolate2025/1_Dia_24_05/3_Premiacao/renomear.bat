@echo off
setlocal enabledelayedexpansion

REM Caminho da pasta (pode trocar "." pelo caminho completo)
set "pasta=."

REM Contador inicial
set /a cont=1

REM Percorre arquivos de imagem (jpg, png, jpeg)
for %%f in ("%pasta%\*.jpg" "%pasta%\*.png" "%pasta%\*.jpeg") do (
    REM Pega apenas o nome sem caminho
    set "nome=%%~nxf"

    REM Se o arquivo começar com "0", pula
    if /I not "!nome:~0,1!"=="0" (
        REM Descobre a extensão
        set "ext=%%~xf"
        ren "%%f" "!cont!!ext!"
        set /a cont+=1
    )
)

echo Renomeados !cont! arquivos.
pause
