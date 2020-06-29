@ECHO OFF
@echo off
set ESC=
set Red=%ESC%[1;31m
set Blue=%ESC%[1;34m
set White=%ESC%[1;37m
set Green=%ESC%[1;32m

echo.
echo.
echo %Red%Be sure node.js instaled in your computer 
echo %Red%If not download it from https://nodejs.org/en/download
echo.
echo.

IF EXIST node_modules (
echo %Blue%All modules Instaled trying to start the server
echo.

echo %Green%Open in browser http://localhost:3000 please wait ...
echo.

echo %Blue%Server starting at http://localhost:3000 
echo %White%

IF NOT EXIST .nuxt (
call npm run build
)

explorer "http://localhost:3000"

call npm run start

PAUSE
)

IF NOT EXIST node_modules (
echo.
echo %Red%node_modules not installed trying to install automatically"
echo.
echo %Blue%This may take a while :( please wait ...

call npm install

echo %Green%All modules sucessfully instaled
echo.
echo %Blue%Building the application
echo.

call npm run build

echo %Green%Sucessfully builded
echo.

echo %Blue%Server starting at http://localhost:3000 
echo %White%

explorer "http://localhost:3000"

call npm run start

PAUSE
)