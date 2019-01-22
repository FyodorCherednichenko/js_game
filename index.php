<!DOCTYPE html>
<html>
<head>
	<script type="text/php" src='onPHP.php'></script>
    <meta charset="utf-8">
    <title>ENGINE</title>
    <style>
        div{
            background-color: darkgray;
            border-radius: 10px;
            border: 4px solid green;
            display: inline-block;
            
        }
        
        #info{
            margin-top: 50px;
            
            width: 160px;
            height: 230px;
            float: left;
        }
        #list{
            margin-top: 50px;
            margin-right: 10px;
            width: 160px;
            height: 230px;
            float: right;
            overflow: auto;
            overflow-x: auto;
        }
		.tb{
			margin-top:45px;
			margin-left:260px;
			height:20px;
			
		}
		.name{
			width:395px;
			text-align:center;
			background:#ccc;
			border:1px solid blue;
            border-radius: 4px;
		}
		.score{
			width:395px;
			text-align:center;
			background:#fff;
			border:1px solid red;
            border-radius: 4px;
        }
        canvas {background: url(p2.jpg) no-repeat center center fixed;
              display: block;
              margin-top:100px;
              margin-left:270px;
        }
        html {
            background: url(%D1%801.jpg) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    </style>
</head>
<body>

	<table class='tb'>
        <tr>
            <td class='name'>Your Nick Name:</td>
            <td class='score'>Your SCORE:</td>
        </tr>
		<tr>
			<td id='name' class='name'>
			
			</td>
			<td id='score' class='score'>
			
			</td>
		</tr>
	</table>

    <div id='list'>
         <p style="text-align: center;">Gamers List:</p>
    </div>
    <div id='info'>
        <p style="text-align: center;">INFO:</p>
        <p style="text-align: center;">move right:→;</p>
        <p style="text-align: center;">move left:←;</p>
        <p style="text-align: center;">jump:↑;</p>
        <p style="text-align: center;">use flamethrower:space;</p>
        <p style="text-align: center;">reload page for new game</p>
    </div>

    <script type="text/javascript" src="login.js"></script>
    <script type="text/javascript" src="engine.js"></script>
    <script type="text/javascript" src="game.js"></script>
    <script type="text/javascript" src="keys.js"></script>
  
    
    
</body>
</html>