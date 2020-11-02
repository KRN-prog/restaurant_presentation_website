<!-- Start reservation Area -->
<section class="reservation-area section-gap relative">
	<div class="overlay overlay-bg"></div>
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-6 reservation-left">
				<h1 class="text-white">Reservez votre place !</h1>
				<p class="text-white pt-20">
					Pensez à réserver votre place avant qu'une autre personne ne vous la prenne
				</p>
			</div>
			<div class="col-lg-5 reservation-right">
				<form class="form-wrap text-center" action="#">
					<input type="text" class="form-control" name="name" placeholder="Nom" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nom'" >
					<input type="email" class="form-control" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" >
					<input type="text" class="form-control" name="phone" placeholder="Numéro de téléphone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Numéro de téléphone'" >
					<input type="text" class="form-control date-picker" name="date" placeholder="Date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Date'" >
					<div class="form-select" id="service-select">
						<select>
							<option data-display="">Nombre de convives</option>
							<option value="1">1 personne</option>
							<option value="2">2 personnes</option>
							<option value="3">3 personnes</option>
							<option value="4">Nombreux</option>
						</select>
					</div>
					<button class="primary-btn text-uppercase mt-20">Envoyer votre réservation</button>
				</form>
			</div>
	</div>
	</div>
</section>
<!-- End reservation Area -->