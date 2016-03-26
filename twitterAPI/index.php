<?php include "library/twitteroauth.php"; ?>
<?php
	$ConsumerKey = "SSFa2MUj8ePNUanNQS8bihxpW";
	$ConsumerSecret = "Ft2ORF9ZsfXlrNjTYQt5Y41FvLpvAKcBhAw8p6grhqR0k2MH59";
	$AccessToken = "3880564161-pvrK1Va3FdYa0frqqpyy04yBYBO8Ye5lYwfMd0t";
	$AccessTokenSecret = "VkLH8vKBPbQYA5EWzW0U07GsaiFK0fxegqBjDWIXIUABk";
	
	$twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
	
	
	if(isset($_POST['keywords']) && $_POST['keywords'] != ''){
		
		$keywords = $_POST['keywords'];
		$nbTweet = $_POST['nbTweet'];
		
		if(empty($nbTweet)){
			$nbTweet = 15;
		}
		
		$tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=".$keywords."&result_type=recent&count=".$nbTweet);
		if(!empty($nbTweet)){
			$countTweet = count($tweets->statuses);
		}
		else {
			$countTweet = 1;
		}
	}
?>
<!DOCTYPE html>
<html >
	<head>
	 <title>MoodApp</title>
	 <meta charset="utf-8" />
		 <link href="common/css/style.css" rel="stylesheet">
		 <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
		 <script src="http://code.jquery.com/jquery-latest.min.js"></script> 
		 <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
		 <script src="js/twitterMood.js"></script>
	</head>
	<body >	
		<div id="widthGlobal">
			<div id="resultat">
				<div class="row">
			   		<div class="col-sm-12">
						<div class="jumbotron">
							<div class="title">
							    <h1>Mood App : An happy search</h1> 
							    <p>
							    	You are looking for word which make persons happy ? You are at the right place !
							    </p> 
							</div>
				  		</div>
				  	</div>
				 </div>
			   	<div class="row">
			   		<div class="col-sm-6">
			   			<div class="panel panel-default">
			   				<div class="panel-heading">
			   					<h3>Searching for hapiness</h3>
			   				</div>
		  					<div class="panel-body">
		  						<form  action="" method="post">
								    <div class="form-group">
								      <label >Key words* :</label>
								      <input type="text" name="keywords" class="form-control" placeholder="Bonne humeur">
								    </div>
								    <div class="form-group">
								      <label for="disabledSelect">Disabled select menu</label>
								      <input type="text" name="nbTweet" class="form-control"  placeholder="10" />
								    </div>
								    <input class="btn btn-primary" type="submit" name="OK"  />
								</form>
		  					</div>
						</div>
			   		</div>
			   		<div class="col-sm-6">
			   			<div class="panel panel-default">
			   				<div class="panel-heading">
			   					<h3>Stats <button id="statsButton" class="btn btn-primary" type="button">stats</button></h3>
			   				</div>
			   				<div class="stats">
					   			<div class="progress">
								  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
								    40% <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
								  </div>
								</div>
								<div class="progress">
								  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
								    20% <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 
								  </div>
								</div>
								<div class="progress">
		  							<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
		    						80% <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
		  							</div>
								</div>

							</div>		
						</div>	
			   		</div>
			   	</div>
		   		<div class="row">
		   			<div class="col-sm-12">
			   			<div class="list-group" data-number="<?php if (isset($countTweet)){echo $countTweet;}?>">
						
						<?php
							if(isset($_POST['keywords']) && $_POST['keywords'] != ''):
								
								foreach($tweets->statuses as $tweet):

						?>
							<li class="list-group-item">
								<div class="row ">
									<div class=" userImage col-sm-3 ">
										<img class="img img-thumbnail" src="<?php echo $tweet->user->profile_image_url; ?>" alt="user picture" />
									</div>
									<div class=" userName col-sm-3">
										<?php echo $tweet->user->name; ?>
									</div>
									<div class=" userText col-sm-6">
										<span class="titleTweet"> Tweet :</span><br><br>
										<span ><?php echo $tweet->text; ?></span>
										<input class="tweetText" type="hidden"  value= "<?php echo htmlspecialchars(preg_replace("#[^a-zA-Z]#", "",$tweet->text)); ?>"></input>
									</div>
								</div>	
							</li>
		
							<?php
									endforeach;
								else:
							?>
							<div class="col-md-12">
								Veuillez remplir le formulaire
							</div>
							<?php
								endif;	
							?>
						</div>
					</div>	
	   			</div>
			</div>
		</div>
	</body>
</html>

