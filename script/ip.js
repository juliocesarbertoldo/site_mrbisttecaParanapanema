function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == '177.8.250.214') {
                        ip_sistema.src = 'http://ipfixo.in:55807/'
                    }
				});
}

document.onload = carregar()