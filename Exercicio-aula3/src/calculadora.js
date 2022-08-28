const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(x, y) {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);  
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let r = x + y;
        return r;
    },
    subtracao(x, y) {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);  
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let r = x - y;
        return r;
    },
    multiplicacao(x, y) {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);  
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let r = x * y;
        return r;
    },
    divisao(x, y) {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);  
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let r = x / y;
        return r;
    },
    raizQuadrada(x) {
        const validateNumberX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);   
        if(validateNumberX !== undefined || Math.sign(x) !== 1){
            return 'Error';
        }
        let r = Math.sqrt(x);
        return r;
    },
};

module.exports = Calculadora;