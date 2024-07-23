$(document).ready(function(){
    var count_particles, update;
    
    count_particles = document.querySelector('.js-count-particles');
    
    update = function() 
    {
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
        {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    
    requestAnimationFrame(update);
});