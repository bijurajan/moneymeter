describe('Main', function(){

    beforeEach(function(){
        affix('span#odometer [class="odometer"][value="10"]');
    });

    it('should create an odometer', function(){
        var result = Main.createOdometer();

        expect(result.options.value).toEqual(0);
        expect(result.options.el).not.toBeNull();
        expect(result.options.format).toEqual('(,ddd).dd');
        expect(result.options.theme).toEqual('digital');
        expect(result.options.animation).toEqual('count');
    });

    it('should update odometer value', function(){
        var odometer = Main.createOdometer();

        Main.updateMeter(odometer, "12000");

        expect(odometer.value).toEqual(12000);
    });
});
