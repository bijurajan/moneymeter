var Main = function(){

    var od;

    function createOdometer(){
        var el = document.querySelector('.odometer');
        od = new Odometer({
            el: el,
            value: 0,
            format: '(,ddd)',
            theme: 'digital',
            animation: 'count'
        });
        return od;
    }

    function updateMeter(value){
        od.update(value);
    }

    function incrementCount(){
        counter+=5;
        var costPerMember = $("#costPerMember").val();
        var noOfMembers = $("#noOfMembers").val();
        var costPerMemberPerSec = ( costPerMember / 3600 );
        Main.updateMeter(counter * costPerMemberPerSec * noOfMembers);
    }

    return {
        createOdometer: createOdometer,
        updateMeter: updateMeter,
        incrementCount: incrementCount
    }
}();