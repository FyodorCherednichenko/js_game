<html>
 <head>
 <meta charset="utf-8">
  <title>Тестируем PHP</title>
 </head>
 <body> 

<?php
$nick = $_POST['nickname'];
$record = $_POST['nickname'] . ' = ' . $_POST['score'];
$nickarr=array();
$file = 'gamers/gamers.txt';
$h = @fopen($file,"r+");
$check = 0;

     while (($buff = fgets($h,4096))!== false){
         $nickarr = explode("=",$buff);
         $buff = trim($nickarr[0]);
        // echo $buff;
         $counter++;
         if (strcasecmp($buff,$nick)==0){
             fclose($h);
             $h = @fopen($file, "r+");
             $counter = $counter - 1;
             for ($i=0;$i < $counter;$i++){
                $buff = fgets($h,4096);
                }
             $counter = 0;
             fwrite($h,($record . "\n"));
             $check = 1;
        }
     }
     if ($check == 0){
             fwrite($h,($record . "\n"));
         }
     if ($h){
         echo $record;
         //echo 'file is open';
         //file_put_contents("gamers/try.txt",$record);
         //fwrite($h,$record);
     }
fclose($h);
?>
     
 </body>
</html>