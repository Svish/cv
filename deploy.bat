@echo off

pushd %~dp0
winscp /command //^
	"open ""sftp://torleif@geekality.net"""^
	"lcd %~dp0"^
	"cd /home/torleif/cv.geekality.net"^
	"synchronize remote -mirror -transfer=binary -delete -filemask="" | .git*; *.git/; *.cache/; *.sublime-*;"""^
	"exit"
echo.
popd

REM -preview 
REM	"rm "".cache"""^
