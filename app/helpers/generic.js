function isBlank(item) {
	return !item || item == "" || item == [];
}

function root_url(url) {
	var clean_url = url.replace(/^\//, "");
	return PropertyFax.base_url+clean_url;
}
