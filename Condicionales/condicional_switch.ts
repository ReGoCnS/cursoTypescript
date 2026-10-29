let planetas:number=0

planetas=Math.floor(Math.random()*9)

switch(planetas){
    case 1: console.log('Mercurio');
    break
    case 2: console.log('Venus');
    break
    case 3: console.log('Tierra');
    break
    case 4: console.log('Marte');
    break
    case 5: console.log('Jupiter');
    break
    case 6: console.log('Saturno');
    break
    case 7: console.log('Urano');
    break
    case 8: console.log('Neptuno');
    break
    case 9: console.log('Pluton');
    break
    default:
        console.log('No es un planeta');
        
}