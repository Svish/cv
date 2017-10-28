@echo off

pushd %~dp0
REM Sync with remote
winscp /command //^
	"open ""sftp://torleif@geekality.net"""^
	"lcd %~dp0"^
	"cd /home/torleif/cv.geekality.net"^
	"synchronize remote -mirror -transfer=binary -delete -filemask="" | .git*; *.git/; *.cache/; *.sublime-*;"""^
	"exit"
echo.

REM Lint with Sonar
sonar https://cv.geekality.net

popd
