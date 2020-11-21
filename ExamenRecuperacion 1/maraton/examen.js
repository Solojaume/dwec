window.onload = () => {
	let posicionImagen = 1;
	let img = document.getElementById("imagenes");
	let anterior = document.getElementById("anterior");
	let siguiente = document.getElementById("siguiente");
	let bgaleria = document.getElementById("bgaleria");
	let clasificacion = document.getElementById("clasificacion");
	let galeria = document.getElementById("galeria");
	let clasif = document.getElementById("clasif");
	let formularioClasificacion = document.getElementById("formularioClasificacion");
	
	anterior.addEventListener("click", pasafotos);
	siguiente.addEventListener("click", pasafotos);
	bgaleria.addEventListener("click", muestraGaleria);
	clasificacion.addEventListener("click", muestraClasificacion);

	img.src = "img_" + posicionImagen + ".jpg";

	function muestraGaleria(e) {
		e.preventDefault();
		galeria.style.display = "inline";
		clasif.style.display = "none";
		return false;
	}

	function muestraClasificacion ( e ){
		e.preventDefault();
		galeria.style.display = "none";
		clasif.style.display = "inline";
		return false;
	}

	function pasafotos(e) {
		if (this.id == "anterior") {
			posicionImagen = posicionImagen - 1;
		} else {
			posicionImagen = posicionImagen + 1;
		}
		if (posicionImagen > 3) {
			posicionImagen = 1;
		} else if (posicionImagen < 1) {
			posicionImagen = 3;
		}
		img.src = "img_" + posicionImagen + ".jpg";
	}

	let actualizaListaGanadores = e => {
		let ganadores = new Array(
			new Array(new Array("10K-Junior1", "10K-Junior2", "10K-Junior3"), new Array("10K-Senior1", "10K-Senior2", "10K-Senior3"), new Array("10K-Veteranos1", "10K-Veteranos2", "10K-Veteranos3")),
			new Array(new Array("M-Junior1", "M-Junior2", "M-Junior3"), new Array("M-Senior1", "M-Senior2", "M-Senior3"), new Array("M-Veteranos1", "M-Veteranos2", "M-Veteranos3"))
		);
		console.log(ganadores);
	}
}