const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

// on crée le conteneur à animation au scroll donc maintenant

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
            let tween = gsap.from(box,{y: -50, opacity: 0, duration: 0.5})
            
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            //.addIndicators()
            .addTo(controller)
        }

    }
})

// foreach permet de faire une action sur toutes les boxes depuis le tableau retourné par allboxes
// pour chaque box on va chercher le rond correspondant donc boucle for qui va ittéré a travers le tableau allBoxes avec tout les ronds
// si ils correspondent on fait l'animation tween, on prend la box et on va la faire apparaitre 