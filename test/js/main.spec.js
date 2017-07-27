describe('Main', function(){

    beforeEach(function(){
        affix('span#odometer [class="odometer"][value="10"]');
        affix('input#costPerMember[value="100"]');
        affix('input#noOfMembers[value="10"]');
    });

    it('should create an odometer', function(){
        var result = Main.createOdometer();

        expect(result.options.value).toEqual(0);
        expect(result.options.el).not.toBeNull();
        expect(result.options.format).toEqual('(,ddd).dd');
        expect(result.options.theme).toEqual('digital');
    });

    it('should update odometer value', function(){
        var odometer = Main.createOdometer();

        Main.updateMeter("12000");

        expect(odometer.value).toEqual(12000);
    });

    it('should increment counter', function(){
        window.counter = 0;
        window.startTime = moment();
        spyOn(Main, 'updateMeter');
        Main.incrementCount();
        expect(Main.updateMeter).toHaveBeenCalledWith(0.2777777777777778);
    });
});
