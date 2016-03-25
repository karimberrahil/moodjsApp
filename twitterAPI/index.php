<?php include "library/twitteroauth.php"; ?>

<?php
	$ConsumerKey = "SSFa2MUj8ePNUanNQS8bihxpW";
	$ConsumerSecret = "Ft2ORF9ZsfXlrNjTYQt5Y41FvLpvAKcBhAw8p6grhqR0k2MH59";
	$AccessToken = "3880564161-pvrK1Va3FdYa0frqqpyy04yBYBO8Ye5lYwfMd0t";
	$AccessTokenSecret = "VkLH8vKBPbQYA5EWzW0U07GsaiFK0fxegqBjDWIXIUABk";
	
	$twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
	
	if(isset($_POST['keywords'])){
		$keywords = $_POST['keywords'];
		$nbTweet = $_POST['nbTweet'];
		
		if(empty($nbTweet)){
			$nbTweet = 10;
		}
		
		$tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=".$keywords."&result_type=recent&count=".$nbTweet);
	}
?>

<!DOCTYPE html>
<html>
	<head>
	        <meta charset="utf-8" />
	        <title>Twitter et Json</title>
		<link href="common/css/reset.css" rel="stylesheet">
		<link href="common/css/style.css" rel="stylesheet">
		
	</head>

	<body>
		<div id="resultat">
			<form action="" method="post">
				<label>Mots-clés* : </label><input type="text" name="keywords" /><br />
				<label>Nombre de tweets : </label><input type="text" name="nbTweet" /><br />
				<input type="submit" name="OK" />
			</form>
			<hr>
			<?php
				if(isset($_POST['keywords'])):
				foreach($tweets->statuses as $tweet):
			?>
			
			<p class="tweet">
				<img src="<?php echo $tweet->user->profile_image_url; ?>" alt="user picture" />
				<span><?php echo $tweet->text; ?></span>
			</p>
			
			<?php
				endforeach;
				else:
			?>
			<p>Veuillez remplir le formulaire</p>
			<?php
				endif;
			?>
		</div>
	</body>
</html>
