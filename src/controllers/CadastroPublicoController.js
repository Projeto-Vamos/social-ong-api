const mongoose = require('mongoose');
const PublicoAtendido = mongoose.model('PublicoAtendido');
const deleteFile = require('../util/fileutils') //ttttt

module.exports = {
    //metodo salvar
    async insert(req, res) {
        let newPublicoAtendido = JSON.parse(req.body.publicoAtendido)
        if (req.files['arquivoFoto']) {
            let fotoSalva = req.files['arquivoFoto'][0]
            newPublicoAtendido.foto = fotoSalva.path
        }
        const publicoAtendido = await PublicoAtendido.create(newPublicoAtendido);
        return res.json(publicoAtendido);
    },
    //metodo listar
    async index(req, res) {
        const { page } = req.query;
        const publicoAtendido = await PublicoAtendido.paginate({}, { page, limit: 500 });
        return res.json(publicoAtendido);
    },
    //metodo detalhes
    async detalhes(req, res) {
        const publicoAtendido = await PublicoAtendido.findById(req.params.id);
        return res.json(publicoAtendido);
    },
    //metodo atualizar
    async atualizar(req, res) {
        let modifiedPA = JSON.parse(req.body.publicoAtendido)
       
        if (req.files['arquivoFoto']) {
            let fotoSalva = req.files['arquivoFoto'][0]
            if(modifiedPA.foto != fotoSalva.path){
                deleteFile(modifiedPA.foto)
            }
            modifiedPA.foto = fotoSalva.path
        }
        const publicoAtendido = await PublicoAtendido.findByIdAndUpdate(req.params.id, modifiedPA, { new: true });
        return res.json(publicoAtendido);
    },
    //metodo deletar
    async delete(req, res) {
        const publicoAtendido = await PublicoAtendido.findById(req.params.id);
        try {
            deleteFile(publicoAtendido.foto)
        } catch (error) {
            console.log(error)
        }
        await PublicoAtendido.deleteOne(publicoAtendido)

        return res.send();
    },

    async calculoIdade() {
        const data = new Date();
        const ano = data.getFullYear() - 6;
        return ano;
    },

    async indexSexoMasculino1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Masculino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexSexoMasculino2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Masculino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexSexoMasculino3(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 15;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 17;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Masculino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },

    async indexSexoMasculinoTotal(req, res) {
        const alunos = await PublicoAtendido.find({ sexo: 'Masculino' });
        return res.json(alunos);
    },

    async indexSexoFemeninoTotal(req, res) {
        const alunos = await PublicoAtendido.find({ sexo: 'Femenino' });
        return res.json(alunos);
    },
    async indexSexoFemenino1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Femenino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexSexoFemenino2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Femenino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexSexoFemenino3(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 15;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 17;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ sexo: 'Femenino', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },

    async indexAnos1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexAnos2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)

        

        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexAnos3(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 15;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 17;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexPreto1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Preto', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexPreto2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Preto', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexPreto3(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 15;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 17;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Preto', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },

    async indexBranco1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Branco', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexBranco2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Branco', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexBranco3(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 15;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 17;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Branco', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexParda1(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 6;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 11;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Parda', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },
    async indexParda2(req, res) {
        let data = new Date();
        const ano = data.getFullYear() - 12;

        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(ano)


        let dat = new Date();
        const an = dat.getFullYear() - 14;
        var dataInicial;
        dataInicial = dat.setDate(1)
        dataInicial = dat.setMonth(1)
        dataInicial = dat.setFullYear(an)

        const alunos = await PublicoAtendido.find({ raca: 'Parda', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },

    // lista de crianças entre 15 e 17 anos que seja Parda
    async indexParda3(req, res) {

        let data = new Date();

        const anoFinal = data.getFullYear() - 15;
        var dataFinal;
        dataFinal = data.setDate(1)
        dataFinal = data.setMonth(1)
        dataFinal = data.setFullYear(anoFinal)

        const anoInicial = data.getFullYear() - 17;
        var dataInicial;
        dataInicial = data.setDate(1)
        dataInicial = data.setMonth(1)
        dataInicial = data.setFullYear(anoInicial)

        const alunos = await PublicoAtendido.find({ raca: 'Parda', dataNascimento: { $gte: dataInicial, $lt: dataFinal } });
        return res.json(alunos);
    },

    async indexCorParda(req, res) {
        const alunos = await PublicoAtendido.find({ raca: 'Parda' });
        return res.json(alunos);
    },
    async indexCorBranca(req, res) {
        const alunos = await PublicoAtendido.find({ raca: 'Branca' });
        return res.json(alunos);
    },
    async indexCorPreta(req, res) {
        const alunos = await PublicoAtendido.find({ raca: 'preto' });
        return res.json(alunos);
    },







}
