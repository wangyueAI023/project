<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/musicplay.css">
    <title>播放器</title>
</head>
<body>
<?php $name=$_GET['name']; ?>
<?php $singer=$_GET['singer']; ?>
    <header>
        <a href="nativemusic.php"><img src="images/left_arrows.png"/></a>
        <div class="musicList">
            <div class="musicName">
                <div><?php echo $name?></div>
                <p><?php echo $singer?></p>
            </div>
            <img src="images/whale.png"/>
        </div>
        <img src="images/share.png"/>
    </header>
    <main>
        <div class="middle">
            <div class="base center">
                <div class="pic">
                    <img src="pic/<?php echo $name?>.jpg" id="pic"/>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="operate">
            <img src="images/heart.png"/>
            <img src="images/download.png"/>
            <img src="images/leaveword.png"/>
            <img src="images/more.png"/>
        </div>
        <div class="playing">
            <audio src="mp3/<?php echo $name?>.mp3" controls="controls" autoplay="autoplay"></audio>
        </div>
    </footer>
    <script src="js/musicplay.js"></script>
</body>
</html>