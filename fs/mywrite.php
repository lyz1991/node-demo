<?php
 $fs= fopen('./demo','w+');
fwrite($fs,'lyz');
rewind($fs);
echo fread($fs,filesize('./demo'));
