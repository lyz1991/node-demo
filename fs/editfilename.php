<?php
function myedit($path){
    $ds = opendir($path);
    while($files=readdir($ds)){
        if($files!='.' && $files!='..') {
            $curpath = $path.'/'.$files;
            if(is_dir($curpath)){
                myedit($curpath);
            } else {
                $newpath = pathinfo($curpath);
                $newname = $newpath['dirname'].'/'.rand(0,1000000).'.'.$newpath['extension'];
                rename($curpath, $newname);
            }
        }

    }

}
myedit('./img');
?>
