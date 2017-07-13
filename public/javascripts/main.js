var el = document.querySelector('.odometer');

od = new Odometer({
    el: el,
    value: 0,
    format: '(,ddd).dd',
    theme: 'digital',
    animation: 'count'
});

od.update(12500);