<template>
<div id="main">
    <div class="wrapper">
		<div class="img-area">
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
					<a href="#">Add to cart</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  components: {
    Cards,
  },
};
</script>

<style>

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
	background: linear-gradient(to bottom, red, navy);
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
	background: white;
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
	color: navy;
	letter-spacing: 2px;
	font-weight: 100;
	margin-bottom: 20px;
}

.info-top h1
{
	margin-top: 25px;
	display: inline-block;
	background: -webkit-linear-gradient(#fe051b, #e30057);
	-webkit-background-clip: text;
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
	background: #ff042d;
	color: #fff;
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