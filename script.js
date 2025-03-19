function calcResult(page, number) {
    let circleRadius, rectA, rectB, squareLen, trianA, trianB, trianC, halfPer;

    switch (page) {
        case 'circle':
            if (document.querySelector('.input_circle_radius').value) {   
                circleRadius = parseFloat(document.querySelector('.input_circle_radius').value)
            }
            break;
        case 'rectangle':
            if (document.querySelector('.input_rectangle_a').value && document.querySelector('.input_rectangle_b').value) {
                rectA = parseFloat(document.querySelector('.input_rectangle_a').value)
                rectB = parseFloat(document.querySelector('.input_rectangle_b').value)
            }
            break;
        case 'square':
            if (document.querySelector('.input_square_length').value) {
                squareLen = parseFloat(document.querySelector('.input_square_length').value)
            }
            break;
        case 'triangle':
            if (document.querySelector('.input_triangle_length_a').value && document.querySelector('.input_triangle_length_b').value && document.querySelector('.input_triangle_length_c').value) {
                trianA = parseFloat(document.querySelector('.input_triangle_length_a').value)
                trianB = parseFloat(document.querySelector('.input_triangle_length_b').value)
                trianC = parseFloat(document.querySelector('.input_triangle_length_c').value)
                halfPer = (trianA + trianB + trianC) / 2;
            }
            break;
        default:
            break;
    }


    let results = [
        {
            name: 'circle',
            square: Math.PI * (circleRadius ** 2),
            diameter: 2 * circleRadius,
            length: 2 * Math.PI * circleRadius,
        },
        {
            name: 'rectangle',
            square: rectA * rectB,
            perimeter: 2 * (rectA + rectB),
            diagonal: Math.sqrt(rectA ** 2 + rectB ** 2),
            alpha: Math.atan(rectB / rectA),
            beta: Math.atan(rectA / rectB),
        },
        {
            name: 'square',
            square: squareLen ** 2,
            perimeter: squareLen * 4,
            diagonal: squareLen * Math.sqrt(2),
            inner: squareLen / 2,
            outer: squareLen * (Math.sqrt(2) / 2),
        },
        {
            name: 'triangle',
            square: Math.sqrt(halfPer * (halfPer - trianA) * (halfPer - trianB) * (halfPer - trianC)),
            perimeter: halfPer * 2,
            inner: Math.sqrt(((halfPer - trianA) * (halfPer - trianB) * (halfPer - trianC)) / halfPer),
            outer: (trianA * trianB * trianC) / (4 * Math.sqrt(halfPer * (halfPer - trianA) * (halfPer - trianB) * (halfPer - trianC)))
        },

    ]
    
    

    switch (page) {
        case 'circle':
            document.querySelector('.output_circle_length').innerHTML = (results[number].length).toFixed(3)
            document.querySelector('.output_circle_square').innerHTML = (results[number].square).toFixed(3)
            document.querySelector('.output_circle_diameter').innerHTML = (results[number].diameter).toFixed(3)
            break;
        case 'rectangle':
            document.querySelector('.output_rectangle_perimeter').innerHTML = (results[number].perimeter).toFixed(3)
            document.querySelector('.output_rectangle_square').innerHTML = (results[number].square).toFixed(3)
            document.querySelector('.output_rectangle_diagonal').innerHTML = (results[number].diagonal).toFixed(3)
            document.querySelector('.output_rectangle_alpha').innerHTML = (results[number].alpha).toFixed(3)
            document.querySelector('.output_rectangle_beta').innerHTML = (results[number].beta).toFixed(3)
            break;
        case 'square':
            document.querySelector('.output_square_perimeter').innerHTML = (results[number].perimeter).toFixed(3)
            document.querySelector('.output_square_square').innerHTML = (results[number].square).toFixed(3)
            document.querySelector('.output_square_diagonal').innerHTML = (results[number].diagonal).toFixed(3)
            document.querySelector('.output_square_inner').innerHTML = (results[number].inner).toFixed(3)
            document.querySelector('.output_square_outer').innerHTML = (results[number].outer).toFixed(3)
            break;
        case 'triangle':
            document.querySelector('.output_triangle_perimeter').innerHTML = (results[number].perimeter).toFixed(3)
            document.querySelector('.output_triangle_square').innerHTML = (results[number].square).toFixed(3)
            document.querySelector('.output_triangle_inner').innerHTML = (results[number].inner).toFixed(3)
            document.querySelector('.output_triangle_outer').innerHTML = (results[number].outer).toFixed(3)
            break;

        default:
            break;
    }
    

    document.querySelectorAll('.output_text').forEach(element => {
        element.style.display = 'block'
    });
}