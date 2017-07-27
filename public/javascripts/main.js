var Main = function(){

    var od;

    function createOdometer(){
        var el = document.querySelector('.odometer');
        od = new Odometer({
            el: el,
            value: 0,
            format: '(,ddd).dd',
            theme: 'digital'
        });
        return od;
    }

    function updateMeter(value){
        od.update(value);
    }

    function incrementCount(){
        counter+=1;
        var costPerMember = $("#costPerMember").val();
        var noOfMembers = $("#noOfMembers").val();
        var costPerMemberPerSec = ( costPerMember / 3600 );
        var duration = moment.duration(moment().diff(startTime));
        var seconds = duration.humanize();
        $("#meetingDuration").html("Running for " + seconds);
        Main.updateMeter(counter * costPerMemberPerSec * noOfMembers);
    }

    return {
        createOdometer: createOdometer,
        updateMeter: updateMeter,
        incrementCount: incrementCount
    }
}();