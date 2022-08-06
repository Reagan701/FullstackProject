<template>
<div id="main">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-lg-3 col-xm-12 col-sm-6">
									<div class="wrapper">
							<div class="img-area bg-danger">
								<img id="display-box" src="" height="280" width="380">
							</div>
						<div class="text-area">
							<div class="information-area">
								<div class="info-top">
									<h1>Name <span>Price</span></h1>
									<h2>Description</h2>
									<p>

									</p>
								</div>

								<div class="btn-area">
									<a class="bg-danger" href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
*{
overflow-x: hidden;
}

.wrapper{
	display: flex;
	align-items: center;
	height: 700px;
	width: 700px;
	margin: 0 auto;
}

.img-area{
	position: absolute;
	content: '';
	height: 400px;
	width: 300px;
	display: flex;
	align-items: center;
	border-radius: 0 100% 0 0;
	z-index: 5;
    border-radius: 30px
}

.img-area img
{
	margin-left: -170px;
	margin-top: 60px;
}

.text-area
{
	height: 400px;
	width: 700px;
	background: navy;
    border-radius: 30px
}

.information-area
{
	position: absolute;
	margin-left: 350px;
	height: 400px;
	width: 305px;
}

.info-top h2
{
	color: white;
	letter-spacing: 2px;
	font-weight: 100;
	margin-bottom: 20px;
}

.info-top h1
{
	margin-top: 25px;
	display: inline-block;
	background: white;
	-webkit-text-fill-color: transparent;
	font-family: 'Roboto Condensed', sans-serif;;
}

.info-top h1 span
{
	margin-left: 90px;
}

.info-top p
{
	font-family: 'Roboto Condensed', sans-serif;;
	font-size: 15px;
}

.btn-area a
{
	text-decoration: none;
	background: red;
	color: white;
	display: inline-block;
	margin-top: 35px;
	padding: 15px 30px;
	border-radius: 50px;
	font-family: 'Roboto Condensed', sans-serif;;
}

.btn-area a:before
{
	content: '+';
	padding-right: 10px;
	font-weight: bold;
}

#display-box{
    border-radius: 20px;
}
</style>