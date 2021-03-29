import paper from 'paper'

export default function MetaBalls() {
    window.onload = function() {
        paper.install(window);
        paper.setup('paperjs');
 
        view.onFrame = draw;

        
        const path = new Path.Circle({
            center: [0, 0],
            radius: 10,
            fillColor: 'black'
        });

        var tool = new paper.Tool()
    
        tool.onMouseMove = function(event) {
            path.position = event.point;
        }
    }

    function draw(event) {
        var x = 100
        var y = 100
        var r = 50
        for (let i = y; i<= 1300; i += 150){
            for(let j = x; j<= 1300; j += 150){
                new Path.Circle(new Point(j, i), r).fillColor = "#333"
            }
        }
    }
 
    // Most return null
    return null;
}