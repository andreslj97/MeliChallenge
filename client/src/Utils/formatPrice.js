const formatPrice = (price)=> {
    let formatLocale = Intl.NumberFormat('es-AR');
    return (!(isNaN(Number(price)))) ? formatLocale.format(price) : price
}

export default formatPrice

