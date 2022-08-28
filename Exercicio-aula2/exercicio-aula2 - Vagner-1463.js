class Veiculo {
    placa;
    ano;

    constructor(placa, ano){
        this.setPlaca(placa)
        this.setAno(ano)
    }

    setPlaca(placa){
        this.placa = placa
    }

    setAno(ano){
        this.ano = ano
    }

    getPlaca(){
        return this.placa
    }

    getAno(){
        return this.ano
    }

    exibirDados(){
        process.stdout.write(`Veiculo de placa ${this.getPlaca()}, ano ${this.getAno()}`);
    }
    
}



class Caminhao extends Veiculo {
    eixos;

    constructor(placa, ano, eixos){
        super()
        super.setPlaca(placa)
        super.setAno(ano)
        this.setEixos(eixos)
    }

    setEixos(eixos){
        this.eixos = eixos
    }

    getEixos(){
        return this.eixos
    }

    exibirDados(){
        super.exibirDados()
        console.log(` e ${this.getEixos()} eixos`)
    }
    
}



class Onibus extends Veiculo {
    eixos;

    constructor(placa, ano, assentos){
        super()
        super.setPlaca(placa)
        super.setAno(ano)
        this.setAssentos(assentos)
    }

    setAssentos(assentos){
        this.assentos = assentos
    }

    getAssentos(){
        return this.assentos
    }

    exibirDados(){
        super.exibirDados()
        console.log(` e ${this.getAssentos()} assentos`)
    }
    
}

const novoCaminhao = new Caminhao('ABC123', 2010, 4);
const novoOnibus = new Onibus('DEF456', 2020, 30);

novoCaminhao.exibirDados();
novoOnibus.exibirDados();